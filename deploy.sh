#!/bin/bash

echo "🚀 Starting Aman Cajoler Deployment..."

# Update system
sudo apt update && sudo apt upgrade -y

echo "✅ Basic deployment script ready!"
echo "📝 Run: docker-compose -f docker-compose.prod.yml up -d"
