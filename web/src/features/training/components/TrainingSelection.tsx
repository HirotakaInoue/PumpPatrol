import type { trainingTypes } from "../types/trainingType";
import { get_training_type } from "../api/get_training_type";

import { useEffect, useState } from "react";

// const training_types:trainingTypes = {
//     trainings: [
//         {id:"1",name:"bench press"},
//         {id:"2",name:"squat"},
//         {id:"3",name:"dead lift"},
//     ]
// }

export const TrainingSelection = () => {
  const [training_types, setTrainingTypes] = useState<trainingTypes | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await get_training_type();
      setTrainingTypes(data);
    };
    fetchData();
  }, []);

  return training_types != null ? (
    <select>
      {training_types.trainings.map((t) => (
        <option key={t.id} value={t.id}>
          {t.name}
        </option>
      ))}
    </select>
  ) : (
    <div>Loading...</div>
  );
};
