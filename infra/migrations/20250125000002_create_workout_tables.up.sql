-- Create workout_sessions table
CREATE TABLE IF NOT EXISTS workout_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NULL, -- Future extension for multi-user support
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create exercise_records table
CREATE TABLE IF NOT EXISTS exercise_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    workout_session_id UUID NOT NULL,
    training_type_id UUID NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (workout_session_id) REFERENCES workout_sessions(id) ON DELETE CASCADE,
    FOREIGN KEY (training_type_id) REFERENCES training_types(id) ON DELETE RESTRICT
);

-- Create training_sets table
CREATE TABLE IF NOT EXISTS training_sets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    exercise_record_id UUID NOT NULL,
    weight DECIMAL(10, 2) NOT NULL,
    reps INTEGER NOT NULL,
    set_order INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (exercise_record_id) REFERENCES exercise_records(id) ON DELETE CASCADE
);

-- Create indexes for better query performance
CREATE INDEX idx_exercise_records_workout_session ON exercise_records(workout_session_id);
CREATE INDEX idx_training_sets_exercise_record ON training_sets(exercise_record_id);
CREATE INDEX idx_workout_sessions_created_at ON workout_sessions(created_at DESC);
