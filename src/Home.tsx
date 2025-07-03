import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className="home-container">
      <Link to="/conteudo1" className="home-section">TEÓRIA</Link>
      <Link to="/conteudo2" className="home-section">SIMULAÇÕES</Link>
      <Link to="/conteudo3" className="home-section">EXERCÍCIOS</Link>
    </div>
  )
}
