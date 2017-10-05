#!/bin/bash

NAME_PROJECT="jaylenw/AngularJsTodoApp"

clear
echo " ------------------ $NAME_PROJECT  ------------------ "

echo "Fetches the list of available updates ..."
sudo apt update

echo "Installing Node.js ..."
if [ "`dpkg -s nodejs | grep "installed"`" = "" ]; then
  sudo apt install nodejs
  echo "Configuring Node.js ..."
  sudo ln -s /usr/bin/nodejs /usr/bin/node
  echo "Node.js installed!"
else
  echo "Node.js is already installed!";
fi

echo "Installing npm ..."
if [ "`dpkg -s npm | grep "installed"`" = "" ]; then
  sudo apt install npm
  echo "npm installed!"
else
  echo "npm is already installed!";
fi

echo "Installing npm packages ...."
sudo npm install -g npm

echo "Installing bower packages ...."
sudo npm install -g bower

echo "Installing grunt-cli packages ...."
sudo npm install -g grunt-cli

echo "Installing npm dependences ...."
npm install

echo "Installing bower dependences ...."
bower install

echo "Finish!"
