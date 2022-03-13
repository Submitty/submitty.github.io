---
title: Routes & Response Object
category: Developer > Software and System Design
redirect_from:
  - /developer/router-response
  - /developer/router_response
---

This page is a more in-depth look at the Router and the Response PHP
object, it also covers common use cases and uses more examples. You
can go to this [page](/developer/router) for reference on the router
only.

## Routes

In order to call PHP functions serverside in the controller files, a
route is required. Routes are defined as PHP annotations which look
like docstrings. You can think of PHP functions as endpoints that get
mapped to different routes via the router.

```php
/**
* @Route("/courses/{_semester}/{_course}/gradeable/{gradeable_id}/team/new")
*/
public function createNewTeam($gradeable_id){
```

Above is an example route that points to a function in the
`TeamController.php` The parts of the router within curly brackets can
change. For example, the following URL would match the above route

```
https://submitty.myuniversity.edu/s20/csci1234/gradeable/my_gradeable/team/new
```

Whenever the above URL is sent in an HTTP request, the `createNewTeam` 
function will also be called.

The "s20" in the URL matches `_semester` and "csci1234" for
`course`. "my_gradeable" takes the place of `gradeable_id`. The value
of `gradeable_id` is also being used as the parameter in the
`createNewTeam` function in this case when the function is called, the
PHP variable `$gradeable_id` will have the same value as whatever was
part of the URL, in this example, it will be "my_gradeable".  Notice
the domain name does not matter since it will not change, only the URL
after the base-name matters.

#### Multiple Variables

Functions can have multiple parameters sent to them through a URL.

```php
/**
* @Route("/courses/{_semester}/{_course}/example_route/{var1}/{var2}/{var3}")
*/
 public function example($var1, $var2, $var3){
```

#### Pattern Matching Route Variables

