import Head from 'next/head';

import Sites from '../components/Sites';

export default function Home() {
  return (
    <div> 
      <Head>
        <title>VG Status</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header">
        <div className="container">
          <img className="logo" src="/vg.svg" />
        </div>
      </header>

      <main className="container">
        <Sites />
      </main>

      <footer>
      </footer>

      <style jsx>{`
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background: rgb(242, 243, 243);
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        .header {
          width: 100%;
          background: #EC2027;
          margin-bottom: 2rem;
        }

        .header .logo {
          height: 2rem;
          margin: 1rem 0;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
