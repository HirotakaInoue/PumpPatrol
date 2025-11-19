# syntax=docker/dockerfile:1

ARG NODE_VERSION=24
ARG PNPM_VERSION=10.22.0

FROM mcr.microsoft.com/devcontainers/go:1.23

ARG NODE_VERSION
ARG PNPM_VERSION

RUN apt-get update \
    && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y --no-install-recommends \
        ca-certificates \
        curl \
        gnupg \
        build-essential \
        make \
        pkg-config \
        libpq-dev \
    && mkdir -p /etc/apt/keyrings \
    && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg \
    && echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_${NODE_VERSION}.x nodistro main" > /etc/apt/sources.list.d/nodesource.list \
    && apt-get update \
    && apt-get install -y --no-install-recommends nodejs \
    && corepack enable \
    && corepack prepare pnpm@${PNPM_VERSION} --activate \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install golangci-lint
ARG GOLANGCI_LINT_VERSION=v2.6.2
RUN curl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s -- -b /usr/local/bin ${GOLANGCI_LINT_VERSION}

# Common Go development utilities (always latest)
RUN GOBIN=/usr/local/bin go install github.com/air-verse/air@latest \
    && GOBIN=/usr/local/bin go install github.com/go-task/task/v3/cmd/task@latest

WORKDIR /workspaces/PumpPatrol

USER vscode
