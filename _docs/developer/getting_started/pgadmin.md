---
title: PGAdmin Setup Instructions
category: Developer > Getting Started > Advanced Setup
redirect_from:
  -/developer/pgadmin
---


* If you do not already have the PGAdmin app, please download and
  install it:

  <https://www.pgadmin.org/download/>


* When the pgAdmin app loads, open `Add New Server` >>
  `Create - Server`.
  The name of the server can be whatever you would like, it
  will not affect your connection.

* Once configured, you will be able to use your server to access
  information stored in the different databases associated with
  Submitty, like that of an individual class.


* Once you have opened Navigate to the `Connection`sub-section.
  The following parameters should be changed:

    * `Host name/address`: `localhost`. 

      - If you get a connection timeout error, try `127.0.0.1` instead.

    * `Port`: `16442`

    * `Username`: `submitty_dbuser`

    * `Password`: `submitty_dbuser`
