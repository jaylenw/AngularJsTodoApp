# AngularJs Todo App [![Build Status](https://travis-ci.org/jaylenw/AngularJsTodoApp.svg?branch=master)](https://travis-ci.org/jaylenw/AngularJsTodoApp)

Archived on 2023/11/26.

This repository contains the frontend code for [Nota](https://github.com/jaylenw/nota).
The code is designed for you to connect it to your own deployment of Nota. You may
try out Nota that I host [here](https://nota.jaylenwimbish.com/).


The Android version of this app is available [here](https://github.com/jaylenw/IonicTodoApp).
The desktop version of this app is available [here](https://github.com/jaylenw/ElectronTodoApp).

## Description

Users are able to use this App as a Todo-List or a Note Taking application.

![](https://github.com/jaylenw/AngularJsTodoApp/raw/master/screenshots/1.png)

![](https://github.com/jaylenw/AngularJsTodoApp/raw/master/screenshots/2.png)

![](https://github.com/jaylenw/AngularJsTodoApp/raw/master/screenshots/3.png)

## Features

* User Login, Logout, Registration, Reset Password
* Add, Edit, Update, Delete, and Archive Notes
* Supports Markdown
* Mobile Friendly

## Testing & Development

Note: You will not be able to fully use this app until the backend is setup correctly.
Please view the Nota repository to see how to set up the backend. Once you have
the backend running, you have to change the Javascript file in `/app/scripts/services/`, `config.js`, to have your url and/or port number that will be directing requests
to your backend for the `_apiUrl` variable. Replace "http://yourdomain.com:3000"
with the uri you will be using.

1. The instructions below assume you have [Docker](https://www.docker.com/) and
[Docker Compose](https://docs.docker.com/compose/) installed.

2. Clone this repo.

3. In the root of the project folder, run `./build-docker.sh`. This builds the Docker
for our use for development.

4. Run `docker-compose run --service-ports notafrontend bash` to use the image we
built and enter a bash shell to run our commands in.

  * Run `grunt serve` for live preview when modifying the code. You can then browse
the site after opening your browser to the url that grunt has informed you in it's
output. The url is currently `http://0.0.0.0:9000`.

  * Run `grunt test` to make sure the app will past some unit testing if you are
making changes to the app. This is a small safety measure to make sure your changes
do not have an adverse effect.

## Build & Production

1. Run `grunt build` to build the site. A `dist` folder will be created of the minified
site files you may then deploy to production.

--------------------------------------------------------------------------------------------------------------

Pull requests and issues are welcomed.

Made with ♥ in Los Angeles & Long Beach CA.
