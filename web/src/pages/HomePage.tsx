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
      <div className="relative bg-[var(--color-background)] min-h-screen p-6">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[var(--color-primary)] opacity-5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-[var(--color-accent)] opacity-5 blur-3xl" />

        {/* Asymmetric grid layout */}
        <div className="relative max-w-7xl mx-auto">
          {/* Top section - Featured actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="md:col-span-1">
              <RegistorLabel {...registor_training}></RegistorLabel>
            </div>
            <div className="md:col-span-1">
              <RegistorLabel {...registor_weight}></RegistorLabel>
            </div>
          </div>

          {/* Bottom section - Secondary actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-1">
              <RegistorLabel {...history}></RegistorLabel>
            </div>
            <div className="md:col-span-1">
              <RegistorLabel {...settings}></RegistorLabel>
            </div>
          </div>

          {/* Motivational text overlay */}
          <div className="mt-12 text-center">
            <p
              className="text-[var(--color-text-secondary)] text-sm uppercase tracking-[0.3em] opacity-60"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Track • Progress • Dominate
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
