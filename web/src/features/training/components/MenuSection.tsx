import { TrainingSelection } from "./TrainingSelection";
import { MenuSectionSets } from "./MenuSectionSets";
import { AddButton } from "../../../components/AddButton";
import type { AddButtonProps } from "../../../components/AddButton";
import type { TrainingFormValues } from "../../../pages/RegistorTrainingPage";
import type { UseFormRegister, UseFormSetValue } from "react-hook-form";

import { useState, useEffect } from "react";

export const MenuSection = ({
  menu_idx,
  register,
  setValue,
}: {
  menu_idx: number;
  register: UseFormRegister<TrainingFormValues>;
  setValue: UseFormSetValue<TrainingFormValues>;
}) => {
  const [setNum, setSetNum] = useState(1);
  const add_button_props: AddButtonProps = {
    label: "add set",
    setter: setSetNum,
  };

  // set setNum to register.trainingSetNumber.
  useEffect(() => {
    setValue(`trainingSets.${menu_idx}.trainingNumber`, setNum);
  }, [setNum, setValue, menu_idx]);

  return (
    <div className="bg-[var(--color-surface)] rounded-lg p-4 m-3 shadow-md border border-[var(--color-surface-light)]">
      <TrainingSelection
        register={register}
        setValue={setValue}
        idx={menu_idx}
      ></TrainingSelection>
      <MenuSectionSets
        register={register}
        count={setNum}
        menu_idx={menu_idx}
      ></MenuSectionSets>
      <AddButton {...add_button_props}></AddButton>
    </div>
  );
};
