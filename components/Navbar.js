export default () => (
  <div className="wrapper">
    <div className="container">
      <div className="pic">FOTO</div>
      <div className="items">
        <span>item 1</span>
        <span>item 1</span>
        <span>item 1</span>
        <span>item 1</span>
        <span>item 1</span>
      </div>
      <div className="social">
        <div className="socialItem">a</div>
        <div className="socialItem">b</div>
        <div className="socialItem">v</div>
      </div>
    </div>
    <style jsx>{`
      .wrapper {
        color: #fff;
        text-transform: uppercase;
        height: 50px;
        top: 0;
        width: 100%;
        margin: 0 auto;
        background: rgba(0, 85, 185, 0.8);
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
      }
      .items {
        width: 85%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center; 
      }
      .social {
        width: 10%;
      }
      @media(min-width: 1200px) {
        .container {
          width: 1170px;
        }
      }
    `}</style>
  </div>
)