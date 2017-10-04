---
title: Installation Troubleshooting
category: Developer
order: 2
---

During the install of the various packages referenced on [Vm Install Using Vagrant](vm_install_using_vagrant),
you might have ran into a few errors along the way. Below are a few common errors, and what you can do to solve them.

**Ubuntu Installation**

The following errors were experienced and fixed on a Ubuntu 16.04 distribution.

1. Ruby undefined method when running command (for vagrant version 1.8.1):

    ```
    sudo vagrant plugin install vagrant-vbguest
    ```

    Error message recieved:

    ```
    Installing the 'vagrant-vbguest' plugin. This can take a few minutes...
    /usr/lib/ruby/2.3.0/rubygems/specification.rb:946:in `all=': undefined method `group_by' for nil:NilClass (NoMethodError)
    	from /usr/lib/ruby/vendor_ruby/vagrant/bundler.rb:275:in `with_isolated_gem'
    	from /usr/lib/ruby/vendor_ruby/vagrant/bundler.rb:231:in `internal_install'
    	from /usr/lib/ruby/vendor_ruby/vagrant/bundler.rb:102:in `install'
    	from /usr/lib/ruby/vendor_ruby/vagrant/plugin/manager.rb:62:in `block in install_plugin'
    	from /usr/lib/ruby/vendor_ruby/vagrant/plugin/manager.rb:72:in `install_plugin'
    	from /usr/share/vagrant/plugins/commands/plugin/action/install_gem.rb:37:in `call'
    	from /usr/lib/ruby/vendor_ruby/vagrant/action/warden.rb:34:in `call'
    	from /usr/lib/ruby/vendor_ruby/vagrant/action/builder.rb:116:in `call'
    	from /usr/lib/ruby/vendor_ruby/vagrant/action/runner.rb:66:in `block in run'
    	from /usr/lib/ruby/vendor_ruby/vagrant/util/busy.rb:19:in `busy'
    	from /usr/lib/ruby/vendor_ruby/vagrant/action/runner.rb:66:in `run'
    	from /usr/share/vagrant/plugins/commands/plugin/command/base.rb:14:in `action'
    	from /usr/share/vagrant/plugins/commands/plugin/command/install.rb:32:in `block in execute'
    	from /usr/share/vagrant/plugins/commands/plugin/command/install.rb:31:in `each'
    	from /usr/share/vagrant/plugins/commands/plugin/command/install.rb:31:in `execute'
    	from /usr/share/vagrant/plugins/commands/plugin/command/root.rb:56:in `execute'
    	from /usr/lib/ruby/vendor_ruby/vagrant/cli.rb:42:in `execute'
    	from /usr/lib/ruby/vendor_ruby/vagrant/environment.rb:268:in `cli'
    	from /usr/bin/vagrant:173:in `<main>'
    ```

    In order to solve this, you can patch vagrant's ruby bundler (solution taken from: [stackoverflow](https://stackoverflow.com/questions/36811863/cant-install-vagrant-plugins-in-ubuntu-16-04/36991648#36991648))  

    Create a file named _vagrant-plugin.patch_:

    ```
    ---
     lib/vagrant/bundler.rb | 3 ++-
     1 file changed, 2 insertions(+), 1 deletion(-)

    diff --git a/lib/vagrant/bundler.rb b/lib/vagrant/bundler.rb
    index 5a5c185..c4a3837 100644
    --- a/lib/vagrant/bundler.rb
    +++ b/lib/vagrant/bundler.rb
    @@ -272,7 +272,6 @@ module Vagrant

           # Reset the all specs override that Bundler does
           old_all = Gem::Specification._all
    -      Gem::Specification.all = nil

           # /etc/gemrc and so on.
           old_config = nil
    @@ -286,6 +285,8 @@ module Vagrant
           end
           Gem.configuration = NilGemConfig.new

    +      Gem::Specification.reset
    +
           # Use a silent UI so that we have no output
           Gem::DefaultUserInteraction.use_ui(Gem::SilentUI.new) do
         return yield
    ```

    And run the following command to apply the patch:

    ```
    sudo patch --directory /usr/lib/ruby/vendor_ruby/vagrant < vagrant-plugin.patch
    ```

2. zlib is missing; necessary for building libxml2 when running command:

  ```
  sudo vagrant plugin install vagrant-vbguest
  ```

  Error message recieved:

    ```

    Installing the 'vagrant-vbguest' plugin. This can take a few minutes...
    Bundler, the underlying system Vagrant uses to install plugins,
    reported an error. The error is shown below. These errors are usually
    caused by misconfigured plugin installations or transient network
    issues. The error from Bundler is:

    An error occurred while installing nokogiri (1.8.0), and Bundler cannot continue.
    Make sure that `gem install nokogiri -v '1.8.0'` succeeds before bundling.

    Warning: this Gemfile contains multiple primary sources. Using `source` more than once without a block is a security risk, and may result in installing unexpected gems. To resolve this warning, use a block to indicate which gems should come from the secondary source. To upgrade this warning to an error, run `bundle config disable_multisource true`.Gem::Ext::BuildError: ERROR: Failed to build gem native extension.

        current directory: /home/user/.vagrant.d/gems/gems/nokogiri-1.8.0/ext/nokogiri
    /usr/bin/ruby2.3 -r ./siteconf20170914-2709-1ddc8yn.rb extconf.rb
    checking if the C compiler accepts ... yes
    Building nokogiri using packaged libraries.
    Using mini_portile version 2.2.0
    checking for gzdopen() in -lz... no
    zlib is missing; necessary for building libxml2
    *** extconf.rb failed ***
    Could not create Makefile due to some reason, probably lack of necessary
    libraries and/or headers.  Check the mkmf.log file for more details.  You may
    need configuration options.

    Provided configuration options:
      --with-opt-dir
      --without-opt-dir
      --with-opt-include
      --without-opt-include=${opt-dir}/include
      --with-opt-lib
      --without-opt-lib=${opt-dir}/lib
      --with-make-prog
      --without-make-prog
      --srcdir=.
      --curdir
      --ruby=/usr/bin/$(RUBY_BASE_NAME)2.3
      --help
      --clean
      --use-system-libraries
      --enable-static
      --disable-static
      --with-zlib-dir
      --without-zlib-dir
      --with-zlib-include
      --without-zlib-include=${zlib-dir}/include
      --with-zlib-lib
      --without-zlib-lib=${zlib-dir}/lib
      --enable-cross-build
      --disable-cross-build

    To see why this extension failed to compile, please check the mkmf.log which can be found here:

      /home/user/.vagrant.d/gems/extensions/x86_64-linux/2.3.0/nokogiri-1.8.0/mkmf.log

    extconf failed, exit code 1

    Gem files will remain installed in /home/user/.vagrant.d/gems/gems/nokogiri-1.8.0 for inspection.
    Results logged to /home/user/.vagrant.d/gems/extensions/x86_64-linux/2.3.0/nokogiri-1.8.0/gem_make.out
    ```

  In order to solve this make sure that the system has installed packages _lblzma-dev_ and _zliblg-dev_

  This can be done so by running:

    ```
    sudo apt-get install liblzma-dev zlib1g-dev
    ```
