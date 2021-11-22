---
title: Controller
category: Developer
---

The Controller is part of the [Model-View-Controller](index) software
design pattern.

The Controller acts as the gateway for taking in a user's request,
collecting the data from a [Model](model), and passing it along to the
appropriate [View](view).

## Example: User Controller

A request to view the `UserDetails` page would first hit the
`UserController`, which might look something like this:

```PHP
/**
* Route to view the userDetailsPage.
* @Route("/{_semester}/{_course}/show_user_details", methods={"GET"})
* @AccessControl(role="INSTRUCTOR")
**/

public function userDetailsPage($user_id) {
   $user = $this->core->getQueries()->getUserFromId($user_id);
   if ($user) {
       return new WebResponse(
               "\app\views\user\UserView::class"
               'showUserDetails',
               $user
           )
       );
   } else {
       // render an error
   }
}
```

From the website, they can now make a request which routes to the
`userDetails` page. Something like
`f20/sample/show_user_details?user_id="aphacker"`

Because we added `@AccessControl(role="INSTRUCTOR")`, only instructor
level users can access this page.

The `$user_id` parameter to our function is populated from the
parameters of the GET request `?user_id="aphacker`.

When we call `$this->core->getQueries()->getUserFromId($user_id);` a
database query is run which loads information for the user with a
matching id into a `UserModel`.  See also the [Model](model) documentation.

## Returning a MultiResponse / WebResponse

If `$user` was successfully loaded (it's not null), we can render the
page by returning a new MultiResponse object which contains a
WebResponse.

1. The first parameter of the WebResponse is the path to
    `UserView`. In this case it is
    `site/app/views/user/UserView`. Submitty automatically preppends
    `site/app/views` and adds the word `View` to the end of the last
    element in this array.

2. The second parameter is the name of the function that we want to
    call in the `UserView`. In this case `showUserDetails`.

3. Subsequent parameters are the inputs to the `showUserDetails`
    function.

4. If `$user` didn't load correctly (it is null), we have to return
    some error page. This is omitted.

See more information in the [View](view) documentation.


## Disabling a Controller

There are certain circumstances where a controller should be disabled
completely depending on if a feature is enabled or not within the Config.
To do this, you can utilize the
[`Enabled`](https://github.com/Submitty/Submitty/blob/master/site/app/libraries/routers/Enabled.php)
annotation in the docstring for the controller class, like so:

```php
use app\libraries\routers\Enabled;

/**
 * @Enabled("forum")
 */
class ForumController {}
```

With this annotation in-place, the router will take the string value passed to
the annotation, run [`ucfirst`](https://www.php.net/manual/en/function.ucfirst.php) for it,
and then use that to call the `is{$Feature}Enabled()` function in the Config modal. For the
above example, it would be calling `isForumEnabled()` method. If that method returns false, we
show an access denied error screen to the user, directing them to contact their instructor
if they think it is an error, and then provide a link back to the course home page.
