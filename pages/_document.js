// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage()
    const styles = flush()
    return { html, head, styles }
  }

  render () {
    return (
     <html>
       <Head>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link href="https://fonts.googleapis.com/css?family=Mouse+Memoirs" rel="stylesheet" />
         <link href="/static/effects.css" rel="stylesheet" />
         <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
         <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
         <link rel="shortcut icon" href="/static/favicon.ico" />
         <meta name="theme-color" content={'#005FB6'} />
         <link rel="manifest" href="static/manifest.json" />
         <script type="text/javascript" src="https://maps.google.com/maps/api/js?key=AIzaSyBsr3RFIuUoYkvrarEThfbq_beHu97AgXI&sensor=false"></script>
         <style>{`
          body, html {
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
            margin: 0; 
          }
          h2 {
            font-size: 60px;
            font-family: Mouse Memoirs, sans-serif;
            color: #005FB6;
            font-weight: 400;
            margin: 30px;
          }
          .container {
            margin: auto;
            width: 1170px;
          }
          h3 {
            font-family: Mouse Memoirs, sans-serif;
            color: #005FB6;
            font-weight: 400;
            font-size: 38px;
          }
          button {
            border: none;
            shadow-box: none;
          }
          a {
            text-decoration: none;
            color: #000;
            cursor: pointer;
          }
          .link {
            color: #fff;
            font-family: Mouse Memoirs, sans-serif;
            font-size: 30px;
            font-weight: 400;
            color: #fff;
          }
          .link-small {
            color: #000;
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
          }
          .slick-slide {
            font-weight: 300;
          }
          @media(max-width: 1200px) {
            .container {
              width: 992px;
              margin: auto;
            }
          }
          @media(max-width: 1024px) {
            .container {
              width: 100%;
              margin: auto;
            }
          }
          @media(max-width: 768px) {
            .pic img {
              width: 130px;
              margin-top: -34px;
            }
          }
          `}</style>
       </Head>
       <body className="custom_class">
         {this.props.customValue}
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}