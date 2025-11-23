import "/src/assets/css/App.css"

import { MenuBar } from './components/MenuBar'
import { RegistorLabel } from './components/RegistorLabel'
import type { RegistorLabelProps } from './components/RegistorLabel'

import RegistorTraining from '/src/assets/icon/registor_training.svg';
import RegistorWeight from '/src/assets/icon/registor_weight.svg'

function App() {
  const registor_training: RegistorLabelProps = {
    image: RegistorTraining,
    width: 300,
    height: 50,
    label: "Registor Training"
  }

  const registor_weight: RegistorLabelProps = {
    image: RegistorWeight,
    width: 300,
    height: 50,
    label: "Registor Weight"
  }

  return (
    <>
      <MenuBar></MenuBar>
      <RegistorLabel {...registor_training}></RegistorLabel>
      <RegistorLabel {...registor_weight}></RegistorLabel>
    </>
  )
}

export default App
