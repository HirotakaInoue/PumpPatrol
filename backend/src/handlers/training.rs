use crate::models::training::TrainingType;
use axum::{Json, extract::State};
use sqlx::PgPool;
use uuid::Uuid;

pub async fn get_training_types(State(_pool): State<PgPool>) -> Json<Vec<TrainingType>> {
    // TODO: Query database
    let trainings = vec![
        TrainingType::new(Uuid::now_v7(), "Bench Press".to_string()),
        TrainingType::new(Uuid::now_v7(), "Squat".to_string()),
        TrainingType::new(Uuid::now_v7(), "Dead Lift".to_string()),
    ];

    Json(trainings)
}
