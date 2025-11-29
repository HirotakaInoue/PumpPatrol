import MenuIcon from "/src/assets/icon/menu_icon.svg";

import { useNavigate } from "react-router-dom";

export const MenuBar = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex items-center justify-center bg-[var(--color-background)] p-4 shadow-lg">
      <img
        src={MenuIcon}
        width={50}
        height={50}
        alt="menu"
        className="absolute left-4"
      />
      <button
        onClick={() => navigate("/")}
        className="text-white text-xl font-bold hover:text-[var(--color-accent)] transition-colors duration-200"
      >
        Pump Patrol
      </button>
    </div>
  );
};
