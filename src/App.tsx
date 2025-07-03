import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Conteudo1 from './pages/Conteudo1'
import Conteudo2 from './pages/Conteudo2'
import Conteudo3 from './pages/Conteudo3'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conteudo1" element={<Conteudo1 />} />
      <Route path="/conteudo2" element={<Conteudo2 />} />
      <Route path="/conteudo3" element={<Conteudo3 />} />
    </Routes>
  )
}
