import "/src/assets/css/App.css"

import { MenuBar } from '../components/MenuBar.tsx'
import { RegistorLabel } from '../components/RegistorLabel'
import type { RegistorLabelProps } from '../components/RegistorLabel'

import RegistorTraining from '/src/assets/icon/registor_training.svg';
import RegistorWeight from '/src/assets/icon/registor_weight.svg'

import { useNavigate } from 'react-router-dom'

export function HomePage() {
  const navigate = useNavigate()

  const registor_training: RegistorLabelProps = {
    image: RegistorTraining,
    width: 300,
    height: 50,
    label: "Registor Training",
    onClick: () => navigate("/training")
  }

  const registor_weight: RegistorLabelProps = {
    image: RegistorWeight,
    width: 300,
    height: 50,
    label: "Registor Weight",
    onClick: () => navigate("/training")
  }

  return (
    <>
      <MenuBar></MenuBar>
      <RegistorLabel {...registor_training}></RegistorLabel>
      <RegistorLabel {...registor_weight}></RegistorLabel>
    </>
  )
}
