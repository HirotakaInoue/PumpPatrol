import type { TrainingFormValues } from "../../../pages/RegistorTrainingPage";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080";

export interface WorkoutSessionResponse {
  id: string;
  created_at: string;
  message: string;
}

export async function createWorkoutSession(
  data: TrainingFormValues
): Promise<WorkoutSessionResponse> {
  const response = await fetch(`${API_BASE_URL}/training/session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to create workout session: ${response.statusText}`);
  }

  return response.json();
}
