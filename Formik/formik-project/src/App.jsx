import React from 'react'
import {Routes,Route} from 'react-router-dom'
import GeneralForm from './components/GeneralForm'
import PortalForm from './components/PortalForm'
const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<GeneralForm/>}/>
        <Route path='/portal' element={<PortalForm/>}/>
      </Routes>
    </div>
  )
}

export default App