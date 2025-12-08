import MenuIcon from "/src/assets/icon/menu_icon.svg";

import { useNavigate } from "react-router-dom";

export const MenuBar = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex items-center justify-between bg-[var(--color-secondary)] px-6 py-5 border-b-4 border-[var(--color-primary)]">
      <img
        src={MenuIcon}
        width={44}
        height={44}
        alt="menu"
        className="cursor-pointer hover:scale-110 transition-transform duration-200"
      />
      <button
        onClick={() => navigate("/")}
        className="text-white text-3xl tracking-wider uppercase hover:text-[var(--color-accent)] transition-all duration-300 hover:scale-105"
        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.15em' }}
      >
        Pump Patrol
      </button>
      <div className="w-11" />
    </div>
  );
};
