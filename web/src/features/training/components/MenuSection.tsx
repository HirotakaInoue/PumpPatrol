import { TrainingSelection } from "./TrainingSelection";
import { MenuSectionSets } from "./MenuSectionSets";
import { AddButton } from "../../../components/AddButton";
import type { AddButtonProps } from "../../../components/AddButton";
import type { TrainingFormValues } from "../../../pages/RegistorTrainingPage";
import type { UseFormRegister, UseFormSetValue } from "react-hook-form";

import { useState, useEffect } from "react";

export const MenuSection = ({
  idx,
  register,
  setValue,
}: {
  idx: number;
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
    setValue(`trainingSets.${idx}.trainingNumber`, setNum);
  }, [setNum, setValue, idx]);

  return (
    <div>
      <TrainingSelection
        register={register}
        setValue={setValue}
        idx={idx}
      ></TrainingSelection>
      <MenuSectionSets {...{ count: setNum }}></MenuSectionSets>
      <AddButton {...add_button_props}></AddButton>
    </div>
  );
};
