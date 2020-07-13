import Head from 'next/head';

import Sites from '../components/Sites';

export default function Home() {
  return (
    <div className="wrap">
      <Head>
        <title>VG Status</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"/>
      </Head>

      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img width="132" height="32" className="image" src="/vg.svg" />
              <div className="status">Status</div>
            </div>
            <div className="link"><a href="https://vg.no">vg.no</a></div>
          </div>
        </div>
      </header>

      <main className="container">
        <Sites />
      </main>

      <footer className="footer">
        Made with ❤️  by VG Tech
      </footer>

      <style jsx>{`
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

        .wrap {
          display: grid;
          grid-template-rows: 10% 80% 10%;
          min-height: 100%;
        }

        .header {
          width: 100%;
          background: #EC2027;
          margin-bottom: 2rem;
          padding: 0.5rem 0 0.2rem 0;
          border-bottom: 0.3rem solid rgba(0, 0, 0, 0.15);
        }

        .header-content {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
        }

        .header .logo {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          align-items: center;
        }

        .header .logo .image {
          max-width: 100%;
          height: 2rem;
          margin: 1.2rem 1rem 1.2rem 0;
        }

        .header .logo .status {
          color: #fff;
          font-weight: bold;
          text-transform: uppercase;
        }

        .header .link a {
          border: 2px solid #fff;
          border-radius: 5px;
          padding: 0.5rem 0.5rem 0.6rem 0.5rem;
          color: #fff;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.1s;
        }

        .header .link a:hover {
          background: #fff;
          color: #EC2027;
        }

        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1rem;
          min-height: 100%;
          width: 100%;
        }

        .footer {
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
