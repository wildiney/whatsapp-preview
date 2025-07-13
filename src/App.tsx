import { Route, Routes } from 'react-router-dom'
import './App.css'
import Lucas from './pages/Lucas'
import Fernanda from './pages/Fernanda'

function App () {

  return (
    // wrapper
    <div className='w-full h-full flex justify-center items-center'>
      <Routes>
        <Route path='/' element={<Lucas />} />
        <Route path='/lucas' element={<Lucas />} />
        <Route path='/fernanda' element={<Fernanda />} />
      </Routes>
    </div>
  )
}

export default App
