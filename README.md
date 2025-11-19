# PumpPatrol

This repository now contains a Go backend starter and a Next.js web frontend. Tooling is wired for
linting/formatting on both sides so you can focus on iterating quickly.

## Tool versions

- Go 1.23 (devcontainer base image)
- golangci-lint 2.6.2
- Air (latest) / Task CLI (latest) installed during build
- Node.js 20, pnpm 10.22.0
- Next.js ^16.0.3, React ^19.2.0, TypeScript ^5.9.3
- ESLint ^9.39.1, Prettier ^3.6.2

## Requirements

- Go 1.23+
- pnpm 10 (automatically installed in the devcontainer)

## Useful commands

```bash
# Backend
make backend-run     # start the HTTP server
make backend-test    # run Go tests
make backend-lint    # run golangci-lint

# Frontend
make web-dev         # start Next.js dev server
make web-lint        # run ESLint
make web-format      # apply Prettier
```

The devcontainer automatically installs pnpm and will run `pnpm install` inside `web/` on first
start. Outside of the container, install pnpm manually and run `pnpm install` before `pnpm dev`.
