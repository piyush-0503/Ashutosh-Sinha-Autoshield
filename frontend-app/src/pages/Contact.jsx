export default function Contact() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#2b1020,#090909 65%)",
        color: "#fff",
        padding: "80px 8%",
      }}
    >
      {/* HERO */}

      <div
  style={{
    textAlign: "center",
    marginBottom: "80px",
    paddingTop: "120px",
    overflow: "visible",
  }}
>
  <h1
    style={{
      fontSize: "80px",
      fontWeight: "900",
      lineHeight: "100px",
      margin: "0",
      padding: "0",
      background:
        "linear-gradient(90deg,#D4AF37,#E6C068,#B76E79,#D4AF37)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    Contact Us
  </h1>

  <p
    style={{
      color: "#d0d0d0",
      fontSize: "22px",
      maxWidth: "900px",
      margin: "30px auto 0",
      lineHeight: "35px",
    }}
  >
    Premium PPF, Ceramic Coating, Wrapping &
    Detailing Solutions Across Chandigarh,
    Punjab, Haryana, Delhi, Jammu & Kashmir.
  </p>
</div>

      {/* CONTACT CARDS */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
        }}
      >
        {/* GOOGLE */}

        <div style={cardStyle}>
          <h2 style={titleStyle}>
            ⭐ Google Reviews
          </h2>

          <p style={textStyle}>
            See what our customers say about our
            premium PPF and detailing services.
          </p>

          <a
            href="#"
            style={goldBtn}
          >
            View Reviews
          </a>
        </div>

        {/* INSTAGRAM */}

        <div style={cardStyle}>
          <h2 style={titleStyle}>
            📸 Instagram
          </h2>

          <p style={textStyle}>
            Check our latest PPF, Ceramic Coating,
            Wrapping and Detailing projects.
          </p>

          <a
            href="https://www.instagram.com/carppf_detailing"
            target="_blank"
            rel="noreferrer"
            style={instagramBtn}
          >
            Follow Instagram
          </a>
        </div>

        {/* WHATSAPP */}

        <div style={cardStyle}>
          <h2
            style={{
              color: "#25D366",
              marginBottom: "20px",
            }}
          >
            💬 WhatsApp
          </h2>

          <p style={textStyle}>
            Instant quotation, support and booking
            assistance directly on WhatsApp.
          </p>

          <a
            href="https://wa.me/917570908459"
            target="_blank"
            rel="noreferrer"
            style={greenBtn}
          >
            Chat Now
          </a>
        </div>

        {/* CALL */}

        <div style={cardStyle}>
          <h2 style={titleStyle}>
            📞 Call Us
          </h2>

          <p style={textStyle}>
            Talk directly with our PPF experts for
            pricing and consultation.
          </p>

          <a
            href="tel:+917570908459"
            style={goldBtn}
          >
            Call Now
          </a>
        </div>
      </div>

      {/* LOCATION */}

      <div
        style={{
          marginTop: "70px",
          background:
            "linear-gradient(135deg,#111,#1b1017)",
          border:
            "1px solid rgba(212,175,55,0.25)",
          borderRadius: "25px",
          padding: "50px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#D4AF37",
            marginBottom: "20px",
          }}
        >
          📍 Service Locations
        </h2>

        <p
          style={{
            color: "#ccc",
            fontSize: "18px",
            lineHeight: "35px",
          }}
        >
          Chandigarh • Punjab • Haryana • Delhi •
          Jammu • Kashmir
        </p>
      </div>

      {/* CONTACT INFO */}

      <div
        style={{
          marginTop: "50px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#D4AF37",
          }}
        >
          +91 7570908459
        </h2>

        <p
          style={{
            color: "#999",
          }}
        >
          Available For Booking & Support
        </p>
      </div>

      {/* FOOTER */}

      <div
        style={{
          textAlign: "center",
          marginTop: "80px",
          color: "#888",
          borderTop:
            "1px solid rgba(212,175,55,0.2)",
          paddingTop: "30px",
        }}
      >
        © 2026 PPF Studio | All Rights Reserved
      </div>
    </div>
  );
}

/* COMPONENTS */

function StatCard({ number, text }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg,#111,#1b1017)",
        border:
          "1px solid rgba(212,175,55,0.25)",
        borderRadius: "20px",
        padding: "25px 40px",
        textAlign: "center",
        minWidth: "220px",
      }}
    >
      <h2
        style={{
          color: "#D4AF37",
          fontSize: "36px",
          marginBottom: "10px",
        }}
      >
        {number}
      </h2>

      <p
        style={{
          color: "#ccc",
        }}
      >
        {text}
      </p>
    </div>
  );
}

/* STYLES */

const cardStyle = {
  background:
    "linear-gradient(135deg,#111,#1b1017)",
  border:
    "1px solid rgba(212,175,55,0.25)",
  borderRadius: "25px",
  padding: "40px",
  textAlign: "center",
};

const titleStyle = {
  color: "#D4AF37",
  marginBottom: "20px",
};

const textStyle = {
  color: "#ccc",
  lineHeight: "30px",
  marginBottom: "25px",
};

const goldBtn = {
  display: "inline-block",
  background:
    "linear-gradient(90deg,#7b112d,#D4AF37)",
  color: "#fff",
  padding: "14px 25px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "700",
};

const greenBtn = {
  display: "inline-block",
  background:
    "linear-gradient(90deg,#128C7E,#25D366)",
  color: "#fff",
  padding: "14px 25px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "700",
};

const instagramBtn = {
  display: "inline-block",
  background:
    "linear-gradient(90deg,#833AB4,#FD1D1D,#FCAF45)",
  color: "#fff",
  padding: "14px 25px",
  borderRadius: "12px",
  textDecoration: "none",
  fontWeight: "700",
};