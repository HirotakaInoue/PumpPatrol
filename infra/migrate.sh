#!/bin/bash

# Migration script for PumpPatrol database
DATABASE_URL=${DATABASE_URL:-"postgres://app:password@localhost:5432/PumpPatrolDB"}

echo "Running migrations against: $DATABASE_URL"

sqlx migrate run --source /workspaces/PumpPatrol/infra/migrations --database-url "$DATABASE_URL"

if [ $? -eq 0 ]; then
    echo "✅ Migrations completed successfully!"
else
    echo "❌ Migration failed!"
    exit 1
fi