Functions may expect their variables to be numeric or alphabetical
only, you can use the router to pattern match specific variables to
prevent bad data from getting sent to your functions. Here are some
[examples](/developer/software_and_system_design/router#route-that-uses-post)


#### Specifying request types

Certain functions should only be called through a specific type of
HTTP [request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).
This is most often done with POST requests which carry additional data in the
request body. By adding `methods={""}` after the URL in a route annotation you
can make sure the router matches certain types of requests only.

```php
/**
 * @Route("/courses/{_semester}/{_course}/course_materials/upload", methods={"POST"})
 */
public function ajaxUploadCourseMaterialsFiles() {
```

The router will automatically check all POST requests for valid 
Cross Site Request Forgery (CSRF) tokens. POST requests are required to 
send a valid token to prevent CSRF attacks.

*Functions that are expecting POST requests only should explicitly have this annotation*

By default, the router will allow any type of request if `methods` is not 
defined.

#### Multiple Routes

A PHP function can have multiple routes point towards it. This is 
typically done for optional parameters and the API.

```php
 /**
 * @Route("/courses/{_semester}/{_course}/gradeable/{gradeable_id}")
 * @Route("/courses/{_semester}/{_course}/gradeable/{gradeable_id}/{gradeable_version}")
 */
 public function showHomeworkPage($gradeable_id, $gradeable_version = null){
```

The above example allows users to optionally include a
gradeable_version in the URL while still calling the same function.

#### Access Control

The router can also restrict certain users by pattern matching against the user's access group. This can be done by adding the "\@AccessControl" annotation and giving a specific role. The following roles can be used
in this annotation:

* INSTRUCTOR
* FULL_ACCESS_GRADER
* LIMITED_ACCESS_GRADER 
* STUDENT

```php
/**
 * @Route("/courses/{_semester}/{_course}/course_materials/edit", methods={"POST"})
 * @AccessControl(role="INSTRUCTOR")
 */
public function ajaxEditCourseMaterialsFiles() {
```

The above example will allow only users with the role "instructor"
assigned to them. It is recommended to use this type of access control
whenever possible as it will automatically perform the check and send
an appropriate error message to other roles trying to reach this endpoint that do not have access.

You can also perform access control by restricting users with certain 
permissions. This can be done by passing in the "permission" field within the access control annotation. 

```php
/**
 * @Route(/example/access)
 * @AccessControl(permission="path.read.rainbow_grades")
 */
public function examplePermissionAccess(){
```

The above access will allow only users with permission to view the 
rainbow grades directory. You can view the list of permissions under
[Access.php](https://github.com/Submitty/Submitty/blob/master/site/app/libraries/routers/AccessControl.php)

*Note* You can restrict users by permission and role at the same time by using both parameters : `@AccessControl(role="STUDENT", permission="gradeable.submit.everyone")`


Certain controllers can have every function restricted to a certain
role, for example the controllers under `site/app/controllers/admin`.
You can annotate access across an entire class at once to prevent writing the same thing over every function.

```php
/**
 * Class AdminGradeableController
 * @AccessControl(role="INSTRUCTOR")
 */
class AdminGradeableController extends AbstractController {
```

Every function within `AdminGradeableController.php` will share this
annotation.

However, method level access annotations will take priority over class level. Typically you should either use one top level class access annotation or all method level annotations, a mix of both can be confusing to figure out what the proper access behavior should be.

### The API 

Typically HTTP requests are sent to a server running an instance of Submitty via a web browser. Once a request is sent, a response is sent back containing HTML, media, and other resources to display on the browser.

An alternative to using a browser is developing your own client such as a python script to send requests directly to the server. However, parsing an HTML response is difficult, especially for the complex web pages served by Submitty. The API was developed to ease this task and allow developers to write custom programs to interact with Submitty to fulfill specific needs that would not make sense as full features.

Any php function can act as an API endpoint by simply adding an API route annotation. API routes are almost identical to normal routes and 
behave very similarly as well.

API routes always start with `/api/`. The following are examples of valid API routes.

```php
/**
* @Route("/api/courses/{_semester}/{_course}/users", methods={"GET"})
* @Route("/api/courses", methods={"POST"})
*/
```

#### Different Response Types

API routes can point to PHP functions at the same time as normal routes.
Requests using the API will either receive a JSON response or a 
redirect response but should not be sent HTML. Whereas a normal route will normally send HTML or a redirect response to the user. The different types of responses will be explained in depth later.

To decide what type of response will be sent back, the MultiResponse object is used. This allows a single function to
return different types of responses, allowing us to reuse code and support API operation with minimal changes.

### Additional Information

The API is currently a work in progress. Submitty uses a RESTful API design and has its own separate [docs](https://github.com/Submitty/api.submitty.org) and is hosted [here](https://api.submitty.org/#introduction)

[Feature Flags](https://github.com/Submitty/api.submitty.org) are a method of allowing instructors to configure the usage of certain features, one way of using feature flags is through the FeatureFlag annotation which uses the router to check the config settings before matching a route.


## The MultiResponse Object

Here is a basic example of the multiResponse object:
```php
/**
* @Route("/example/method", methods={"GET"})
* @Route("/api/example/method", methods={"GET"})
*/
public function foo(){
    return new MultiResponse(
        JsonResponse::getSuccessResponse("It worked!"),
        new WebResponse(
            'NavigationView::class',
            'showGradeables',
            $var1, $var2
        ),
        null
    );
}
```

This function returns a MultiResponse object which allows the router
to send different types of responses based on where the request came from. If the above function was called from the API route, a JSON
response would be sent back. If sent from a normal route, the user would receive an HTML response.

A new MultiResponse object is being created which has 3 parameters, (all of them are optional since a mix of any 3 can be sent).
The first takes a JSON response, the second a WebResponse, and the third for RedirectResponse. In this example, we are only ever sending a possible JSON or Web response so the third parameter in the MultiResponse constructor is sent as null.

Here is a brief overview of the different types of responses

### JsonResponse

A JSON Response will send a content type of JSON. This is useful for API responses which can easily parse JSON compared to HTML. This type of response is also useful for communicating between the front-end and back-end. For example, JavaScript can send a request by either changing pages or by sending an AJAX request. This would be a scenario where using the API internally would make sense.

Submitty has a standard specification for how our JSON response should look like, you can see the spec [here](/developer/json_responses). A JSON response can either be a success, failure, or error.

The first example uses a static function to create a JSON response object to be used in the first parameter of the MultiResponse constructor. 

Here are the function stubs that can generate a JSON response object for you. These are defined under `site/app/libraries/response/jsonResponse`.

```php
getSuccessResponse($data = null) 
getFailResponse($message, $data = null)
getErrorResponse($message, $data = null, $code = null)
```

*It is recommended that you use these functions instead of calling the JsonResponse constructor yourself as these conform to our response spec already*


Example usage:

```php
return JsonResponse::getSuccessResponse('It worked!')
);
```

If we were to run this code we would get the following json back:

```json
{
    "status" : "success",
    "data" : "It worked!"
}
```

The data parameter can also be a php array, or other PHP primitive which will get JSON encoded as a list or dictionary.


### WebResponse

A WebResponse has a content type of text and will return HTML for the browser to render. This is often used for routes used for displaying web pages through GET requests, API requests should not be sent HTML.

A WebResponse works by calling a specific function inside of a PHP view file under `site/app/views`.

```php
return new WebResponse(
    admin\DockerView::class,
    'displayDockerPage',
    $json, 
    $var2, 
    $var3
);
```

A WebResponse constructor first takes a list of strings that create a path pointing to a view file, then a function that is defined within that view file, and finally all the variables that function requires.

The target file will always begin its search at `site/app/views`. In the above example, the router will then search `site/app/views/admin` for a file named `DockerView.php`. Notice that the extension is not used along with the word "View". This is done so the router has better control over which files to search for and which files to ignore. For example, a file located `/views/a/baz/fooBarView.php` would be written as`['a','baz','fooBar']`.

The second parameter must be the name of a public function defined in the target file. Finally, the rest of the arguments are any parameters the function expects.

To summarize the above example would be as if the router would call go to the file `site/app/views/DockerView.php`, and call the function `displayDockerPage($json, $var2, $var3)`.

### Redirect Response

A redirect response will send the user to a different page, this response uses the standard 302 Found HTTP code. If a user gets this response from a browser they will immediately change pages to the provided URL, the API will also receive a plaintext URL and the 302 response code. 

This can be used for custom access or permission checks if a user is not allowed to see a resource they will be sent to an error page displaying the issue. For example, if a user tries a URL to see a file not available to them or if a gradeable is not released yet.

Example usage:
```php
return new RedirectResponse($this->core->buildUrl(['home']));
```

The RedirectResponse object only expects a URL, you should never hardcode a URL but instead use the `buildUrl` function as shown above.
The `buildUrl` function takes a list of strings and glues them together into a full URL.

If the domain name was submitty.myuniversity.edu and you called the function
```php
$this->core->buildUrl(['home','gradeables','foo', 'bar']))
```
you would receive the URL : 
```
https://submitty.myuniversity.edu/home/gradeables/foo/bar
```

### Using the MultiResponse Object

It is recommended you use the MultiResponse object for new controllers moving onwards 
