use axum::{extract::State, Json, Router, routing::get};
use serde::Serialize;
use sqlx::PgPool;
use tower_http::cors::{Any, CorsLayer};
use uuid::Uuid;

#[tokio::main]
async fn main() {
    // Load environment variables
    dotenvy::dotenv().ok();

    // Create database connection pool
    let database_url = std::env::var("DATABASE_URL")
        .expect("DATABASE_URL must be set in .env file");
    let pool = PgPool::connect(&database_url)
        .await
        .expect("Failed to connect to database");

    println!("Connected to database successfully!");

    // build our application with a single route
    let cors = CorsLayer::new()
        .allow_origin(
            "http://localhost:5173"
                .parse::<axum::http::HeaderValue>()
                .unwrap(),
        )
        .allow_methods(Any)
        .allow_headers(Any);

    let app = Router::new()
        .route("/", get(|| async { "Hello, World!" }))
        .route("/training/type", get(get_training_type))
        .with_state(pool)
        .layer(cors);

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
    trainings: Vec<TrainingType>,
}

async fn get_training_type(State(pool): State<PgPool>) -> Json<TrainingTypes> {
    // TODO: Query database instead of using dummy data
    // Example: let trainings = sqlx::query_as!(TrainingType, "SELECT id, name FROM training_types").fetch_all(&pool).await.unwrap();

    let mut trainings: Vec<TrainingType> = Vec::new();
    trainings.push(TrainingType::new(Uuid::now_v7(), "Bench Press".to_string()));
    trainings.push(TrainingType::new(Uuid::now_v7(), "Squat".to_string()));
    trainings.push(TrainingType::new(Uuid::now_v7(), "Dead Lift".to_string()));

    let training_types = TrainingTypes {
        trainings: trainings,
    };

    Json(training_types)
}
