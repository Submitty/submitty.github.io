---
title: How to Add a Page
category: Developer
---


How to add a page to Submitty
 
All functions are imaginary and simplified.
 
In Submitty, we use the Model, View, Controller design pattern. You can read more about that elsewhere, but for Submitty you need to understand this:
Models hold data, which is often loaded from the database. For example, a UserModel would hold information about a user, like their name or favorite color.
Views render visual information. For example, a UserView view would house functions which involve displaying information about a user.
Controllers perform logic. For example, if you want to load a See User Details page, you might call the function userDetailsPage in the UserController.
 
 
## Making a Page

So a request to view the UserDetails page would first hit the UserController, which might look something like this:

```PHP
/**
* Route to view the userDetailsPage.
* @Route("/{semester}/{course}/show_user_details", methods={"GET"})
* @AccessControl(role="INSTRUCTOR")
**/

public function userDetailsPage($user_id) {
   $user = $this->core->getQueries()->getUserFromId($user_id);
   if ($user) {
       return new WebResponse(
               “\app\views\user\UserView::class”
               'showUserDetails',
               $user
           )
       );
   } else {
       // render an error
   }
}
```

So what is happening here?
 
From the website, they can now make a request which routes to the userDetails page. Something like f20/sample/show_user_details?user_id="aphacker"

Because we added @AccessControl(role="INSTRUCTOR"), only instructor level users can access this page.

The $user_id parameter to our function is populated from the parameters of the GET request ?user_id="aphacker.

When we call $this->core->getQueries()->getUserFromId($user_id); a database query is run which loads information for the user with a matching id into a UserModel.

If $user was successfully loaded (it's not null), we can render the page by returning a new MultiResponse object which contains a WebResponse.

    1. The first parameter of the WebResponse is the path to the UserView. In this case it is site/app/views/user/UserView. Submitty automatically preppends site/app/views  and adds the word View to the end of the last element in this array.

    2. The second parameter is the name of the function that we want to call in the UserView. In this case showUserDetails.

    3. Subsequent parameters are the inputs to the showUserDetails function.

    4. If $user didn't load correctly (it is null), we have to return some error page. This is omitted.

Now let's have a look at an example UserView.php. It might have a function in it like this:


```PHP
public function showUserDetails(UserModel $user) {
  $this->core->getOutput()->addInternalJs('user-details.js');
  $this->core->getOutput()->addInternalCss('user-details.css');
  return $this->core->getOutput()->renderTwigTemplate(
                   'user/UserDetails.twig',
                   [
                       'user_id' => $user->getUserId(),
                       'favorite_color' => $user->getFavoriteColor()
                   ]
               );
}
```

Let's break down what's happening here.
The function showUserDetails takes in a UserModel object, which holds all of the data it needs to display.

The first two lines of the function load site/public/js/user-details.js and site/public/css/user-details.css, which contain any page specific javascript functions or css styling the user details page needs. Some pages don't require this.

The third line renders and returns a Twig template found in site/app/templates/user/UserDetails.twig.  Twig is the template language used in Submitty.

The second parameter of renderTwigTemplate is a associative array of the variables that UserDetails.twig needs to properly display.

## Rendering the Page with Twig

Finally, let's look at UserDetails.twig

```Twig
<div class="content">
 {{ user_id }}'s favorite color is {{favorite_color}}.
</div>
```
In this page, we use user_id and favorite_color to render information about the student. (edited) 
