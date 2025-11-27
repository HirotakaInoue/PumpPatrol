import { MenuSection } from "./MenuSection";
import { AddButton } from "../../../components/AddButton";
import type { AddButtonProps } from "../../../components/AddButton";

import { useState } from "react";

export const AddTraining = () => {
  const [menuNum, setMenuNum] = useState(1);

  const add_button_props: AddButtonProps = {
    label: "add menu",
    setter: setMenuNum,
  };

  return (
    <div>
      {Array.from({ length: menuNum }, (_, idx) => (
        <MenuSection key={idx}></MenuSection>
      ))}
      <AddButton {...add_button_props}></AddButton>
    </div>
  );
};
