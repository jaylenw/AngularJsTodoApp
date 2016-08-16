#AngularJs Todo App

##Features

* User Login & Registration
* Add and archive notes
* Mobile Friendly

## Build, Testing, & Development

1. Need to have [Nodejs](https://nodejs.org/en/), [NPM](https://www.npmjs.com/), [Grunt](http://gruntjs.com/), and [Bower](https://bower.io/) installed on your system globally. If running a Debian/Ubuntu system and you do not have the packages installed globally, run these commands below:

        sudo apt update  
        sudo apt install nodejs  
        sudo ln -s /usr/bin/nodejs /usr/bin/node  
        sudo apt install npm
        sudo npm install -g npm
        sudo npm install -g bower
        sudo npm install -g grunt-cli

2. Clone this repo.

3. In the root of the project folder, run `npm install` and `bower install`.

4. Run `grunt serve` for live preview. You can then browse the site after opening your browser to the url that grunt has informed you.


Note: You will not be able to register or login with an account until the backend is setup correctly.


## Running in Production

1. Change the javascript file in /app/scripts/services/, config.js to have your                     url and port number
   that will be directing requests to your backend for the `_apiUrl` variable. Do not change anything after the port number. Forever (server we will be using) by default listens to port 3000. Replace "yourdomain.com" with the domain you will be using. It will look like this, "http://yourdomain.com/3000"

1. Run `grunt build` in the root of the project folder.

2. Copy the files in the `dist` folder onto a webserver to serve the static files. In this case, here is an example nginx config file.

        #yourdomain.com

        server {

              listen 80; #listening on port 80
              server_name yourdomain.com; #remember to make modifications to hosts file in /etc/hosts
              root /home/exampleUser/AngularTodoPRJ/dist;
              index index.html;
              location / {

                      error_page 404 /index.html; #added error page redirection

                      }
        }


### Setting up the Backend

This app depends on the backend to run properly.

1. The backend for this app is found here at this repo: https://github.com/julianpoy/jaylenBackend

2. To run the backend, first clone the repo above. Second, install forever from npm globally, `npm install forever -g`. You may    need to run `sudo npm install forever -g` if on Ubuntu/Debian.
   You can use [forever](https://www.npmjs.com/package/forever) to run the backend server and autorestart it.

3. Next, install mongodb on your system globally and have it running. If on a Ubuntu/Debian system, you would run
   `sudo apt install mongodb`.

4. After having cloned the repo linked above and are in the root of the folder, run `npm install`.

5. Use forever to start the server, run `forever start bin/www`.

6. You should now be able to get and post tasks to the server after registering an account through your site.

--------------------------------------------------------------------------------------------------------------

Pull requests and issues are welcomed.
