import FaFacebook from 'react-icons/lib/fa/facebook'
import FaInstagram from 'react-icons/lib/fa/instagram'
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o'
import FaBars from 'react-icons/lib/fa/bars'
import { Link } from 'react-scroll'
import ClickOutside from 'react-click-outside'

const list = [
  {
    title: 'Home',
    id: 'home',
  },
  {
    title: 'A Pousada',
    id: 'about',
  },
  {
    title: 'Serviços',
    id: 'services',
  },
  {
    title: 'Fotos',
    id: 'pictures',
  },
  {
    title: 'Contatos',
    id: 'contact',
  },
]

export default ({ open, toggle }) => (
  <div className="wrapper">
    <div className="container">
      <div className="pic"><img src="/static/logo.png" /></div>
      <div className="items">
        {list.map((item, key) => <Link
          key={key}
          to={item.id}
          activeClass="active"
          spy
          smooth
          offset={-50}
          duration={800}
          className="link"
        >
          {item.title}
        </Link>
        )}
      </div>
      <div className="social">
        <div className="socialItem"><a href="https://www.facebook.com/pousadacanindesaojorge/" target="_blank"><FaFacebook /></a></div>
        <div className="socialItem"><a href="https://www.instagram.com/pousadacaninde/" target="_blank"><FaInstagram /></a></div>
        <div className="socialItem"><a href="mailto:pousadacaninde@gmail.com"><FaEnvelopeO /></a></div>
      </div>
      <div className="mobileMenuBtn" onClick={toggle}><FaBars size="28" /></div>
    </div>
    <ClickOutside onClickOutside={() => open && toggle()}>
      <div className={open ? "popup open" : "popup closed"}>
          {list.map((item, key) => <Link
            key={key}
            to={item.id}
            activeClass="active"
            spy
            smooth
            offset={-50}
            duration={800}
            className="link-small"
          >
            {item.title}
          </Link>
          )}
      </div>
    </ClickOutside>
    <style jsx>{`
      .wrapper {
        color: #fff;
        text-transform: uppercase;
        height: 60px;
        top: 0;
        width: 100%;
        margin: 0 auto;
        background: url(/static/fundo-menu.png);
        display: flex;
        align-items: center;
      }
      .container, .social {
        margin: 0 auto;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;  
      }
      .pic {
        margin-top: 86px;
      }
      .items {
        width: 80%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center; 
      }
      .social {
        width: 10%;
      }
      .socialItem a {
        display: block;
        background: #fff;
        color: rgba(0, 85, 185, 0.8);
        text-align: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        padding: 5px;
      }
      .mobileMenuBtn {
        display: none;
        margin-right: 23px;
      }
      .popup {
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        background: white;
        height: 200px;
        position: absolute;
        top: 35px;
        right: 35px;
        padding: 20px;
        transition: all ease-in-out 0.2s;
      }
      .popup.closed {
        transform: translateY(-300px);
      }
      .popup.open {
        transform: translateY(0px);
      }
      @media(max-width: 1200px) {
        .items {
          width: 70%;
        }
      }
      @media(max-width: 768px) {
        .mobileMenuBtn {
          display: block;
        }
        .social, .items {
          display: none;
        }
      }
    `}</style>
  </div>
)