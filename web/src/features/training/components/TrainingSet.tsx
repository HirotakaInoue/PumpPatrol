import type { TrainingFormValues } from "../../../pages/RegistorTrainingPage";
import type { UseFormRegister } from "react-hook-form";

export const TrainingSet = ({
  register,
  menu_idx,
  set_idx,
}: {
  register: UseFormRegister<TrainingFormValues>;
  menu_idx: number;
  set_idx: number;
}) => {
  return (
    <div className="flex items-center justify-end gap-2 py-2">
      <input
        type="number"
        className="w-1/4 text-right bg-[var(--color-surface-light)] text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] border border-transparent"
        {...register(
          `trainingSets.${menu_idx}.trainingSet.${set_idx}.trainingWeight`
        )}
      ></input>
      <span className="text-white">KG</span>
      <input
        type="number"
        className="w-1/4 text-right bg-[var(--color-surface-light)] text-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] border border-transparent"
        {...register(
          `trainingSets.${menu_idx}.trainingSet.${set_idx}.trainingReps`
        )}
      ></input>
      <span className="text-white">rep</span>
    </div>
  );
};
