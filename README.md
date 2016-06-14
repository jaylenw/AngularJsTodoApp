#AngularJs Todo App

## Build & Development

1. Need to have [Nodejs](https://nodejs.org/en/) and [NPM](https://www.npmjs.com/) installed.

2. Clone this repo.

3. In the root of the project folder, run `npm install` and `bower install`.

3. Run `grunt serve` for live preview. 

## Testing

Running `grunt test` will run the unit tests with karma.

## Production Deployment

1. Run `grunt build` in the root of the project folder.

2. Copy the files in the `dist` folder onto a webserver.

## Setting up the Backend

This app depends on the backend to run properly.

1. The backend for this app is found here at this repo: https://github.com/julianpoy/jaylenBackend

2. To run the backend, first install forever from npm, `npm install forever`.  You can use [forever](https://www.npmjs.com/package/forever) to run the backend server and autorestart it.

3. Next, install mongodb and have it running.

4. Clone the repo linked above. Then run `npm install && bower install`. 

5. Use forever to start the server, run `forever start bin/www`.


