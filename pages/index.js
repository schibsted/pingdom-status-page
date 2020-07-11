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
          <div className="header-content">
            <div className="logo">
              <img className="image" src="/vg.svg" />
              <div className="status">Status</div>
            </div>
            <div className="link"><a href="https://vg.no">vg.no</a></div>
          </div>
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
          background: rgb(28, 28, 28);
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        .header {
          width: 100%;
          background: #EC2027;
          margin-bottom: 2rem;
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
          height: 2rem;
          margin: 1.5rem 1rem 1.5rem 0;
        }
        
        .header .logo .status {
          color: #fff;
          font-weight: bold;
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
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
