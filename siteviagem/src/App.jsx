import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/indianapolis" element={<Indianapolis />} />
      <Route path="/novadeli" element={<Novadeli />} />
      <Route path="/balneario" element={<Balneario />} />
      <Route path="/lisboa" element={<Lisboa />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
