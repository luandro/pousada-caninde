import FaFacebook from 'react-icons/lib/fa/facebook'
import FaInstagram from 'react-icons/lib/fa/instagram'
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o'

export default () => (
  <div className="wrapper">
    <div className="container">
      <div className="pic"><img src="/static/logo.png" /></div>
      <div className="items">
        <a>HOME</a>
        <a>A POUSADA</a>
        <a>SERVIÇOS</a>
        <a>FOTOS</a>
        <a>CONTATOS</a>
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
        width: 5%;
        background: #fff;
        width: 162px;
        padding: 15px;
        margin-top: 93px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      }
      .items {
        width: 80%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center; 
      }
      .items a {
        font-size: 30px;
        font-family: 'Mouse Memoirs', sans-serif;
        font-weight: 400;
        color: #fff;
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