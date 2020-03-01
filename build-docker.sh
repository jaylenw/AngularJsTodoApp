#!/bin/bash

# obtain our user and group id
userID=`id -u`
groupID=`id -g`
export userID
export groupID

docker-compose build --build-arg userID=${userID} --build-arg groupID=${groupID}
