-- Create training_types table
CREATE TABLE IF NOT EXISTS training_types (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert initial data
INSERT INTO training_types (name) VALUES
    ('Bench Press'),
    ('Squat'),
    ('Dead Lift')
ON CONFLICT (name) DO NOTHING;
