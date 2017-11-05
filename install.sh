#!/bin/bash

NAME_PROJECT="jaylenw/AngularJsTodoApp"

clear
echo " ------------------ $NAME_PROJECT  ------------------ "

echo "Fetches the list of available updates ..."
sudo apt update

echo "Installing Node.js ..."
if [ "`dpkg -s nodejs | grep "installed"`" = "" ]; then
  sudo curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
  sudo apt install nodejs -y
  echo "Configuring Node.js ..."
  sudo ln -s /usr/bin/nodejs /usr/bin/node
  echo "Node.js installed!"
else
  echo "Node.js is already installed!";
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
