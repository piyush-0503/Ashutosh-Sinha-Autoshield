import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [showAdminMenu, setShowAdminMenu] =
    useState(false);

  const [popupOpen, setPopupOpen] =
    useState(false);

  const [popupTitle, setPopupTitle] =
    useState("");

  const [isMobile, setIsMobile] =
    useState(window.innerWidth <= 900);

  const [menuOpen, setMenuOpen] =
    useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  const logout = () => {
    localStorage.removeItem("token");

    alert("Logged Out Successfully");

    navigate("/admin/login");
  };

  const openPage = (title, path) => {
    setPopupTitle(title);

    setPopupOpen(true);

    setTimeout(() => {
      navigate(path);

      setPopupOpen(false);

      setMenuOpen(false);
    }, 500);
  };

  return (
    <>
      <nav
        style={{
          background:
            "linear-gradient(90deg,#0b0b0b,#180c14,#0b0b0b)",

          padding: "14px 20px",

          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "center",

          position: "sticky",

          top: 0,

          zIndex: 9999,

          borderBottom:
            "1px solid rgba(212,175,55,0.2)",

          boxShadow:
            "0 8px 30px rgba(0,0,0,0.5)",
        }}
      >
        {/* LOGO */}

        <h1
          style={{
            margin: 0,

            fontSize: isMobile
              ? "24px"
              : "34px",

            fontWeight: "900",

            background:
              "linear-gradient(90deg,#d4af37,#ff4d4d,#d4af37)",

            WebkitBackgroundClip:
              "text",

            WebkitTextFillColor:
              "transparent",

            cursor: "pointer",
          }}
          onClick={() =>
            openPage(
              "Welcome To PPF Studio",
              "/"
            )
          }
        >
          PPF Studio
        </h1>

        {isMobile && (
          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "28px",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}

        <div
          style={{
            display:
              !isMobile || menuOpen
                ? "flex"
                : "none",

            flexDirection:
              isMobile
                ? "column"
                : "row",

            position: isMobile
              ? "fixed"
              : "static",

            top: isMobile
              ? "70px"
              : "auto",

            right: isMobile
              ? "0"
              : "auto",

            width: isMobile
              ? "280px"
              : "auto",

            height: isMobile
              ? "calc(100vh - 70px)"
              : "auto",

            overflowY: "auto",

            background: isMobile
              ? "linear-gradient(180deg,#111,#1b0f18)"
              : "transparent",

            padding: isMobile
              ? "20px"
              : "0",

            gap: "12px",

            zIndex: 99999,
          }}
        >
                    <div
            style={menuBox}
            onClick={() =>
              openPage("Opening Home...", "/")
            }
          >
            🏠 Home
          </div>

          <div
            style={menuBox}
            onClick={() =>
              openPage(
                "Loading Premium Services...",
                "/services"
              )
            }
          >
            🚘 Services
          </div>

          <div
            style={menuBox}
            onClick={() =>
              openPage(
                "Opening Gallery...",
                "/gallery"
              )
            }
          >
            🖼 Gallery
          </div>

          <div
            style={menuBox}
            onClick={() =>
              openPage(
                "Loading PPF Material...",
                "/ppf-material"
              )
            }
          >
            🛡 PPF Material
          </div>

          <div
            style={menuBox}
            onClick={() =>
              openPage(
                "Redirecting To Order Page...",
                "/ppf-order"
              )
            }
          >
            🛒 Order PPF
          </div>

          <div
            style={menuBox}
            onClick={() =>
              openPage(
                "Opening Contact Center...",
                "/contact"
              )
            }
          >
            📞 Contact
          </div>

          {token ? (
            <div
              style={{
                position: "relative",
              }}
              onMouseEnter={() =>
                setShowAdminMenu(true)
              }
              onMouseLeave={() =>
                setShowAdminMenu(false)
              }
            >
              <button
                style={{
                  background:
                    "linear-gradient(135deg,#7b112d,#d4af37)",
                  color: "#fff",
                  border: "none",
                  padding: "12px 18px",
                  borderRadius: "12px",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                ⚙ Admin ▼
              </button>

              {showAdminMenu && (
                <div
                  style={{
                    position: "absolute",
                    top: "55px",
                    right: 0,
                    width: "260px",
                    background:
                      "linear-gradient(180deg,#111,#1b0f18)",
                    border:
                      "1px solid rgba(212,175,55,0.25)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow:
                      "0 15px 40px rgba(0,0,0,0.6)",
                    zIndex: 999999,
                  }}
                >
                  <Link
                    style={dropdownLink}
                    to="/admin/dashboard"
                  >
                    📊 Dashboard
                  </Link>

                  <Link
                    style={dropdownLink}
                    to="/admin/bookings"
                  >
                    📅 Active Bookings
                  </Link>

                  <Link
                    style={dropdownLink}
                    to="/admin/completed"
                  >
                    ✅ Completed Jobs
                  </Link>

                  <Link
                    style={dropdownLink}
                    to="/admin/revenue"
                  >
                    💰 Leads & Revenue
                  </Link>

                  <Link
                    style={dropdownLink}
                    to="/admin/products"
                  >
                    🛡 Products Manager
                  </Link>

                  <Link
                    style={dropdownLink}
                    to="/admin/gallery"
                  >
                    🖼 Gallery Manager
                  </Link>

                  <button
                    onClick={logout}
                    style={{
                      width: "100%",
                      border: "none",
                      padding: "15px",
                      background:
                        "linear-gradient(90deg,#7b112d,#ff3b3b)",
                      color: "#fff",
                      fontWeight: "700",
                      cursor: "pointer",
                    }}
                  >
                    🚪 Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/admin/login"
              style={{
                color: "#d4af37",
                textDecoration: "none",
                fontWeight: "700",
              }}
            >
              Admin Login
            </Link>
          )}
        </div>
      </nav>

      {popupOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform:
              "translate(-50%,-50%)",
            background:
              "linear-gradient(135deg,#1a1a1a,#3b0f20)",
            border:
              "2px solid #d4af37",
            borderRadius: "20px",
            padding: "30px 50px",
            zIndex: 999999,
            boxShadow:
              "0 0 50px rgba(212,175,55,0.45)",
            maxWidth: "90%",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              margin: 0,
              color: "#d4af37",
              fontSize: "20px",
            }}
          >
            {popupTitle}
          </h2>
        </div>
      )}
    </>
  );
}

const menuBox = {
  background:
    "linear-gradient(135deg,#171717,#2b1020)",
  color: "#fff",
  padding: "10px 15px",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "600",
  border:
    "1px solid rgba(212,175,55,0.15)",
  whiteSpace: "nowrap",
};

const dropdownLink = {
  display: "block",
  color: "#fff",
  textDecoration: "none",
  padding: "16px 20px",
  borderBottom:
    "1px solid rgba(255,255,255,0.05)",
  fontWeight: "600",
};