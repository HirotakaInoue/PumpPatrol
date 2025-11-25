.PHONY: dev backend-run backend-test backend-lint web-dev web-build web-lint web-format migrate migrate-revert clean help

help:
	@echo "PumpPatrol Development Commands"
	@echo ""
	@echo "  make dev            - Start both backend and frontend servers"
	@echo "  make backend-run    - Start only backend server"
	@echo "  make web-dev        - Start only frontend server"
	@echo "  make migrate        - Run database migrations"
	@echo "  make migrate-revert - Revert last migration"
	@echo "  make clean          - Clean build artifacts"
	@echo ""

dev:
	@./dev.sh

backend-run:
	cd backend && cargo run

backend-test:
	cd backend && cargo test

backend-lint:
	cd backend && cargo clippy

web-dev:
	cd web && pnpm dev

web-build:
	cd web && pnpm build

web-lint:
	cd web && pnpm lint

web-format:
	cd web && pnpm format

migrate:
	@cd infra && ./migrate.sh

migrate-revert:
	@cd infra && ./migrate-revert.sh

clean:
	@echo "🧹 Cleaning build artifacts..."
	@cd backend && cargo clean
	@cd web && rm -rf node_modules dist
	@echo "✅ Clean complete!"
