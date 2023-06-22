#! /bin/sh

echo "Wich node version do you want to use ?"
read version

echo "UPDATE AND UPGRADE"
sudo apt update && sudo apt upgrade -y

echo "INSTALL GIT"
sudo apt install git

echo "INSTALL NODE AND NPM WITH PPA"
curl -fsSL https://deb.nodesource.com/setup_$version.x | sudo -E bash -

sudo apt update

sudo apt install nodejs

echo "###################################"
node -v
npm -v


echo "Install NODEMON ?"
read void
sudo npm i -g nodemon