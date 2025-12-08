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
    <div className="flex items-center justify-between mb-4 pb-4 border-b-2 border-[var(--color-surface-light)]">
      <label
        className="text-[var(--color-text-secondary)] uppercase text-sm tracking-wider font-semibold"
        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.15em' }}
      >
        Exercise
      </label>
      <select
        {...(register(`trainingSets.${idx}.trainingType`),
        { onChange: handleChange })}
        className="bg-[var(--color-background)] text-[var(--color-text-primary)] font-medium p-3 border-2 border-[var(--color-surface-light)] focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-200 cursor-pointer"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {training_types.trainings.map((t) => (
          <option key={t.id} value={t.id} className="bg-[var(--color-surface)]">
            {t.name}
          </option>
        ))}
      </select>
    </div>
  ) : (
    <div className="flex items-center justify-center p-4">
      <span className="text-[var(--color-text-secondary)] uppercase tracking-wider"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
        Loading...
      </span>
    </div>
  );
};
