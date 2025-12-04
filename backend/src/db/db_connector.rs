use anyhow::Result;
use sqlx::{FromRow, postgres::PgPool};

pub struct DBConnector {
    pool: PgPool,
}

impl DBConnector {
    pub fn new(pool: PgPool) -> Self {
        Self { pool }
    }

    pub async fn new_with_url(url: String) -> Self {
        let pool = PgPool::connect(&url)
            .await
            .expect("cannot connect to DB pool");

        Self { pool }
    }

    pub fn get_pool(&self) -> &PgPool {
        &self.pool
    }
}
