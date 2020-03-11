---
title: Feature Flags
category: Developer
---

When developing new features for the site, it may be necessary to have several incremental PRs
to be merged into master. However, within these incremental PRs, it is possible that a release
onto production may happen, containing this in-progress work. While one could put a warning
of "do not use" for the feature, and hope instructors (or students) do not click on it, potentially
breaking the system, it is better to utilize "[Feature Flags](https://en.wikipedia.org/wiki/Feature_toggle)".
The flags can be used to hide a feature, giving access to developers, as well as setting up a
course to alpha or beta test a feature that is not quite ready for full production.

Feature flags are stored and handled within the Config model, and utilizes the following logic
to determine if a flag is enabled:

1. If `debugging_enabled` in `config/database.json` is True, then all feature flags are considered on.
1. If `feature_flags` object exists in course `config.json`, then check if requested flag exists in the object
and is set to true (e.g. `flag: true`).

Otherwise, the flag is considered off.

To utilize checking a flag, the following methods are available:

1. Twig Template
2. Controller Annotation
3. PHP Code

## Twig Template

Within twig, you can use the function `feature_flag_enabled(string $flag): bool`. For example, for
gating on flag foo:

```twig
{% raw %}{% if feature_flag_enabled('foo') %}
  {# show feature foo #}
{% endif %}{% endraw %}
```

## Controller Annotation

To gate a controller, or just a method, you can utilize the `@FeatureFlag` annotation. This annotation
is to be put in the docblock of a controller or method and it accepts a single string argument, the
name of the flag. An example of usage would be:

```php
use app\libraries\routers\FeatureFlag;
/**
 * @FeatureFlag("foo")
 */
class Bar {}
```

or for a function:

```php
use app\libraries\routers\FeatureFlag;

class Bar {
  /**
  * @FeatureFlag("foo")
  */
  public function bar() {}

  // this function is available always
  public function baz() {}
}
```

## PHP Code

For the PHP code, the config model makes available the function
`checkFeatureFlagEnabled(string $flag): bool`. For example, if we wanted to gate on feature flag "foo" within
a controller, we might do:

```php
if ($this->core->getConfig()->checkFeatureFlagEnabled('foo')) {
    // show feature foo
}
```
