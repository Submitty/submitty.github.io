---
title: Update Submitty
category: System Administrator
order: 2
---


To update the submitty code, get the specific branch/release to which
you want to upgrade.  For example:

'''
cd /usr/local/submitty/GIT_CHECKOUT_Submitty                                                        
git checkout master                                                                                 
git pull origin master                                                                              
'''

Then re-install the system.  This should take less than a minute.  It
will pause and restart from scratch any autograding that is currently
happening.

'''
sudo /usr/local/submitty/.setup/INSTALL_SUBMITTY.sh                                                 
'''

Depending on what has updated in the system, you may need to also
rebuild the autograding scripts for your existing courses &
gradeables.  And regrade the previously submitted assignments
(especially if you're installing the update to fix a problem).

See more information in:
[Development Instructions](../developer/development_instructions)

                                                                                                    
                                                                                                    
                                                                                                    
          