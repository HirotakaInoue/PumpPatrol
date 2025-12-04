mod training;

use axum::Router;
use sqlx::PgPool;
use tower_http::cors::{Any, CorsLayer};

pub fn create_router(pool: PgPool) -> Router {
    let cors = CorsLayer::new()
        .allow_origin(
            "http://localhost:5173"
                .parse::<axum::http::HeaderValue>()
                .unwrap(),
        )
        .allow_methods(Any)
        .allow_headers(Any);

    Router::new()
        .route("/", axum::routing::get(|| async { "Hello, World!" }))
        .nest("/training", training::routes()) // ← 先にmerge
        .with_state(pool) // ← 最後に一度だけstateを設定
        .layer(cors)
}
