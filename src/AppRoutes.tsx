import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Contacts } from './Pages/Contacts/Contacts'
import { Home } from './Pages/Home/Home'
import { Registration } from './Pages/Registration/Registration'

export function AppRoutes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Home" element={<Home />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Registration" element={<Registration />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
