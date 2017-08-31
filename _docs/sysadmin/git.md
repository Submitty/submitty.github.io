---
title: Setting Up Internal Git  
category: System Administrator  
order: 5  
---

### Internal Git

Submitty is setup to allow submissions from a Git repository instead of through the drag-and-drop interface.
While some people may use Github, Gitlab, etc. to host their students' repositories, some sysadmins may wish to
host the Git repositories internally, on the same server as Submitty. 

#### Apache2 Configuration
To setup the internal Git, you will have to setup a separate URL from your main Submitty installation and
create a separate VirtualHost for it, due to the use of suexec within our main configuration.

Copy the following code into /etc/apache2/sites-available/submitty-git.conf:
```
<VirtualHost GIT_URL:80>
    AddDefaultCharset utf-8
    ServerAdmin ADMIN@DOMAIN.HERE
    ServerName GIT_URL

    DocumentRoot /var/local/submitty/vcs
    DirectoryIndex index.html index.php index.htm index.cgi

    SetEnv GIT_PROJECT_ROOT /var/local/submitty/vcs
    SetEnv GIT_HTTP_EXPORT_ALL
    ScriptAlias /git/ /usr/lib/git-core/git-http-backend/

    <Files "git-http-backend">
        AuthType Basic
        AuthName "Git Access"
        AuthBasicProvider wsgi
        WSGIAuthUserScript /usr/local/submitty/bin/authentication.py
        Require valid-user
    </Files>

    LogLevel error
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```
Changing the GIT_URL to be the url you want to use for Git.

Authentication for Git is handled by `/usr/local/submitty/bin/authentication.py` through Apache2 which gives
us a nice flexibility on determining if you should have access to a repository. (Note: Installation of this script
is done automatically by just running `/usr/local/submitty/.setup/INSTALL_Submitty.sh`)

Any action that someone does on Git (cloning, pulling, pushing, etc.) will require authentication. The authentication
is checked in the following way:
1. Can the given username/password exist on the server (either through PAM or Database). If not, return False.
2. Does the username match the username for the repo we're checking out? If so, return True.
3. Does the username exist within the given semester and course for the repository? If not, return False.
4. Is the user in the course either a TA or instructor account? If so, return True, else return False.

#### Generating Repositories

Instructors can generate their repositories using a provided bin script `generate_repos.py` which will handle creating
a bare shared repository for all students in a course. You can run this using:
```bash
$ /usr/local/submitty/bin/generate_repos.py <semester> <course_code> [<gradeable_id>]
```
Where the first two parameters are necessary and the third (gradeable_id) is optional. This allows you to create
repositories either at a "course level" or a "gradeable level" depending on how you wish to run your course.

#### Cloning Your Repositories

After the instructor has created the git repositories, your students and you can checkout their repositories from
the following `http(s)://GIT_URL/git/<semester>/<course>[/<gradeable_id>]/user_id`.