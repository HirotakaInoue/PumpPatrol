import { TrainingSelection } from "./TrainingSelection";
import { MenuSectionSets } from "./MenuSectionSets";
import { AddButton } from "../../../components/AddButton";
import type { AddButtonProps } from "../../../components/AddButton";

import { useState } from "react";

export const MenuSection = () => {
  const [setNum, setSetNum] = useState(1);
  const add_button_props: AddButtonProps = {
    label: "add set",
    setter: setSetNum,
  };

  return (
    <div>
      <TrainingSelection></TrainingSelection>
      <MenuSectionSets {...{ count: setNum }}></MenuSectionSets>
      <AddButton {...add_button_props}></AddButton>
    </div>
  );
};
