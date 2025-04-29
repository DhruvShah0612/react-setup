#!/bin/bash

echo "Switching to app directory..."
cd /var/www/html/react

sudo npm i

sudo npm run build
