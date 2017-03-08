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
         <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
         <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
         <style>{`
          body, html {
            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
            margin: 0; 
          }
          h2 {
            font-size: 60px;
            font-family: 'Mouse Memoirs', sans-serif;
            color: #005FB6;
            font-weight: 400;
            margin: 30px;
          }
          h3 {
            font-family: 'Mouse Memoirs', sans-serif;
            color: #005FB6;
            font-weight: 400;
          }
          button {
            border: none;
            shadow-box: none;
          }
          @media(min-width: 1200px) {
            .container {
              width: 1170px;
              margin: auto;
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