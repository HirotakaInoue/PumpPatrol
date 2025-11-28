import { MenuBar } from "../components/MenuBar.tsx";
import { RegistorLabel } from "../components/RegistorLabel";
import type { RegistorLabelProps } from "../components/RegistorLabel";

import RegistorTraining from "/src/assets/icon/registor_training.svg";
import RegistorWeight from "/src/assets/icon/registor_weight.svg";
import History from "/src/assets/icon/history.svg";
import Settings from "/src/assets/icon/settings.svg";

import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();

  const registor_training: RegistorLabelProps = {
    image: RegistorTraining,
    width: 300,
    height: 50,
    label: "Registor Training",
    onClick: () => navigate("/training"),
  };

  const registor_weight: RegistorLabelProps = {
    image: RegistorWeight,
    width: 300,
    height: 50,
    label: "Registor Weight",
    onClick: () => navigate("/training"),
  };

  const history: RegistorLabelProps = {
    image: History,
    width: 200,
    height: 50,
    label: "History",
    onClick: () => navigate("/training"),
  };

  const settings: RegistorLabelProps = {
    image: Settings,
    width: 200,
    height: 50,
    label: "Settings",
    onClick: () => navigate("/training"),
  };

  return (
    <>
      <MenuBar></MenuBar>
      <div className="grid grid-cols-2">
        <RegistorLabel {...registor_training}></RegistorLabel>
        <RegistorLabel {...history}></RegistorLabel>
        <RegistorLabel {...registor_weight}></RegistorLabel>
        <RegistorLabel {...settings}></RegistorLabel>
      </div>
    </>
  );
}
