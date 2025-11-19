.PHONY: backend-run backend-test backend-lint web-dev web-build web-lint web-format

backend-run:
	cd backend && go run ./cmd/api

backend-test:
	cd backend && go test ./...

backend-lint:
	cd backend && golangci-lint run ./...

web-dev:
	cd web && pnpm dev

web-build:
	cd web && pnpm build

web-lint:
	cd web && pnpm lint

web-format:
	cd web && pnpm format
