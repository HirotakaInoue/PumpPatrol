import { MenuSection } from "./MenuSection";
import { AddButton } from "../../../components/AddButton";
import type { AddButtonProps } from "../../../components/AddButton";
import type { TrainingFormValues } from "../../../pages/RegistorTrainingPage";

import { useState, useEffect } from "react";
import type { UseFormRegister, UseFormSetValue } from "react-hook-form";

export const AddTraining = ({
  register,
  setValue,
}: {
  register: UseFormRegister<TrainingFormValues>;
  setValue: UseFormSetValue<TrainingFormValues>;
}) => {
  const [menuNum, setMenuNum] = useState(1);

  const add_button_props: AddButtonProps = {
    label: "add menu",
    setter: setMenuNum,
  };

  // set menuNum to register.trainingSetNumber.
  useEffect(() => {
    setValue("trainingSetNumber", menuNum);
  }, [menuNum, register]);

  return (
    <div>
      {Array.from({ length: menuNum }, (_, idx) => (
        <MenuSection
          idx={idx}
          register={register}
          setValue={setValue}
        ></MenuSection>
      ))}
      <AddButton {...add_button_props}></AddButton>
    </div>
  );
};
