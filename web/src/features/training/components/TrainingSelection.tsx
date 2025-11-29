import type { trainingTypes } from "../types/trainingType";
import { get_training_type } from "../api/get_training_type";

import { useEffect, useState } from "react";

import type { TrainingFormValues } from "../../../pages/RegistorTrainingPage";
import type { UseFormRegister, UseFormSetValue } from "react-hook-form";

// const training_types:trainingTypes = {
//     trainings: [
//         {id:"1",name:"bench press"},
//         {id:"2",name:"squat"},
//         {id:"3",name:"dead lift"},
//     ]
// }

export const TrainingSelection = ({
  register,
  setValue,
  idx,
}: {
  register: UseFormRegister<TrainingFormValues>;
  setValue: UseFormSetValue<TrainingFormValues>;
  idx: number;
}) => {
  const [training_types, setTrainingTypes] = useState<trainingTypes | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await get_training_type();
      setTrainingTypes(data);

      if (data.trainings.length > 0) {
        setValue(`trainingSets.${idx}.trainingType`, data.trainings[0].id);
        setValue(
          `trainingSets.${idx}.trainingTypeName`,
          data.trainings[0].name
        );
      }
    };
    fetchData();
  }, [idx, setValue]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = e.target.value;
    const selectedTraiging = training_types?.trainings.find(
      (t) => t.id === selectedId
    );
    if (selectedTraiging) {
      setValue(`trainingSets.${idx}.trainingTypeName`, selectedTraiging.name);
    }
  };

  return training_types != null ? (
    <div className="flex items-center justify-end bg-[var(--color-surface-light)] p-3 rounded-t-lg">
      <select
        {...(register(`trainingSets.${idx}.trainingType`),
        { onChange: handleChange })}
        className="bg-transparent text-white font-medium rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
      >
        {training_types.trainings.map((t) => (
          <option key={t.id} value={t.id}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
  ) : (
    <div>Loading...</div>
  );
};
