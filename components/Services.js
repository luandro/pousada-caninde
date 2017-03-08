const list = [
  {
    image: '/static/area-de-convivencia.png',
    title: 'Área de Convivência'
  },
  {
    image: '/static/cafe-da-manha.png',
    title: 'Café da manhã'
  },
  {
    image: '/static/dicas-de-passeios.png',
    title: 'Dicas de passeios'
  },
  {
    image: '/static/fogueira.png',
    title: 'Fogueira'
  },
  {
    image: '/static/guia-local.png',
    title: 'Guia local'
  },
  {
    image: '/static/rede-wifi.png',
    title: 'Rede WIFI'
  },
]

export default () => (
  <div className="wrapper" id="services">
    <div className="container">
      <h2>SERVIÇOS</h2>
      <div className="items ">
        {list.map((item, key) => (
          <div key={key} style={{backgroundImage: `url(${item.image})` }}><div className="legend">{item.title}</div></div>
        ))}
      </div>
      <br/>
      <br/>
    </div>
    <style jsx>{` 
      .wrapper {
        text-align: center;
        font-size: 20px;
        font-weight: 200;
        line-height: 1.5;
        display: flex;
        align-items: center;
      } 
      .items {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: center; 
      }
      .items > div {
        height: 260px;
        width: 32%;
        background-size: cover;
        margin-bottom: 15px;
      }
      .legend {
        width: 100%;
        padding: 4px 0;
        background: url('/static/fundo-servicos.png');
        color: #fff;
        margin-top: 222px;
      }
      @media(max-width: 768px) {
        .items > div {
          width: 48%;
        }
      }
      @media (max-width: 470px) {
        .items > div {
          width: 98%;
        }
      }

    `}</style>
  </div>
) 