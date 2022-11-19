import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="MPMeta" />
                <h1>MPMeta</h1>
                <p>
                Desenvolvido por
                <a href="https://www.instagram.com/eliascalado">@eliascalado</a>
                </p>
            </div>
        </header>
      
        )
  }
  
  export default Header