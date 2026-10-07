import { Link } from "react-router-dom";

export default function Home() {
  const isMobile = window.innerWidth <= 768;

  return (
    <div
  style={{
    background:
      "radial-gradient(circle at top,#2b1020,#090909 65%)",
    color: "#fff",
    overflowX: "hidden",
    minHeight: "100vh",
    width: "100%",
  }}

    >
      {/* HERO SECTION */}

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          padding: isMobile
  ? "30px 20px"
  : "80px 8%",
        }}
      >
        {/* LEFT */}

        <div
          style={{
            flex: 1,
            minWidth: "280px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? "38px" : "75px",
              fontWeight: "900",
              lineHeight: "1.1",
              marginBottom: "20px",
              background:
                "linear-gradient(90deg,#D4AF37,#E6C068,#B76E79,#D4AF37)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            PREMIUM PPF
            <br />
            STUDIO
          </h1>

          <h2
            style={{
              color: "#fff",
              fontSize: isMobile ? "24px" : "30px",
              marginBottom: "20px",
            }}
          >
            Premium Paint Protection Film For Your Car
          </h2>

          <p
            style={{
              color: "#cccccc",
              fontSize: isMobile ? "16px" : "18px",
              lineHeight: "30px",
              maxWidth: "700px",
              margin: isMobile ? "0 auto" : "0",
            }}
          >
            Protect your car from scratches, stone chips, UV rays and
            daily damage with Premium PPF, Ceramic Coating,
            Wrapping and Detailing.
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "35px",
              flexWrap: "wrap",
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <Link to="/book" style={btnPrimary}>
              Book Appointment
            </Link>

            <Link to="/ppf-material" style={btnOutline}>
              PPF Material
            </Link>

            <a
              href="https://wa.me/917570908459"
              target="_blank"
              rel="noreferrer"
              style={btnWhatsapp}
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}

        <div
          style={{
            flex: 1,
            minWidth: "280px",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80"
            alt="PPF"
            style={{
              width: "100%",
              maxWidth: isMobile ? "350px" : "650px",
              borderRadius: "30px",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.6)",
            }}
          />
        </div>
      </section>

      {/* STATS */}

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "25px",
          flexWrap: "wrap",
          padding: "0 8% 80px",
        }}
      >
        <StatCard number="5000+" title="Cars Protected" />
        <StatCard number="99%" title="Customer Satisfaction" />
        <StatCard number="6+" title="States Covered" />
      </section>

      {/* LOCATIONS */}

      <section
        style={{
          padding: "80px 8%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#D4AF37",
            fontSize: isMobile ? "32px" : "45px",
          }}
        >
          Service Locations
        </h2>

        <p
          style={{
            color: "#ccc",
            marginTop: "20px",
            fontSize: isMobile ? "18px" : "22px",
          }}
        >
          Chandigarh • Punjab • Haryana • Delhi • Jammu • Kashmir
        </p>
      </section>

      <footer
        style={{
          textAlign: "center",
          padding: "30px",
          borderTop:
            "1px solid rgba(212,175,55,0.2)",
          color: "#999",
        }}
      >
        © 2026 PPF Studio | All Rights Reserved
      </footer>
    </div>
  );
}

function StatCard({ number, title }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg,#111,#1b1017)",
        border:
          "1px solid rgba(212,175,55,0.25)",
        borderRadius: "20px",
        padding: "30px",
        minWidth: "220px",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "#D4AF37" }}>{number}</h1>
      <p>{title}</p>
    </div>
  );
}

const btnPrimary = {
  background:
    "linear-gradient(90deg,#7b112d,#D4AF37)",
  color: "#fff",
  padding: "15px 28px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "700",
};

const btnOutline = {
  border: "2px solid #D4AF37",
  color: "#D4AF37",
  padding: "15px 28px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "700",
};

const btnWhatsapp = {
  background:
    "linear-gradient(90deg,#0f9d58,#25D366)",
  color: "#fff",
  padding: "15px 28px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "700",
};