# AccountInventory

Installation Steps

* Install Composer on your machine. Composer will help us to maintain the third party 'PHP' dependencies. reference link is as follow:
https://getcomposer.org/doc/00-intro.md

* Clone the repository on your machine.

* Switch your directory to git repository on your loacl machine and now run the 'php composer.phar install' command in the terminal which will download all the dependancies of laravel and it will creat the '/vendor' folder in root directory of the project and it will be totally git ingnored.

* Now go to root directory of the project and refer the '.env' file which will have the name of the database init and local server details it recommended to refer the same names for the 'Host name', 'User name', 'Password' and 'Database name' of local detabase server.

* Now the installation is complete and from yor browser navigate till the root directory of the project and after that add '/public' directory for calling the index page.

* For llinx machin user it is mandatory to give 777 permission to '/storage' folder of the project which will be storing and manipulating some log files and session files of Laravel.

* 