#!/bin/bash

# Migration revert script for PumpPatrol database
DATABASE_URL=${DATABASE_URL:-"postgres://app:password@localhost:5432/PumpPatrolDB"}

echo "Reverting last migration against: $DATABASE_URL"

sqlx migrate revert --source /workspaces/PumpPatrol/infra/migrations --database-url "$DATABASE_URL"

if [ $? -eq 0 ]; then
    echo "✅ Migration reverted successfully!"
else
    echo "❌ Migration revert failed!"
    exit 1
fi
