import FaFacebook from 'react-icons/lib/fa/facebook'
import FaInstagram from 'react-icons/lib/fa/instagram'
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o'
import { Link } from 'react-scroll'

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

export default () => (
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
        <div className="socialItem"><FaFacebook /></div>
        <div className="socialItem"><FaInstagram /></div>
        <div className="socialItem"><FaEnvelopeO /></div>
      </div>
    </div>
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
      .socialItem {
        background: #fff;
        color: rgba(0, 85, 185, 0.8);
        text-align: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        padding: 5px;
      }
    `}</style>
  </div>
)