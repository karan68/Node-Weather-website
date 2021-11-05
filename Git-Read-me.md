"Git Version Control"

Def: Git is used for version control, to take control over the version of an application.

Install: "git-scm-com" head for here to install git.

Parts of the git : 1)Untracked files --> all the files of your application are kept here
                   2)Staged Changes -->  the files that are added using add command are moved in here
                   3)commits --> the file commited to the server are kept her
                   4)unstaged changes --> when a new git change is initiated , the files previously
                                          commited are placed here and had to again be added to staged changes along with the new file

Setting up your SSH keys ->  go to github -> settings -> SSH keys/Add new -> use "cat ~/.ssh/id_rsa.pub" to get the contents of the key -> copy everything and paste it in the key section -> use this command in gut bash "ssh -T git@github.com" -> 


commmands : git --version --> check the version
            git -init --> to intialize into your project
            git -add . --> to add all files to staged changes
            git -add "specific file name" --> to add a specofoc file to the staged changes area
            git status --> check the status of the file
            git commit -m "message" --> commmit the files in the staged area
            git remote add origin https://github.com/karan68/Node-Weather-website.git --> add your project to github
            git branch -M main --> after this please set up the ssh keys
            git push -u origin main --> to push your code

open Git-bash
SSH commands :   ls -a -l ~/.ssh --> to see if the ssh file is present or not in your system
                 ssh-keygen -t rsa -b 4096 -C "mekaranyadav8@gmail.com" --> to create a set of ssh keys for your project 
                 eval $(ssh-agent -s) --> to start ssh agent

----------------------xxxxxxxxx--------------------------------
In case you installed and it does not show up in your visual studio, but is present in your system , follow the below steps:

Step 1: Go to the Settings in vscode.

Step 2: Open settings.json.

Step 3: You need to find something like "git.path" in settings.json

Step 4: just add the directory path where git is installed in your system.

example : "git.path": "D:/Git/bin/git.exe"

Step 5: Restart your vscode.
------------------------------------xxxxxxxx------------------------