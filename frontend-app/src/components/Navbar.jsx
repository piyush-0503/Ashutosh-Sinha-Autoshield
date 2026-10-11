
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();

  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [menuOpen, setMenuOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1150);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1150);
      if (window.innerWidth > 1150) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const syncToken = () => setToken(localStorage.getItem("token"));

    window.addEventListener("storage", syncToken);
    window.addEventListener("focus", syncToken);

    return () => {
      window.removeEventListener("storage", syncToken);
      window.removeEventListener("focus", syncToken);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setAdminOpen(false);
  };

  const goHome = () => {
    closeMenu();
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    closeMenu();
    navigate("/admin/login");
  };

  const links = [
    { label: "⌂ Home", path: "/" },
    { label: "🚘 Services", path: "/services" },
    { label: "▧ Gallery", path: "/gallery" },
    { label: "🛡 PPF Material", path: "/ppf-material" },
    { label: "🛒 Order PPF", path: "/ppf-order" },
    { label: "☎ Contact", path: "/contact" },
  ];

  const adminLinks = [
    { label: "📊 Dashboard", path: "/admin/dashboard" },
    { label: "📅 Active Bookings", path: "/admin/bookings" },
    { label: "✅ Completed Jobs", path: "/admin/completed" },
    
    { label: "🛡 Products Manager", path: "/admin/products" },
    { label: "🖼 Gallery Manager", path: "/admin/gallery" },
  ];

  return (
    <>
      <style>{`
        .ppfs-navbar,
        .ppfs-navbar * {
          box-sizing: border-box;
        }

        .ppfs-navbar {
          width: 100%;
          max-width: 100%;
          position: sticky;
          top: 0;
          z-index: 9999;
          background: linear-gradient(90deg,#080808,#180c14,#080808);
          border-bottom: 1px solid rgba(212,175,55,.3);
          box-shadow: 0 6px 24px rgba(0,0,0,.4);
        }

        .ppfs-navbar-inner {
          width: 100%;
          max-width: 100%;
          min-height: 76px;
          margin: 0;
          padding: 10px clamp(12px,2vw,28px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          position: relative;
        }

        .ppfs-logo {
          flex-shrink: 0;
          padding: 0;
          border: none;
          background: linear-gradient(90deg,#d4af37,#ff604d);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: clamp(23px,2vw,31px);
          font-weight: 900;
          line-height: 1.05;
          cursor: pointer;
          white-space: nowrap;
        }

        .ppfs-links {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          flex: 1;
          min-width: 0;
          gap: 7px;
        }

        .ppfs-link {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 10px 11px;
          border: 1px solid rgba(212,175,55,.16);
          border-radius: 10px;
          background: linear-gradient(135deg,#171217,#2b1020);
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          transition: .2s ease;
        }

        .ppfs-link:hover {
          border-color: rgba(212,175,55,.55);
          background: #34202b;
        }

        .ppfs-admin {
          position: relative;
          flex-shrink: 0;
        }

        .ppfs-admin-button {
          background: linear-gradient(135deg,#7b112d,#b99326);
          border: none;
        }

        .ppfs-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          z-index: 10001;
          width: 250px;
          max-width: calc(100vw - 24px);
          overflow: hidden;
          border: 1px solid rgba(212,175,55,.3);
          border-radius: 12px;
          background: linear-gradient(180deg,#111,#21101b);
          box-shadow: 0 12px 28px rgba(0,0,0,.5);
        }

        .ppfs-dropdown a,
        .ppfs-dropdown button {
          display: block;
          width: 100%;
          padding: 13px 15px;
          border: 0;
          border-bottom: 1px solid rgba(255,255,255,.08);
          background: transparent;
          color: #fff;
          text-decoration: none;
          text-align: left;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }

        .ppfs-dropdown a:hover {
          background: rgba(212,175,55,.12);
        }

        .ppfs-dropdown .ppfs-logout {
          background: #7b112d;
        }

        .ppfs-toggle {
          display: none;
          flex-shrink: 0;
          padding: 6px 12px;
          border: 1px solid rgba(212,175,55,.4);
          border-radius: 9px;
          background: #21121c;
          color: #fff;
          font-size: 24px;
          cursor: pointer;
        }

        @media (max-width: 1150px) {
          .ppfs-toggle {
            display: block;
          }

          .ppfs-links {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            width: 100%;
            max-height: calc(100vh - 76px);
            padding: 14px;
            overflow-y: auto;
            overflow-x: hidden;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            background: linear-gradient(180deg,#101010,#21101b);
            border-bottom: 1px solid rgba(212,175,55,.3);
          }

          .ppfs-links.ppfs-open {
            display: flex;
          }

          .ppfs-link {
            width: 100%;
            justify-content: flex-start;
            min-height: 44px;
            padding: 12px 14px;
            font-size: 15px;
          }

          .ppfs-admin {
            width: 100%;
          }

          .ppfs-admin-button {
            justify-content: center;
          }

          .ppfs-dropdown {
            position: static;
            width: 100%;
            max-width: 100%;
            margin-top: 8px;
          }
        }

        @media (max-width: 380px) {
          .ppfs-logo {
            font-size: 22px;
          }

          .ppfs-toggle {
            font-size: 21px;
          }
        }
      `}</style>

      <header className="ppfs-navbar">
        <div className="ppfs-navbar-inner">
          <button
            type="button"
            className="ppfs-logo"
            onClick={goHome}
            aria-label="PPF Studio Home"
          >
            PPF
            <br />
            Studio
          </button>

          <button
            type="button"
            className="ppfs-toggle"
            onClick={() => {
              setMenuOpen((open) => !open);
              setAdminOpen(false);
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <nav
            className={`ppfs-links ${menuOpen ? "ppfs-open" : ""}`}
            aria-label="Main navigation"
          >
            {links.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="ppfs-link"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}

            {token ? (
              <div className="ppfs-admin">
                <button
                  type="button"
                  className="ppfs-link ppfs-admin-button"
                  onClick={() => setAdminOpen((open) => !open)}
                  aria-expanded={adminOpen}
                >
                  ⚙ Admin {adminOpen ? "▲" : "▼"}
                </button>

                {adminOpen && (
                  <div className="ppfs-dropdown">
                    {adminLinks.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    ))}

                    <button
                      type="button"
                      className="ppfs-logout"
                      onClick={logout}
                    >
                      🚪 Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/admin/login"
                className="ppfs-link"
                style={{ color: "#e6c568" }}
                onClick={closeMenu}
              >
                Admin Login
              </Link>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
