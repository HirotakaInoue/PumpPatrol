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
    <div className="flex items-center justify-end gap-3 py-3 border-b border-[var(--color-surface-light)] last:border-b-0">
      <input
        type="number"
        className="w-1/4 text-right bg-[var(--color-background)] text-[var(--color-text-primary)] p-3 border-2 border-[var(--color-surface-light)] focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-200"
        placeholder="0"
        {...register(
          `trainingSets.${menu_idx}.trainingSet.${set_idx}.trainingWeight`
        )}
      ></input>
      <span className="text-[var(--color-text-secondary)] font-semibold uppercase text-sm tracking-wider"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
        KG
      </span>
      <input
        type="number"
        className="w-1/4 text-right bg-[var(--color-background)] text-[var(--color-text-primary)] p-3 border-2 border-[var(--color-surface-light)] focus:outline-none focus:border-[var(--color-accent)] transition-colors duration-200"
        placeholder="0"
        {...register(
          `trainingSets.${menu_idx}.trainingSet.${set_idx}.trainingReps`
        )}
      ></input>
      <span className="text-[var(--color-text-secondary)] font-semibold uppercase text-sm tracking-wider"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
        REP
      </span>
    </div>
  );
};
