# syntax=docker/dockerfile:1

ARG NODE_VERSION=24
ARG PNPM_VERSION=10.22.0
ARG RUST_VERSION=1.91.1

FROM mcr.microsoft.com/devcontainers/rust:latest

ARG NODE_VERSION
ARG PNPM_VERSION
ARG RUST_VERSION

ENV RUSTUP_HOME=/usr/local/rustup \
    CARGO_HOME=/usr/local/cargo \
    PATH=/usr/local/cargo/bin:${PATH}

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

# Rustとcargoをインストール（ベースイメージに含まれていない場合に備えて）
RUN mkdir -p ${RUSTUP_HOME} ${CARGO_HOME} \
    && export RUSTUP_HOME=${RUSTUP_HOME} CARGO_HOME=${CARGO_HOME} \
    && curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --profile default --default-toolchain ${RUST_VERSION} \
    && ${CARGO_HOME}/bin/rustup component add rustfmt clippy \
    && chown -R vscode:vscode ${RUSTUP_HOME} ${CARGO_HOME}

# Install Claude
RUN npm install -g @anthropic-ai/claude-code@$latest


WORKDIR /workspaces/PumpPatrol

USER vscode
