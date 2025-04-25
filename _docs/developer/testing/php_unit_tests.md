---
title: PHP Unit Tests
category: Developer > Development Instructions > Continuous Integration Testing
---

To validate the unit behavior of the site code, we utilize 
[phpunit](https://phpunit.readthedocs.io/en/latest). 


### Running PHP Unit Tests

*You will need PHP installed on your host system first, see [Installing PHP](/developer/testing/install_php)*

To run the PHP unit test suite locally, `cd` to the `Submitty/site` directory and type:

If you are running on WSL and are seeing errors, remove "`php`" from the following commands.

```
php vendor/bin/phpunit
```

To run just an individual class or test, you can use the `--filter` flag on PHPUnit.
For example, to run the function `testInvalidProperty` would be
`php vendor/bin/phpunit --filter testInvalidProperty` and running all
of `AccessControlTester` would be
`php vendor/bin/phpunit--filter AccessControlTester`. Be aware, filter
can match against partial strings, so if you have two tests `testFoo` and `testFooBar`,
running `--filter testFoo` will run them both. Alternatively, you can also directly run
`phpunit` against a specific class by passing the path to the test class directly to
`phpunit`, for example
`php vendor/bin/phpunit tests/app/authentication/DatabaseAuthenticationTester.php` will run
only the test methods in `DatabaseAuthenticationTester.php`.

The two concepts above can be combined to run a specific test function in a specific
class by doing:

```bash
vendor/bin/phpunit --filter testFunction tests/app/path/to/TestClass.php
```

You can pass in the `--debug` flag when using PHPUnit to see PHP output, this can be
useful when writing new tests.

### PHP Unit Test Code Coverage

__Note__: to view code coverage information, you will need either
[xdebug](https://xdebug.org/) or [pcov](https://github.com/krakjoe/pcov). If not using
the debugger in xdebug, it is recommended to use pcov as it is orders of magnitude
faster (~ 1 min vs ~15 min).

Assuming you have one of the two above installed, after running the test suite, or some
part of it, a report is generated showing the code coverage of tests in
`Submitty/site/tests/report`. While the concept of increasing code coverage is good,
please make sure you are writing tests to properly validate behavior, show edge
cases, etc. and not just for the sake of increasing the code coverage number.

_Note: code coverage will only be generated for the tests you run, and will overwrite
previously generated code coverage reports._


### Writing PHP Unit Tests

PHP unit tests are located at `Submitty/site/app/tests`. The test structure should
mirror the actual source code  structure, except that every class in the tests
directory has the suffix *Tester* at the end. For example a test for the
`SubmissionController.php` class would be called `SubmissionControllerTester.php` in
the tests directory. The namespace for the test class should be same as the base
class, with the addition of a `tests\` prefix.

Each tester class should minimally extend `PHPUnit\Framework\TestCase`, however, there
are a number of useful utility functions in `BaseUnitTest` that it may be beneficial
to extend off that instead. Individual methods should be public and
being with the word "test" in lowercase in order for PHPUnit to run them. Helper
functions in the tester class can be private, public, or protected and they will be
ignored as long as they do *not* begin with the word "test". For example, `createMockUser`
will not be run, while `testUploadOneBucket` would be.

Each test method should make an assertion, such as `assertTrue`, `assertFalse`,
`assertSame`, otherwise the test will get labeled as a "risky test" by PHPUnit. You can
find a list of all PHPUnit assertions
[here](https://phpunit.readthedocs.io/en/latest/assertions.html).

Most tests for controllers in Submitty assert against the JSON response sent back, the
specifications for Submitty's JSON responses can be found [here](/developer/json_responses).

Here are some example Unit tests:

- [SubmissionControllerTester.php](https://github.com/Submitty/Submitty/blob/master/site/tests/app/controllers/student/SubmissionControllerTester.php)
- [AuthenticationControllerTester.php](https://github.com/Submitty/Submitty/blob/master/site/tests/app/controllers/AuthenticationControllerTester.php)
- [AbstractDatabaseTester](https://github.com/Submitty/Submitty/blob/master/site/tests/app/libraries/database/AbstractDatabaseTester.php)
- [CourseTester.php](https://github.com/Submitty/Submitty/blob/master/site/tests/app/models/CourseTester.php)

### Parameterized PHP Unit Tests

Sometimes, while writing tests, you may find yourself wanting to test the same piece of
code, but just needing to change one variable. To handle this, you ca use the concept
of _Parametrized Tests_. To do this, you will add a _Data Provider_ to your test
function. The data provider is a function that returns an array or generator that is
then passed to your test function. The test function is linked to the data provider, by
adding a `@dataProvider` annotation. The data provider function should return an array of
arrays where each inner array is the list of arguments that will be passed to your test
function. Here is an example of this all put together:

```php
public function additionProvider() {
    return [
        [0, 0, 0],
        [0, 1, 1],
        [1, 0, 1],
        [1, 2, 3]
    ];
}

/**
 * @dataProvider additionProvider
 */
public function testAddition($num_1, $num_2, $expected) {
    $this->assertSame($expected, $num_1 + $num_2);
}
```

As mentioned above, you can use
[Generators](https://www.php.net/manual/en/language.generators.overview.php)
for the return of a data provider, which helps to minimize memory usage
if constructing larger objects. The above example using generators would look like:

```php
public function additionProvider() {
    yield [0, 0, 0];
    yield [0, 1, 1];
    yield [1, 0, 1];
    yield [1, 2, 3];
}

/**
 * @dataProvider additionProvider
 */
public function testAddition($num_1, $num_2, $expected) {
    $this->assertSame($expected, $num_1 + $num_2);
}
```

For more details, see [PHPUnit Data Providers](https://phpunit.readthedocs.io/en/latest/writing-tests-for-phpunit.html#data-providers).

### PHP Unit Test Setup/Teardown

When running tests, it's often times useful to be able to define a common state
to be used within a group of tests. This is known state is called a _fixture_
for the test, and they can be defined around each test, or around all tests in
a class.

To setup a fixture that are run around each individual test, you can use the
`setUp` and `tearDown` functions. These are defined by doing:

```php
// Runs before a test
public function setUp(): void {
    // setup
}

// Runs after a test
public function tearDown(): void {
    // cleanup
}
```

*Note: you only need to remove external resources during tearDown such as new files
created during setUp, or to unset global variables.*

Alternatively, if a group of tests are all going to share the same variable or resource,
you can define a setUp and tearDown that will run once per class by doing:

```php
// Runs before all tests in class
public static function setUpBeforeClass(): void {
    // setup
}

public static function tearDownAfterClass(): void {
    // cleanup
}
```

For more information, see [PHPUnit Fixtures](https://phpunit.readthedocs.io/en/latest/fixtures.html).

### PHP Unit Test Mocking

Often times while writing and running the tests, it is useful to create _Test Doubles_
or _mocks_, allowing you to abstract away a test from requiring difficult to setup
classes or resources. A chief example of this is creating a mock for the database
layer, so that one not need PostgreSQL setup for running the unit tests. By creating a
mock, you can precisely define what the methods should return, allowing a much easier
time testing certain conditions or parts of code.

For PHPUnit, you can easily create a mock class by doing:

```php
$mock = $this->createMock(ConcreteClass::class); // create mock object
$mock
    ->expects($this->once()) // define how many times the method will be called
    ->method('method_name') // what method to mock
    ->willReturn(true); // what calling the mocked method will return
```

Due to the dynamic nature of how method calls work for models, mocking for them is
slightly more cumbersome. If you wish to mock a model, it is easiest to just use the
`createMockModel` function in `BaseUnitTest`. Similarly, to avoid some amount of the
boilerplate of setting up all necessary pieces of using a mock of `Core` (such as
having query interface, mock user, etc.), you can use `createMockCore`.

For more information on mocks, and the things you can do with them, see
[PHPUnit Test Doubles](https://phpunit.readthedocs.io/en/latest/test-doubles.html).

For mocking PHP built-in functions like `header`, `setcookie`, `die`, etc., we use the
[php-mock-phpunit](https://github.com/php-mock/php-mock-phpunit) library that adds an
extension to PHPUnit. Usage of this relies on how
[PHP Namespaces work](https://www.php.net/manual/en/language.namespaces.rules.php). For
example, imagine you have the following code:

```php
<?php

namespace app;

die("test");
```

Running this, `die` will first attempt to execute a function at `app\die()` and if that
does not exist, run the global definition. `php-mock-phpunit` uses this concept, and
allows us to define the built-ins relative to the namespace of a class being tested.
For the following example, we will assume the class you are trying to test has the
namespace of `app\libraries`. Creating a function mock is then similar to creating
a class mock:

```php
$mock = $this->getFunctionMock("app\\libraries", "time");
$mock
    ->expects($this->once()) // how many times will function be called
    ->willReturn(3); // value to return on function usage
```

This only works if you leave the function
call unqualified, and so do not qualify them by adding a leading slash, so for the
above example, do not do `\die()`, use `die()`. Additionally, due to a bug/quirk
of the PHP engine, you will want to add the `@runInSeparateProcess` annotation above
any test that mocks built-ins:

```php
/**
 * @runInSeparateProcess
 */
public function testBuiltin() {
    $time = $this->getFunctionMock("app\\libraries", "time");
    // rest of the test
}
```

_Note: While mocking is useful and powerful, you should attempt to use a real concrete
definition as much as possible as mocks will not necessarily capture behavior changes
in the mocked class that can yield subtle bugs._
