use axum::{Json, Router, routing::get};
use serde::Serialize;
use uuid::Uuid;

#[tokio::main]
async fn main() {
    // build our application with a single route
    let app = Router::new()
        .route("/", get(|| async { "Hello, World!" }))
        .route("/training/type", get(get_training_type));

    // run our app with hyper, listening globally on port 3000
    let listener = tokio::net::TcpListener::bind("0.0.0.0:8080").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

#[derive(Serialize)]
struct TrainingType {
    id: Uuid,
    name: String,
}

impl TrainingType {
    fn new(id: Uuid, name: String) -> Self {
        return Self { id: id, name: name };
    }
}

#[derive(Serialize)]
struct TrainingTypes {
    training: Vec<TrainingType>,
}

async fn get_training_type() -> Json<TrainingTypes> {
    let mut trainings: Vec<TrainingType> = Vec::new();
    trainings.push(TrainingType::new(Uuid::now_v7(), "Bench Press".to_string()));
    trainings.push(TrainingType::new(Uuid::now_v7(), "Squat".to_string()));
    trainings.push(TrainingType::new(Uuid::now_v7(), "Dead Lift".to_string()));

    let training_types = TrainingTypes {
        training: trainings,
    };

    Json(training_types)
}
