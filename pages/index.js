import Head from 'next/head';

import Sites from '../components/Sites';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>VG Status</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/vg.svg" />

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
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
