import { TrainingSet } from "./TrainingSet";

import type { TrainingFormValues } from "../../../pages/RegistorTrainingPage";
import type { UseFormRegister } from "react-hook-form";

export const MenuSectionSets = ({
  register,
  count,
  menu_idx,
}: {
  register: UseFormRegister<TrainingFormValues>;
  count: number;
  menu_idx: number;
}) => {
  return (
    <>
      {Array.from({ length: count }, (_, idx) => (
        <TrainingSet
          key={idx}
          register={register}
          menu_idx={menu_idx}
          set_idx={idx}
        />
      ))}
    </>
  );
};
