export default function Header() {
  return (
    <>
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

      <style jsx>{`

        .header {
          width: 100%;
          background: #EC2027;
          margin-bottom: 1rem;
          padding-top: 0.3rem;
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

      `}</style>
    </>
  )
}
