# make sure to run with "bash" CMD

#!/bin/bash
set -e

REGISTRY="[IPAddress]:5000"
VERSION="1.0.0"

curl --max-time 2 -v $REGISTRY/v2/

echo "🚀 Building backend image..."
cd ./backend
docker build -t $REGISTRY/backend:$VERSION .

echo "📤 Pushing backend image..."
docker push $REGISTRY/backend:$VERSION
cd ..

echo "🚀 Building frontend image..."
cd ./frontend
docker build \
  -t $REGISTRY/frontend:$VERSION \
  --build-arg VITE_API_BASE_URL=api \
  .

echo "📤 Pushing frontend image..."
docker push $REGISTRY/frontend:$VERSION
cd ..

echo "✅ Done!"
