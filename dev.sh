#!/bin/bash

# PumpPatrol Development Server Startup Script
# Starts both backend (Rust) and frontend (React) servers

set -e

echo "🚀 Starting PumpPatrol development servers..."
echo ""

# Trap SIGINT (Ctrl+C) and kill all background processes
trap 'echo ""; echo "🛑 Stopping all servers..."; kill 0' SIGINT SIGTERM

# Start backend server
echo "📦 Starting backend server (port 8080)..."
cd backend
cargo run &
BACKEND_PID=$!
cd ..

# Wait a bit for backend to start
sleep 2

# Start frontend server
echo "⚛️  Starting frontend server (port 5173)..."
cd web
pnpm dev &
FRONTEND_PID=$!
cd ..

echo ""
echo "✅ Both servers are running!"
echo "   - Backend:  http://localhost:8080"
echo "   - Frontend: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop all servers"
echo ""

# Wait for all background processes
wait
