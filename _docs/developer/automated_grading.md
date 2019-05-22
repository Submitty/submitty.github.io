---
title: Automated Grading
category: Developer
---

Starting with Submitty version `v.1.1.0`, automated grading is
controlled by two daemons,
[`submitty_autograding_shipper.py`](https://github.com/Submitty/Submitty/blob/master/sbin/submitty_autograding_shipper.py)
and
[`submitty_autograding_worker.py`](https://github.com/Submitty/Submitty/blob/master/sbin/submitty_autograding_worker.py).

_NOTE: Versions of Submitty prior to `v.1.1.0` use a
submitty_grading_scheduler -- see instructions at the bottom of this page._

In the simple use case, with a single server, both daemons run on the
same machine.  In more complex use cases Submitty can be configured to
ship jobs from the *primary* machine to one or more *worker* machines.
This can be useful to manage very large numbers of submissions near
deadlines, or to facilitate use of specific hardware or extra
resources for certain assignments.  

Automated grading of multiple homeworks can be done in parallel.  The
system administrator should adjust the Submitty configurations
described below to match the hardware specifications and the typical
homework submission for your courses.

The shipper manager/daemon on the primary machine runs a *shipper
process* for each *worker process* running on the primary machine or
worker machine.

---

## Default Configuration -- Single Server

In the default system configuration, the shipper manager will launch 5
shipper processes on the primary machine and the worker manager will
launch 5 worker processes on the primary machine.  To adjust this
number:

1. As root, edit the `/usr/local/submitty/config/autograding_workers.json`
   settings and edit the `num_autograding_workers` field as desired:

   ```
    "primary": {
        "address": "localhost",
        "num_autograding_workers": 5,
        "username": "",
        "capabilities": [
            "default"
        ]
    }
   ```

2. Then re-install Submitty:

   ```
   sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh
   ```

   _NOTE: If you delete the `autograding_workers.json` file and re-run
   `CONFIGURE_SUBMITTY.sh`, the file will be re-created with the
   default settings._

---

## Multiple Physical Servers

1. To specify additional physical machines as worker machines, add one or more
   additional object(s) to the `autograding_workers.json` file, one for each additional machine.  For example:

   ```
    "foobarbaz" : {
        "address" : "foobarbaz.example.com",
        "username": "submitty",
        "capabilities": [
            "extra_ram"
        ],
        "num_autograding_workers": 2
    }
   ```

   Make sure to insert the correct username and ip address for each
   worker machine.  Also specify the number of simultaneous workers on
   each worker machine, and the capabilities of each machine.  At
   least one machine in the pool must specify the capability
   `"default"`.  The capabilities can be any string, and customized to
   your courses and hardware.

   _NOTE: You may specify that no autograding should be done on the primary machine
   and instead ship all autograding tasks to the worker machines by specifying
   `num_autograding_workers` to be zero for the `"primary"` machine._  
   

2. Setting up the worker machine(s):

   1. Download the Submitty github repository and run the installation scripts
      for the worker machine.

      _TODO: Write these instructions._
      
   2. Create the user account that will have access to send files from
      the primary machine to the worker machine.  In our example we
      name that user account `submitty`.  That user account must be in
      the `submitty_daemon` and `submitty_daemonphp` groups.

      _TODO: proofread these instructions_

   3. Generate and install an ssh key pair to allow the `submitty_daemon` user
      on the primary machine to ssh to the worker machine using the
      specified username, without a password.

      _TODO: Add instructions/details/link on key generation_


3. Next, create homework assignment autograding configurations that
   specify jobs that should be shipped.  In your `config.json` file,
   add the `"required_capabilities"` field:
  
   ```
   "required_capabilities" : "extra_ram"
   ```

   If you don't include this field, it will be set to `"default"`.
   Each shipper process launched by the shipper manager is assigned to
   a worker machine and regularly scans the autograding tasks,
   searching for a submission with required capabilities that matches
   the capabilities of its worker machine.

      _TODO: Discuss more, including machines and/or gradeable
      configs having multiple values for this field._

---

## Debugging 

To debug new features for autograding, it can be helpful to run
`submitty_autograding_shipper.py` and `submitty_autograding_worker.py`
interactively and inspect the output.

To do this:

1. Stop the daemons (on each server, as appropriate)

   ```
   sudo systemctl stop submitty_autograding_shipper
   sudo systemctl stop submitty_autograding_worker
   ```

2. Now, as the `submitty_daemon` user, from the primary machine, run the
   shipper manager and watch the output.

   ```
   sudo su -c '/usr/local/submitty/sbin/submitty_autograding_shipper.py' submitty_daemon
   ```

   And similarly from each machine that will be autograding (including
   the primary machine, as appropriate), run the worker manger and
   watch the output:

   ```
   sudo su -c '/usr/local/submitty/sbin/submitty_autograding_worker.py' submitty_daemon
   ```


3. Use control-C to stop the shipper and worker managers when you've
   finished your debugging.


4. Re-Start the daemons

   ```
   sudo systemctl start submitty_autograding_shipper
   sudo systemctl start submitty_autograding_worker
   ```
   
   or

   ```
   sudo systemctl restart submitty_autograding_shipper
   sudo systemctl restart submitty_autograding_worker
   ```

   You can check the status of the daemons:

   ```
   sudo systemctl status submitty_autograding_shipper
   sudo systemctl status submitty_autograding_worker
   ```

_NOTE: When you re-run `sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh`, it will stop and
restart the autograding shipper and worker if it is running.  (But it
will not start the scheduler, if it is not currently running.)_

_TODO: We will want to allow control of installation/upgrade of new
code & system configurations on the worker machines from the primary
machines.  Currently installation/upgrade on the worker machines must
be done manually._


---

## Restart all Shippers and Workers on Primary and Remote Machines

The following script will stop and restart all of the shippers &
workers on the primary and worker machines, in the right order.

```
sudo python3 /usr/local/submitty/sbin/restart_shipper_and_all_workers.py 
```

If one of the remote machines is not reachable, its use will be
disabled on the primary machine.  Once it is rebooted or the network
is repaired it must be manually re-enabled by editing the appropriate
field in this configuration file:

```
/usr/local/submitty/config/autograding_workers.json
```

Then the script above can be re-run to start remote grading on that
machine.
