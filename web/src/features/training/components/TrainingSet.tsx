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
    <div>
      <input
        type="number"
        {...register(
          `trainingSets.${menu_idx}.trainingSet.${set_idx}.trainingWeight`
        )}
      ></input>
      KG
      <input
        type="number"
        {...register(
          `trainingSets.${menu_idx}.trainingSet.${set_idx}.trainingReps`
        )}
      ></input>
      rep
    </div>
  );
};
