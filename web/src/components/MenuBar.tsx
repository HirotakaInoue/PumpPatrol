import MenuIcon from "/src/assets/icon/menu_icon.svg";
import "/src/assets/css/menuBar.css"

export const MenuBar = () => {
    return (
        <div className="menuBarClass">
            <img src={MenuIcon} width={50} height={50} alt="menu"/>
            Pump Patrol
        </div>
    )
}