---
title: PGAdmin Setup Instructions
category: Developer
order: 20

Download at: https://www.pgadmin.org/download/

---

If you do not already have the app, please download it as the link above. When the pgAdmin app loads, open `Add New Server` >> `Create - Server`. The name of the server can be whatever you would like, it will not affect your connection.

## Connecting pgAdmin to the Submitty Database

Once configured, you will be able to use your server to access information stored in the different databases associated with Submitty, like that of an individual class.



Once you have opened Navigate to the `Connection`sub-section.  The following parameters should be changed:

* `Host name/address`: `192.168.56.111`. 
* `Username`: `submitty_dbuser` 
* `Password`: `submitty_dbuser`
* Note: You do not need to change the port or the maintenance database - the port should say `5432` and the maintenance database should say `postgres` by default. 



