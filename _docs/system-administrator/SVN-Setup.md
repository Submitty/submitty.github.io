---
title: SVN Setup
category: System Administrator
order: 4
---

_NOTE: Follow these instructions for each course that will use SVN to
collect student homeworks (instead of direct file upload)._


Make a group and subdirectory for any classes requiring subversion
repositories such as:

```
mkdir -p /var/lib/svn/course01
touch /var/lib/svn/svngroups
chown www-data:course01_tas_www /var/lib/svn/course01 /var/lib/svn/svngroups
```

Set up ssh keys for hwcron to connect to the subversion repository
(do not use root/sudo except as shown).  Change user to hwcron:

```
sudo su hwcron
```

Generate the key (accept the defaults):

```
ssh-keygen -t rsa -b 4096  
```

Copy the key to test-svn:

```
ssh-copy-id hwcron@test-svn 
```

Return to the normal user:
```
exit
```

Edit ``` /var/lib/svn/svngroups ``` to grant access to instructors
and TAs for the repositories in the format (resume using
root/sudo):

```
course01_tas_www: hwcron user01 user02 …
```

OPTIONAL: Set repository quotas

```   
mkdir -p /var/lib/svn/hooks
```

Create /var/lib/svn/hooks/pre-commit in it with something along the lines of:

```
#!/bin/bash
#commit hook to limit the size of a repos
REPOS="$1"
TXN="$2"

#max size for repos in kilobytes
QUOTA="15000"
MEGS=`du -sk $REPOS | sed -r "s/^([0-9\\.]+).+/\\1/"`
if [ "$MEGS" -gt "$QUOTA" ]; then
    	#send error message to stderr
 	echo "Repository is over ${QUOTA}K in size" 1>&2
 	exit 1;
fi
exit 0;
```

Adjust QUOTA to be roughly double what you think a student should
need to avoid blocking normal but inefficient submissions.

For a single, universal quota with easy updates, symlink
``` /var/lib/svn/hooks/pre-commit ``` to
``` /var/lib/svn/course01/eachuser/hooks/pre-commit ```

For a quota that is edited per user, copy the file to the above
location and then modify for each user in their individual location
as needed.

Restrict access to the file to be writable only by instructors

```
chmod 575 /var/lib/svn/hooks/pre-commit
chgrp course_builders /var/lib/svn/hooks/pre-commit
```
