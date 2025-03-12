import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BalnearioPage from './pages/Balneario';
import LisboaPage from './pages/Lisboa';
import NovaDeliPage from './pages/NovaDeli';
import IndianapolisPage from './pages/Indianapolis';
import LuandaPage from './pages/Luanda';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/balneario" element={<BalnearioPage />} />
          <Route path="/lisboa" element={<LisboaPage />} />
          <Route path="/novadeli" element={<NovaDeliPage />} />
          <Route path="/indianapolis" element={<IndianapolisPage />} />
          <Route path="/luanda" element={<LuandaPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
