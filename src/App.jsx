// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './components/Cabecera'
import Dashboard from './components/Dashboard'
import Roles from './components/Roles'

function App() {

  return (
    <>
      <div className='container'>
        <div className="row">
          <div className="col-12">
            <Cabecera></Cabecera>
          </div>
          <Dashboard></Dashboard>
          <Roles></Roles>
        </div>
      </div>
      
    </>
  )
}

export default App
