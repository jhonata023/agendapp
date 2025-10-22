import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  // Estado para controlar a abertura/fechamento do menu Hamburger
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return(
    <header>
      {/* navbar-expand-md garante que o menu colapse abaixo do tamanho 'md' */}
      <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm">
        <div className="container-fluid container-lg d-flex justify-content-between align-items-center p-3">
          <h3 className="navbar-brand text-primary fw-bold mb-0">
            <Link to={'/'} className="nav-link">AgendaApp</Link>
          </h3>
          
          {/* Botão Hamburger (Toggler) - Visível em telas pequenas */}
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="navbarNav" 
            aria-expanded={isMenuOpen} 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Conteúdo Colapsável: Links de navegação e botão Entrar */}
          <div 
            className={`collapse navbar-collapse justify-content-end text-center ${isMenuOpen ? 'show' : ''}`} 
            id="navbarNav"
          >
            {/* Lista de Navegação */}
            <ul className="navbar-nav me-auto me-md-0 mb-2 mb-md-0">
              <li className="nav-item"><Link to={'/home'} className="nav-link text-dark">Home</Link></li>
              <li className="nav-item"><Link to={'/empresas'} className="nav-link text-dark">Empresas</Link></li>
              <li className="nav-item"><Link to={'/agendamentos'} className="nav-link text-dark">Meus Agendamentos</Link></li>
              <li className="nav-item"><Link to={'/relatorio'} className="nav-link text-dark">Relatórios</Link></li>
            </ul>

            {/* Botão Entrar - Movido para dentro do colapsável para alinhamento em mobile */}
            <Link to={'/auth/login'}><button className="btn btn-primary mt-2 mt-md-0">Entrar</button></Link>
          </div>
        </div>
      </nav>
    </header>
  )
}