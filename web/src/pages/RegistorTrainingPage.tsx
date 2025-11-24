import "/src/assets/css/App.css"

import { MenuBar } from "../components/MenuBar" 
import { AddTraining } from "../features/training/components/AddTraining"
import { RegistorButton } from "../components/RegistorButton"

import type { RegistorButtonProps } from "../components/RegistorButton"

export function RegistorTrainingPage() {

    const registor_button_props:RegistorButtonProps = {
        label: "Registor Training"
    }

    return (
        <>
            <MenuBar></MenuBar>
            <AddTraining></AddTraining>
            <RegistorButton {...registor_button_props}></RegistorButton>
        </>
    )
}