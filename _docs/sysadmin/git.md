---
title: Setting Up Internal Git  
category: System Administrator  
order: 5  
---

### Internal Git

Submitty is setup to allow submissions from a Git repository instead of through the drag-and-drop interface.
While some people may use Github, Gitlab, etc. to host their students' repositories, some sysadmins may wish to
host the Git repositories internally, on the same server as Submitty.

Note: For the rest of this documentation, we assume that it's fine that Git will live as a subdirectory off
the primary URL of Submitty. That means if the URL was https://example.com, then Git would be at 
https://example.com/git.

#### Apache2 Configuration
To setup the internal Git, you will have to setup a separate URL from your main Submitty installation and
create a separate VirtualHost for it, due to the use of suexec within our main configuration.

Copy the following code into `/etc/apache2/sites-available/submitty.conf`:

```
    ScriptAlias /git/ /usr/local/submitty/site/cgi-bin/git-http-backend/
    <Directory /usr/lib/git-core>
        Options +ExecCGI +SymLinksIfOwnerMatch
        AllowOverride None
        Require all granted
    </Directory>

    <Files "git-http-backend">
        AuthType Basic
        AuthName "Git Access"
        AuthBasicProvider wsgi
        WSGIAuthUserScript /usr/local/submitty/sbin/authentication.py
        #Require expr !(%{QUERY_STRING} -strmatch '*service=git-receive-pack*' || %{REQUEST_URI} =~ m#/git-receive-pack$#)
        Require valid-user
    </Files>
```

Authentication for Git is handled by `/usr/local/submitty/sbin/authentication.py` through the Python3 WSGI module
for Apache2 (mod_wsgi) which allows us to utilize a python script to handle the authentication process for repository
access. Unfortunately, do to limitations within the module, the user that runs this script must be the same user
that own the Apache2 process. To limit access to any criticial information by a user that isn't handled by Submitty,
the authentication script goes through a REST API endpoint within Submitty built specifically for the VCS process.

Any action that someone does on Git (cloning, pulling, pushing, etc.) will require authentication. The authentication
is checked in the following way:
1. Does the given username/password exist on the server. If not, return False.
2. Does the username match the username for the repo we're checking out? If so, return True.
3. Is this a team assignment and is the username on the list of users for the team id for the repo? If so, return True.
3. Does the username exist within the given semester and course for the repository? If not, return False.
4. Is the user in the course either a TA or instructor account? If so, return True, else return False.

#### Generating Repositories

Instructors can generate their repositories using a provided bin script `generate_repos.py` which will handle creating
a bare shared repository for all students in a course. The script accepts a `--help` flag to explain the arguments
it accepts. The basic usage however is as follows:

```
sudo /usr/local/submitty/bin/generate_repos.py <semester> <course_code> <project_name/gradeable_id>
```

_Note: In order to use this script, instructors for courses needing
repositories should be given limited sudo access to run this script.
For example, you may create a group named `submitty_repo_gen` that has
sudo access to this command, and add the instructors to this group._

If the third argument is not an existing gradeable_id, the user is
prompted to confirm to make these repositories.  If confirmed, an
empty repository is made for every user in the course.  If it is an
existing gradeable, the script checks to see if this gradeable is an
individual or team assignment.  If it is an individual gradeable, an
empty repository is made for every user.  If it is a team gradeable,
an empty repository is made for every team that has been formed so
far.  The script can be re-run when additional teams are formed.

Permissions on these repositories (which is handled automatically by
the generate script) is that these directories and files must be
readable and writeable by www-data or else students won't be able to
clone/push/etc.

All repositories are stored under `/var/local/submitty/vcs/git`.

#### Cloning Your Repositories

After the instructor has created the git repositories, your students and you can checkout their repositories from
the following `http(s)://GIT_URL/git/<semester>/<course>[/<gradeable_id>]/user_id`.

#### Grading Repositories

To grade a repository, Submitty must have access to it through the `submitty_daemon` user. 

If you're only using internal repositories (those located under `/var/local/submitty/vcs/git`), then you don't 
need to do anything futher to support grading these, as if the VCS URL is detected as having the submission url,
it will replace that URL with the absolute file path for `submitty_daemon` to use to checkout.

An example of this would be that you set the submission url to be "https://submitty.cs.rpi.edu" and give the VCS url
for a gradeable to be "https://submitty.cs.rpi.edu/{$vcs_type}/{$course}/{$semester}/{$gradeable_id}/{$user_id}", 
then `submitty_daemon` will subsitute in the full absolute path
`/var/local/submitty/vcs/{$vcs_type}/{$semester}/{$course}/{$gradeable_id}/{$user_id}` to use.

### Using External Git

If you're using external repos and websites unconnected to Submitty, then you'll need to setup `submitty_daemon` to
have access to those repos via SSH. Instructions for adding an SSH key to your account is available for 
[Github](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/) and 
[Gitlab](https://docs.gitlab.com/ee/ssh/). The gist of these is as follows for Linux (focusing on Github):

1. Login to the hwcron user.
1. Open a terminal and generate a new SSH key:
`
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
`
1. Enter file location for ssh key. (ex: /home/hwcron/.ssh/id_github)
1. Enter a passphrase for the SSH key.
1. Add the key to the ssh-agent. (See [this article](http://mah.everybody.org/docs/ssh#run-ssh-agent) 
   on setting up ssh-agent to start on login).
1. Add the SSH key to your Github/Gitlab/etc account.

Then, for a given assignment, you'll want to set the base of the URL to be
`ssh://git@github.com/` or whatever the base of ssh is for your external resource.

#### Assignment Configuration

To link a new gradeable to the repositories, for the question: "Are
students uploading files or submitting to a Version Control System
(VCS) repository?", select "Version Control System (VCS) Repository".

and you should be fine using just:

```
{$gradeable_id}/{$user_id}/
```

for most assignments. This will be combined with the configured VCS base URL for your system. By default, this will
point at the internal url for VCS, which is your Submitty URL with `{$vcs_type}/` appended.
