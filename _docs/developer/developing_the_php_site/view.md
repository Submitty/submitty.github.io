---
title: View
category: Developer
---

The View is part of the [Model-View-Controller](index) software design
pattern.

## Example: User View

The [Controller](controller) will call the view.  Let's have a look at
an example `UserView.php`. It might have a function in it like this:

```php
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

## Another option: Rendering with Vue

Alternatively, instead of using Twig, we can use [Vue](https://vuejs.org/) instead.

To do this, first make a Vue page in `site/vue/src/pages` (for example, `site/vue/src/pages/UserDetails.vue`): 
```html
<script setup lang='ts'>
  import { inject } from 'vue';

  const userId = inject<string>('user_id') ?? '<no user provided>';
  const favoriteColor = inject<string>('favorite_color') ?? '<no color provided>';
</script>

<template>
  <div class="content">
    {% raw %}{{ userId }}'s favorite color is {{ favoriteColor }}.{% endraw %}
  </div>
</template>
```


To actually render this page, we will then need to use the `renderVue` function in our View (ex. `UserView.php`).

The first paramater of the `renderVue` takes the name of the page (the name of the `.vue` file minus the extension, in this case `UserDetails`), and the second parameter is the same as in `renderTwig`, an associative array of variables that are passed to the Vue page.

If we wanted our `UserView.php` example to render with Vue, it would have a function that might look like this:

```php
public function showUserDetails(UserModel $user) {
  return $this->core->getOutput()->renderVue(
    'UserDetails',
      [
        'user_id' => $user->getUserId(),
        'favorite_color' => $user->getFavoriteColor()
      ]
  );
}
```

To access the variables passed by the `renderVue` function in Vue, use [`inject`](https://vuejs.org/api/composition-api-dependency-injection.html#inject). The injection keys will be the same as the keys in the provided array. If the key provided to `inject` is not in the array passed to `renderVue`, it will return `undefined`.