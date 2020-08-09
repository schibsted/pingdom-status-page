import Head from 'next/head';

import Header from '../components/Header';
import Sites from '../components/Sites';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="wrap">
      <Head>
        <title>Schibsted Status</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"/>
      </Head>

      <Header />

      <main className="container">
        <Sites />
        <Footer />
      </main>

      <style jsx>{`

        .wrap {
          display: grid;
          grid-template-rows: 10% 80% 10%;
          min-height: 100%;
        }

      `}</style>

      <style jsx global>{`

        html,
        body {
          padding: 0;
          margin: 0;
          background: rgb(28, 28, 28);
          color: #fff;
          font-family: Roboto, Helvetica, Arial;
          height: 100%;
        }

        #__next {
          display: contents;
        }

        * {
          box-sizing: border-box;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 1rem;
          min-height: 100%;
          width: 100%;
        }

      `}</style>
    </div>
  );
}
