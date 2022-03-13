---
title: Xdebug Setup Instructions
category: Developer > Getting Started > Advanced Setup
redirect_from:
  - /developer/xdebug
---

Xdebug is a PHP extension automatically enabled in the Vagrant VM that allows for step-by-step code debugging, code profiling, and code tracing. For more information about the features of Xdebug, see [xdebug.org](https://xdebug.org/).

For the default configuration, it is recommended to use an extension to enable one of the Xdebug modes; see [https://www.jetbrains.com/help/phpstorm/browser-debugging-extensions.html](https://www.jetbrains.com/help/phpstorm/browser-debugging-extensions.html) for a list of extensions that can be used with Xdebug. When using one of the `Xdebug Helper` extensions, the specified mode should be selected while on a page (Debug/Profile/Trace) from your local Submitty installation to use it.

### Debug

#### PhpStorm

See [PhpStorm Setup Instructions#Enable PHP Debugging using xdebug](/developer/getting_started/phpstorm#enable-php-debugging-using-xdebug) for details on how to enable and use Xdebug in PhpStorm.

#### VSCode

In order to use debug mode with Xdebug, the [Remote SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) extension or equivalent extension may need to be used to connect directly into the Vagrant machine. Additionally, the [PHP Debug](https://marketplace.visualstudio.com/items?itemName=xdebug.php-debug) extension should be installed.

Create a file titled `launch.json` under the `.vscode` folder in the root of the currently opened folder, creating the `.vscode` folder if it does not exist, and paste the following into the file:

```
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Listen for Xdebug",
            "type": "php",
            "request": "launch",
            "port": 9000,
            "pathMappings": {
                "/usr/local/submitty": "/usr/local/submitty/GIT_CHECKOUT/Submitty"
            }
        }
    ]
}
```

After this, Xdebug can be started by going to the `Run and Debug` tab (play button with a bug on the sidebar), selecting `Listen for Xdebug` in the dropdown menu and clicking the play button. A short bar will appear that lets you control and end the debug session. To create breakpoints, click to the left of the line numbers; inline breakpoints can be created by right clicking and selecting `Add Inline Breakpoint`.

### Profile

After visiting a webpage with the profiling flag enabled, profiler results will be stored by default under `/.vagrant/Ubuntu/profiler`, under files that are titled `cachegrind.out.<number>`. These files can be analyzed using PhpStorm's built in tools or using a tool such as KCacheGrind/QCacheGrind.

Note: It is recommended to only enable profiling when needed as profiling increases load times and the files generated take up a significant amount of space.

#### PhpStorm

Follow the steps under Debug to enable debugging with PhpStorm, and then follow [https://www.jetbrains.com/help/phpstorm/profiling-with-xdebug.html#snapshotLocation](https://www.jetbrains.com/help/phpstorm/profiling-with-xdebug.html#snapshotLocation), starting at `Specify the location for storing accumulated profiling data`. 

#### General

To view the profiled files in a visual format, programs such as KCacheGrind/QCacheGrind can be used - a Windows binary is available here: [https://sourceforge.net/projects/qcachegrindwin/](https://sourceforge.net/projects/qcachegrindwin/), and macOS/Linux users can use [Homebrew](https://brew.sh/) to install it with `brew install qcachegrind`.
