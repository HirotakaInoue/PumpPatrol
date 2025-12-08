use crate::handlers::training;
use axum::{Router, routing::{get, post}};
use sqlx::PgPool;

pub fn routes() -> Router<PgPool> {
    Router::new()
        .route("/type", get(training::get_training_types))
        .route("/session", post(training::create_workout_session))
}
