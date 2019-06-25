---
title: Writing Unit Tests
category: Developer
order: 2
---
Documentation for PHPUnit can be found [here](https://phpunit.readthedocs.io/en/8.2/)


PHP unit tests are located at `Submitty/site/app/tests`. The test structure should mirror the actual source code structure, except that every class in the tests directory has the suffix *Tester* at the end. For example a test for the `SubmissionController.php` class would be called 
`SubmissionControllerTester.php` in the tests directory.

Each tester class should extend `BaseUnitTest`. Individual methods should be public and being with the word "test" in lowercase in order for PHPUnit to run them. Helper functions in the tester class can be private, public, or protected and they will be ignored as long as they do *not* begin with the word "test". For example 

Most tests in Submitty assert against the JSON response sent back, the specifications for Submitty's JSON responses can be found [here](../json_responses)

Here are some example Unit tests:
- [SubmissionControllerTester.php](https://github.com/Submitty/Submitty/blob/master/site/tests/app/controllers/submission/SubmissionControllerTester.php)
- [AuthenticationControllerTester.php](https://github.com/Submitty/Submitty/blob/master/site/tests/app/controllers/AuthenticationControllerTester.php)
- [AbstractDatabaseTester](https://github.com/Submitty/Submitty/blob/master/site/tests/app/libraries/database/AbstractDatabaseTester.php)
- [CourseTester.php](https://github.com/Submitty/Submitty/blob/master/site/tests/app/models/CourseTester.php)

```php
protected function createMockUser()
```
Will not be ran by PHPUnit, whereas 
```php
public function testUploadOneBucket()
```
will be.

You can initialize data for tests using the `setUp` function:
```php
public function setUp(): void{
	//init
}
```
The `tearDown` function is used to clean up after a test
```php
public function tearDown(): void{
	//cleanup
}
```
*Note: you only need to remove external resources during tearDown such as new files created during setUp, or to unset global variables.*

Each test method should make an assertion, such as `assertTrue` or `assertFalse`, otherwise the test will get labeled as a "risky test" by PHPUnit. You can find a list of all PHPUnit assertions [here](https://phpunit.readthedocs.io/en/8.2/assertions.html)

## Running Tests

From `Submitty/site` you can run the command `vendor/bin/phpunit --configuration tests/phpunit.xml` to start the testing suite.

During development you can run individual test classes by giving a path to a test class as the second argument, for example the command from `Submitty/site`
`vendor/bin/phpunit tests/app/authentication/DatabaseAuthenticationTester.php` will run only the test methods in DatabaseAuthenticationTester.php

You can pass in the `--debug` flag when using PHPUnit to see PHP output, this can be useful when writing new tests.

After running the testing suite you can see code coverage output under `Submitty/site/tests/report`.

*Note code coverage will only be generated after running the entire test suite.*