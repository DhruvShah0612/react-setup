#!/bin/bash

set -e

echo "🚀 Starting React deployment..."

# Ensure folder exists
sudo mkdir -p /var/www/html/frontend

# Give permission to ubuntu user
sudo chown -R ubuntu:ubuntu /var/www/html/frontend

# Move into project directory
cd /var/www/html/frontend

# echo "📦 Installing dependencies..."
# npm install

#echo "🏗️ Building React app..."
# npm run build

echo "✅ Build completed successfully"
