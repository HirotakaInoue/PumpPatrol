# Infrastructure

このディレクトリにはデータベースとマイグレーション関連のファイルがあります。

## マイグレーション管理

### マイグレーションの実行

```bash
cd /workspaces/PumpPatrol/infra
./migrate.sh
```

### マイグレーションのロールバック（最後の1つを戻す）

```bash
cd /workspaces/PumpPatrol/infra
./migrate-revert.sh
```

### 新しいマイグレーションの作成

```bash
cd /workspaces/PumpPatrol/infra
sqlx migrate add <migration_name> --source ./migrations
```

これにより `migrations/YYYYMMDDHHMMSS_<migration_name>.up.sql` と `.down.sql` が作成されます。

## データベース接続情報

- Host: `localhost` (devcontainer内から)
- Port: `5432`
- User: `app`
- Password: `password`
- Database: `PumpPatrolDB`

## Docker Compose

DBコンテナは `.devcontainer/docker-compose.yml` で管理されており、devcontainerを起動すると自動的に起動します。
