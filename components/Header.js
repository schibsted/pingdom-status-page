export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img width="132" height="32" className="image" src="https://schibsted.com/wp-content/themes/scom/assets/img/Schibsted-logo-medium.svg" />
              <div className="status">Status</div>
            </div>
            <div className="link"><a href="https://schibsted.com">schibsted.com</a></div>
          </div>
        </div>
      </header>

      <style jsx>{`

        .header {
          width: 100%;
          background: #F6F1EE;
          padding-top: 0.3rem;
          border-bottom: 0.3rem solid rgba(0, 0, 0, 0.15);
          color: #000A12;
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
          font-weight: bold;
          position: relative;
          top: 2px;
        }

        .header .link a {
          border: 2px solid #000A12;
          border-radius: 5px;
          padding: 0.7rem;
          color: #000A12;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.1s;
        }

        .header .link a:hover {
          background: #000A12;
          color: #fff;
        }

      `}</style>
    </>
  )
}
