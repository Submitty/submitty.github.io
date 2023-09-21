---
title: Troubleshooting
category: Developer > Development Instructions
---


---


## Forwarded Port Already in Use

* If you see an error similar to:

  ```
  Vagrant cannot forward the specified ports on this VM, since they
  would collide with some other application that is already listening
  on these ports. The forwarded port to #### is already in use
  on the host machine.
  ```

  This means that one or more of the ports requested by vagrant is already in
  use by another application running on your computer.


* This may happen if you attempt to create multiple Submitty VMs --
  perhaps unintentionally!  E.g., if you have multiple directories on
  your computer each with a clone/copy of the Submitty repo.  It is
  necessary to run `vagrant destroy` in each of these
  directories/repositories to clean up unwanted VMs.

  The following command can help locate misplaced repositories/VMs:

  ```
  vagrant global-status
  ```

* If you might have old, forgotten VMs from previous OS versions
  hanging around it can be helpful to completely delete the `.vagrant`
  folder in your repository.  Also check to see if you have multiple
  clones or backups of the repository and thus multiple `.vagrant`
  folders on your machine.


* You can scan to see what processes on your machine are using the
  conflicting ports.  Depending on your operating system, try these
  commands:

  ```
  netstat -anvp tcp | awk 'NR<3 || /LISTEN/'
  ```

  ```
  lsof -i | grep LISTEN
  ```

  Then you can type `kill <pid>` with the `<pid>` of the process (if
  you confirm you don't need that process).  If you don't recognize
  the process using the port in question, search to figure out if you
  can or should disable it.  For example, on MacOS, the AirPlay
  Receiver in Control Center is using port 7000, so you may choose to
  turn that off.


* You can choose to override the default ports and use an alternate
  port through an environment variable. The current variables are
  `VM_PORT_SITE`, `VM_PORT_WS`, `VM_PORT_DB`, `VM_PORT_SAML`, and
  `VM_PORT_SSH`.

  For example, if the conflicting port is the default site port (1511),
  and you want to use port 1512 instead:
  ```
  VM_PORT_SITE=1512 vagrant up
  ```
  
  You can alternatively create a `.env` file in the root of your project
  with the text `VM_PORT_SITE=1512` (and any other variables separated by
  newlines). Note that you will need to install the env plugin beforehand:
  ```
  vagrant plugin install vagrant-env
  ```

---


## Host-Only / Static Networking

If you are having trouble being able to view the Submitty webpage after a ```vagrant up``` you might need to 
modify the interfaces in your VM. To fix this:

As root modify ```/etc/network/interfaces``` and add:

```
# The host-only network interface
auto eth1
iface eth1 inet static
address 192.168.56.101
netmask 255.255.255.0
network 192.168.56.0
broadcast 192.168.56.255
```

References and useful links: [https://gist.github.com/pjdietz/5768124](https://gist.github.com/pjdietz/5768124) and [http://christophermaier.name/2010/09/01/host-only-networking-with-virtualbox/](http://christophermaier.name/2010/09/01/host-only-networking-with-virtualbox/)
