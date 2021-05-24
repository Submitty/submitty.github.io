---
title: View
category: Developer
---

The View is part of the [Model-View-Controller](index) software design
pattern.

## Example: User View

The [Controller](controller) will call the view.  Let's have a look at
an example `UserView.php`. It might have a function in it like this:

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

The function `showUserDetails` takes in a `UserModel` object, which
holds all of the data it needs to display.  See also the
[Model](model) documentation.

The first two lines of the function load
`site/public/js/user-details.js` and
`site/public/css/user-details.css`, which contain any page specific
javascript functions or css styling the user details page needs. Some
pages don't require this.

The third line renders and returns a Twig template found in
`site/app/templates/user/UserDetails.twig`.  Twig is the template
language used in Submitty.

The second parameter of `renderTwigTemplate` is a associative array of
the variables that `UserDetails.twig` needs to properly display.

## Rendering the User Page with Twig

Finally, let's look at `UserDetails.twig`

```html
{% raw %}<div class="content">
  {{ user_id }}'s favorite color is {{favorite_color}}.
</div>{% endraw %}
```

In this page, we use `user_id` and `favorite_color` to render information
about the student.