import { MenuBar } from './components/MenuBar'
import { RegistorLabel } from './components/RegistorLabel'
import type { RegistorLabelProps } from './components/RegistorLabel'

import RegistorTraining from '/src/assets/registor_training.svg';

function App() {
  const registor_training: RegistorLabelProps = {
    image: RegistorTraining,
    width: 300,
    height: 50,
    label: "Registor Training"
  }

  return (
    <>
      <MenuBar></MenuBar>
      <RegistorLabel {...registor_training}></RegistorLabel>
    </>
  )
}

export default App
