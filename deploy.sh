#!/bin/bash
set -e

cd /opt/aztravelhub

echo "==> Pulling latest code..."
git pull

echo "==> Building Docker image..."
docker compose build app

echo "==> Starting app container..."
docker compose up -d app

echo "==> Container status:"
docker compose ps

echo "==> Port check:"
ss -tlnp | grep 3002 || echo "WARNING: port 3002 not listening"

echo "==> Deploy complete"
