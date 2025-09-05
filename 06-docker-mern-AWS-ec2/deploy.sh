#!/bin/bash

EC2_USER="ec2-user"
EC2_IP="[IPAddress]"
PEM_KEY="[PEM-key-path]"
REMOTE_DIR="/home/ec2-user/project"

echo "🧹 Cleaning local project..."
rm -rf frontend/node_modules
rm -rf backend/node_modules

echo "🚀 Transferring project to EC2..."

scp -r -i "$PEM_KEY" ./ "$EC2_USER@$EC2_IP:$REMOTE_DIR"

echo "✅ Done! Codebase uploaded to EC2."
