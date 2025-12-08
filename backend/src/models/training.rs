use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Serialize)]
pub struct TrainingType {
    pub id: Uuid,
    pub name: String,
}

impl TrainingType {
    pub fn new(id: Uuid, name: String) -> Self {
        Self { id, name }
    }
}

// Request models for creating workout session
#[derive(Deserialize, Debug)]
pub struct CreateWorkoutRequest {
    #[serde(rename = "trainingSetNumber")]
    pub training_set_number: i32,
    #[serde(rename = "trainingSets")]
    pub training_sets: Vec<CreateExerciseRecord>,
}

#[derive(Deserialize, Debug)]
pub struct CreateExerciseRecord {
    #[serde(rename = "trainingType")]
    pub training_type: Uuid,
    #[serde(rename = "trainingTypeName")]
    pub training_type_name: String,
    #[serde(rename = "trainingNumber")]
    pub training_number: i32,
    #[serde(rename = "trainingSet")]
    pub training_set: Vec<CreateTrainingSet>,
}

#[derive(Deserialize, Debug)]
pub struct CreateTrainingSet {
    #[serde(rename = "trainingWeight")]
    pub training_weight: f64,
    #[serde(rename = "trainingReps")]
    pub training_reps: i32,
}

// Response model
#[derive(Serialize)]
pub struct WorkoutSessionResponse {
    pub id: Uuid,
    pub created_at: chrono::DateTime<chrono::Utc>,
    pub message: String,
}

// Database models
pub struct TrainingSet {
    pub weight: f32,
    pub reps: i64,
}

pub struct ExerciseRecord {
    pub training_sets: Vec<TrainingSet>,
}

impl ExerciseRecord {
    pub fn num(&self) -> usize {
        self.training_sets.len()
    }
}

pub struct WorkoutSession {
    pub excersize_records: Vec<ExerciseRecord>,
}

impl WorkoutSession {
    pub fn num(&self) -> usize {
        self.excersize_records.len()
    }
}
