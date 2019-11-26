---
title: Router
category: Developer
---

### Overview

![Router Structure](/images/router_structure.png)

The router takes a request as input, matches it against a predefined collection of routes, checks its validity and calls the corresponding function which returns a `Response` object for rendering.

**URL matching** is done by the [Symfony routing component](https://symfony.com/doc/current/components/routing.html), which has been part of Submitty since [v.19.06.01](<https://submitty.org/sysadmin/version_notes/v.19.06.01>).

**Validity checking** checks if the user is authorized to access certain parts of Submitty. For example, a user who is not logged in is not allowed to go anywhere else but login page. Also, a student will be prevented from accessing pages only accessible to instructors. If validity checking is not passed, the user will be redirected to appropriate pages or, for API calls, get JSON responses with fail status.

**Function call** is a process that calls the proper function. All parameters in the URL will be passed into the functions if there are corresponding parameter definitions in function signatures. The function returns a `Response` which carries necessary information to display.

### Usage

While a complete instruction on usage can be found at [Symfony Documentation](https://symfony.com/doc/current/components/routing.html#usage). Here, several examples at Submitty will be given to help developers set up routes quickly.

It is assumed that `use Symfony\Component\Routing\Annotation\Route` is contained in the header of the file.

#### Route without Course Information

While most routes in Submitty are specific to one course, there are places that do not need course information like login page or home page.

For those routes, it is simple to set up a route.

```php
/**
 * @Route("/home")
 */
public function showHomepage() {...}
```

#### Route with Course Information

A majority of links in Submitty require course information to return correct contents. Therefore, it is necessary for the router to know which `(semester, course)` tuple is requested. It is needed to prepend the route with `/{_semester}/{_course}`. The course information will be loaded automatically before calling the function.

```php
/**
 * @Route("/{_semester}/{_course}/reports")
 */
public function showReportPage() {...}
```

To visit the page defined above, simply go to `{base_url}/f19/sample/reports`. If you are using Ubuntu 18.04 VM, going to `http://192.168.56.111/f19/sample/reports` should take you to the right page.

#### Route with Parameters

Sometimes we may want to pass parameters to functions. Wrapping the parameter name with brackets will do the trick.

```php
/**
 * @Route("/{_semester}/{_course}/student/{gradeable_id}")
 */
public function showHomeworkPage($gradeable_id){...}
```

Note that `{_semester}` and `{_course}` are actually special cases of parameters that are automatically processed by the router.

Also, note that parameters in the `GET` query are passed to the function too without the need for explicit definition as long as parameter names are the same.

```php
/**
 * @Route("/authentication/login")
 */
public function loginForm($old = null) {...}
```

The value of `$old` will be set to `Submitty` if you go to `/authentication/login?old=submitty`.

#### Route with Parameter Requirements

In some cases, you may want routes to match number-only parameters, or those not starting with certain words. This could be done by adding a `requirements` field in the route definition.

```php
/**
 * @Route("/{_semester}/{_course}/notifications/{nid}", requirements={"nid": "[1-9]\d*"})
 */
public function openNotification($nid) {...}
```

```php
/**
 * @Route("/{_semester}/{_course}", requirements={"_semester": "^(?!api)[^\/]+", "_course": "[^\/]+"})
 */
public function navigationPage() {...}
```

#### Route that Uses `POST`

To prevent [cross-site request forgery](https://en.wikipedia.org/wiki/Cross-site_request_forgery), all `POST` requests (except those related to authentication) are forced to pass CSRF checks. While the router can automatically detect `POST` requests by seeing if `$_POST` is empty, it is recommended to explicitly state that the route accepts only `POST` access considering that `$_POST` may be empty for `POST` requests.

Note that, by default, the `methods` of routes are set to be `ALL`, which means the route accepts all kind of requests. Therefore, in some cases one route may be masked by another. If you have two routes with the same name, please specify the `methods` of both.

```php
/**
 * @Route("/home/change_username", methods={"POST"})
 */
public function changeUserName(){...}
```

#### Route that Needs Access Control

Access control can be enforced easily via `@AccessControl` annotation. Please add `use app\libraries\routers\AccessControl` to the file before using it.

For example, the following route will only allow instructor access.

```php
/**
 * @Route("/{_semester}/{_course}/course_materials/modify_permission")
 * @AccessControl(role="INSTRUCTOR")
 */
public function modifyCourseMaterialsFilePermission($filename, $checked)
```

For more examples about `@AccessControl`, please read [the documentation in the code](https://github.com/Submitty/Submitty/blob/master/site/app/libraries/routers/AccessControl.php).

#### Route for API

To create a route for the [Submitty API](https://api.submitty.org), the only difference from above is prepending `/api` to
the route definition. You can define several routes for the same method, generally having one API route and one Web route.
Any route that uses the `/api` goes through a slightly different authentication mechanism involving
[JSON Web Tokens](https://api.submitty.org/#authentication).

For example, the following route is the API for list of courses:

```php
/**
 * @Route("/home/courses/new", methods={"POST"})
 * @Route("/api/courses", methods={"POST"})
 */
public function createCourse()
```

And an API route for a method within a course:

```php
/**
 * @Route("/{_semester}/{_course}/users", methods={"GET"})
 * @Route("/api/{_semester}/{_course}/users", methods={"GET"})
 */
public function getStudents()
```

Any API endpoint must either return a `JsonResponse` or a `RedirectResponse`
(see [below](/developer/router#what-is-the-response-object-is-it-required) for more information).

### FAQ

Here are some frequently asked questions regarding the router.

#### What is the `Response` object? Is it required?

It is not required to return a `Response` object.

The `Response` object is used for handling both web responses and JSON responses. When building an API for Submitty, we envision that some functions can be reused and return different types of data depending on if it is an API call.

There are three optional parts of `Response`s: `WebResponse`, `JsonResponse`, and `RedirectResponse`. In an ideal world, we would like all controller methods to always return a `Response`, and render it depending on the context. If there exists only one component, say there is only `JsonResponse`, then render it. If there are multiple components, say `JsonResponse` and `WebResponse`, then render `JsonResponse` for API calls and `WebResponse` for browser access.

As API is still a work in progress, more detailed documentation on `Response` will be written as it matures. For now, considering the efforts needed to refactor all the code and the limited benefits it brings for most methods, it is **optional** to return a `Response` object. Backward compatibility is ensured.

#### Are there any naming conventions for URLs?

It is recommended to use `snake_case` for URLs consisting of multiple words.

#### How to construct URLs?

For PHP, use `Core::buildUrl` or `Core::buildCourseUrl`.

For JavaScript, use `buildUrl` or `buildCourseUrl`.

`Core::buildCourseUrl` in PHP and `buildCourseUrl` in Javascript will prepend course information to the URL (e.g. `/f19/sample`).
