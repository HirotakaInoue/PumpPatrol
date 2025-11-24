import MenuIcon from "/src/assets/icon/menu_icon.svg";
import "/src/assets/css/menuBar.css"

import { useNavigate } from "react-router-dom";

export const MenuBar = () => {
    const navigate = useNavigate()
    return (
        <div className="menuBarClass">
            <img src={MenuIcon} width={50} height={50} alt="menu"/>
            <button onClick={() => navigate('/')}>
                Pump Patrol
            </button>
        </div>
    )
}