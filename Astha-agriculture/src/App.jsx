import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Form from './pages/Form'
import Login from './pages/Login'
import Admin from './pages/Admin'

function App() {

  return (

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/form" element={<Form />} />

      <Route path="/login" element={<Login />} />

      <Route path="/admin" element={<Admin />} />

    </Routes>
  )
}

export default App