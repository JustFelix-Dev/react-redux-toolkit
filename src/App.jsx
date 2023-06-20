import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CakeView } from './features/cake/cakeView'
import { UserView } from './features/user/userView'
import { IceCreamView } from './features/iceCream/iceCreamView'


function App() {

 
  return (
    <>
    <CakeView/>
    <IceCreamView/>
    <UserView/>
    </>
  )
}

export default App
