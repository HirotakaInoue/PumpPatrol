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
    <div className="flex items-center justify-right">
      <input
        type="number"
        className="w-1/4 text-right my-2 mx-1 bg-gray-300 text-black rounded-md p-1"
        {...register(
          `trainingSets.${menu_idx}.trainingSet.${set_idx}.trainingWeight`
        )}
      ></input>
      KG
      <input
        type="number"
        className="w-1/4 text-right my-2 mx-1 bg-gray-300 text-black rounded-md p-1"
        {...register(
          `trainingSets.${menu_idx}.trainingSet.${set_idx}.trainingReps`
        )}
      ></input>
      rep
    </div>
  );
};
