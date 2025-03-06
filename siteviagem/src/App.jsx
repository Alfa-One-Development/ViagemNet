import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LuandaPage from './pages/Luanda';
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/luanda" element={<LuandaPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
