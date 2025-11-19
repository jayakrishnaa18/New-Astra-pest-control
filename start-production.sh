#!/bin/bash

echo "🚀 Starting Astra Pest Control in Production Mode..."

# Load production environment
export NODE_ENV=production

# Kill any existing processes
pkill -f "node.*server.js"

# Start the server
cd /home/kalikijk/webtask
node server/server.js > production.log 2>&1 &

echo "✅ Server started on port 5000"
echo "📝 Logs: tail -f /home/kalikijk/webtask/production.log"
echo "🌐 Access: http://localhost:5000"
