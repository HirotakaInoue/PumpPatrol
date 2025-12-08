use crate::models::training::{CreateWorkoutRequest, TrainingType, WorkoutSessionResponse};
use axum::{extract::State, http::StatusCode, Json};
use sqlx::PgPool;
use uuid::Uuid;

pub async fn get_training_types(State(pool): State<PgPool>) -> Json<Vec<TrainingType>> {
    // Query database for training types
    let result = sqlx::query_as::<_, (Uuid, String)>(
        "SELECT id, name FROM training_types ORDER BY name"
    )
    .fetch_all(&pool)
    .await;

    match result {
        Ok(rows) => {
            let trainings = rows
                .into_iter()
                .map(|(id, name)| TrainingType::new(id, name))
                .collect();
            Json(trainings)
        }
        Err(_) => {
            // Fallback to default values if query fails
            let trainings = vec![
                TrainingType::new(Uuid::now_v7(), "Bench Press".to_string()),
                TrainingType::new(Uuid::now_v7(), "Squat".to_string()),
                TrainingType::new(Uuid::now_v7(), "Dead Lift".to_string()),
            ];
            Json(trainings)
        }
    }
}

pub async fn create_workout_session(
    State(pool): State<PgPool>,
    Json(payload): Json<CreateWorkoutRequest>,
) -> Result<Json<WorkoutSessionResponse>, StatusCode> {
    // Start a transaction
    let mut tx = pool
        .begin()
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

    // Create workout session
    let session_id = Uuid::now_v7();
    sqlx::query(
        "INSERT INTO workout_sessions (id) VALUES ($1)"
    )
    .bind(session_id)
    .execute(&mut *tx)
    .await
    .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

    // Insert each exercise record and its training sets
    for exercise in payload.training_sets {
        let exercise_id = Uuid::now_v7();

        sqlx::query(
            "INSERT INTO exercise_records (id, workout_session_id, training_type_id)
             VALUES ($1, $2, $3)"
        )
        .bind(exercise_id)
        .bind(session_id)
        .bind(exercise.training_type)
        .execute(&mut *tx)
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

        // Insert training sets
        for (index, set) in exercise.training_set.iter().enumerate() {
            sqlx::query(
                "INSERT INTO training_sets (exercise_record_id, weight, reps, set_order)
                 VALUES ($1, $2, $3, $4)"
            )
            .bind(exercise_id)
            .bind(set.training_weight)
            .bind(set.training_reps)
            .bind((index + 1) as i32)
            .execute(&mut *tx)
            .await
            .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;
        }
    }

    // Commit transaction
    tx.commit()
        .await
        .map_err(|_| StatusCode::INTERNAL_SERVER_ERROR)?;

    Ok(Json(WorkoutSessionResponse {
        id: session_id,
        created_at: chrono::Utc::now(),
        message: "Workout session created successfully".to_string(),
    }))
}
