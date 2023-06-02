---
title: Troubleshooting
category: Developer > Development Instructions
---


---


## Forwarded Port Already in Use

If you see an error similar to:

```
Vagrant cannot forward the specified ports on this VM, since they
would collide with some other application that is already listening
on these ports. The forwarded port to #### is already in use
on the host machine.
```

This means that one or more of the ports requested by vagrant is already in
use by another application running on your computer. You can choose to use
an alternate port through an environment variable. The current variables are
`VM_PORT_SITE`, `VM_PORT_WS`, `VM_PORT_DB`, `VM_PORT_SAML`, and `VM_PORT_SSH`.

You can edit the Vagrantfile directly or create a `.env` file in the
root of your project with the text (for example) `VM_PORT_SITE=1500`
so that you don't have to add it to every `vagrant up` command.


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