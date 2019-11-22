import Head from 'next/head'
export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link href="https://fonts.googleapis.com/css?family=Alata&display=swap" rel="stylesheet"></link>
    </Head>
    <style jsx global>{`
      body { 
        font-family: 'Alata', sans-serif;
        font-size: 18px;
        margin: 0 auto;
      }

      @keyframes fadein {
        from {opacity: 0;}
        to {opacity: 1;}
      }

      fadein {
        animation-name: fadein;
        animation-duration: 1s;
      }
    `}</style>
  </div>
)