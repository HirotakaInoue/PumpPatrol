import type { trainingTypes } from "../types/trainingType";

export async function get_training_type(): Promise<trainingTypes> {
  const data = await fetch("http://localhost:8080/training/type").then((res) =>
    res.json()
  );

  return data as trainingTypes;
}
