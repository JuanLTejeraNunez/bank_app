#!/usr/bin/env bash
set -e
echo "Building and starting services..."
docker-compose up --build -d
echo "Waiting for DB to initialize..."
sleep 8
echo "Creating sample accounts..."
curl -s -X POST http://localhost:8000/accounts -H "Content-Type: application/json" -d '{"name":"Alice","balance":1000}'
curl -s -X POST http://localhost:8000/accounts -H "Content-Type: application/json" -d '{"name":"Bob","balance":500}'
echo "Performing a transfer..."
curl -s -X POST http://localhost:8000/transfer -H "Content-Type: application/json" -d '{"from_id":1,"to_id":2,"amount":100}'
echo "Balances:"
curl -s http://localhost:8000/accounts/1 | jq .
curl -s http://localhost:8000/accounts/2 | jq .
echo "Open http://localhost:8000/docs to explore the API."
