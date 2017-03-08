const list = [
  {
    image: '/static/foto1.png'
  },
  {
    image: '/static/foto2.png'
  },
  {
    image: '/static/foto3.png'
  },
  {
    image: '/static/foto4.png'
  },
  {
    image: '/static/foto5.png'
  },
  {
    image: '/static/foto6.png'
  },
]

export default () => (
  <div className="wrapper" id="pictures">
    <div className="container">
      <h2>GALERIA DE FOTOS</h2>
      <div className="items ">
        {list.map((item, key) => (
          <div key={key} style={{backgroundImage: `url(${item.image})` }}></div>
        ))}
      </div>
    </div>
    <style jsx>{` 
      .wrapper {
        text-align: center;
        font-size: 20px;
        font-weight: 200;
        line-height: 1.5;
        display: flex;
        align-items: center;
        background: #E9E9E9;
        padding: 20px 0 50px;
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