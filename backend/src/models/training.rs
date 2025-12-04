use serde::Serialize;
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

pub struct TrainingSet {
    weight: f32,
    reps: i64,
}

pub struct ExerciseRecord {
    training_sets: Vec<TrainingSet>,
}

impl ExerciseRecord {
    pub fn num(&self) -> usize {
        self.training_sets.len()
    }
}

pub struct WorkoutSession {
    excersize_records: Vec<ExerciseRecord>,
}

impl WorkoutSession {
    pub fn num(&self) -> usize {
        self.excersize_records.len()
    }
}
