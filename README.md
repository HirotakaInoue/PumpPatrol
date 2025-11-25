# PumpPatrol

Fitness tracking application with Rust backend (Axum) and React frontend (Vite).

## Tech Stack

### Backend
- Rust 1.91.1
- Axum 0.8.7 (Web framework)
- SQLx 0.8 (PostgreSQL driver)
- PostgreSQL 18

### Frontend
- React 19+ with TypeScript
- Vite 6+ (Build tool)
- Node.js 24, pnpm 10.22.0

### Development
- Dev Container with Docker Compose
- PostgreSQL container for local development

## Quick Start

### Start Development Servers

```bash
# Start both backend and frontend
make dev
# or
./dev.sh

# Start individually
make backend-run    # Backend on port 8080
make web-dev        # Frontend on port 5173
```

### Database Management

```bash
# Run migrations
make migrate

# Rollback last migration
make migrate-revert
```

### Other Commands

```bash
# Backend
make backend-test    # Run Rust tests
make backend-lint    # Run clippy

# Frontend
make web-build       # Build for production
make web-lint        # Run ESLint
make web-format      # Apply Prettier

# Cleanup
make clean          # Remove build artifacts
```

## Development Setup

1. Open in VS Code with Dev Containers extension
2. Rebuild container: `Dev Containers: Rebuild Container`
3. Database container starts automatically
4. Run migrations: `make migrate`
5. Start dev servers: `make dev`

Access:
- Frontend: http://localhost:5173
- Backend: http://localhost:8080
- Database: localhost:5432 (user: app, pass: password)
