import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Paint Protection Film",
      price: "₹45,000 Onwards",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000",
      desc: "Premium self-healing protection against scratches and stone chips.",
    },
    {
      title: "Ceramic Coating",
      price: "₹12,000 Onwards",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1000",
      desc: "Long lasting gloss and hydrophobic protection.",
    },
    {
      title: "Car Wrapping",
      price: "₹25,000 Onwards",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1000",
      desc: "Premium color customization and styling.",
    },
    {
      title: "Interior Detailing",
      price: "₹3,500 Onwards",
      image:
        "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=1000",
      desc: "Deep cleaning and restoration of interior surfaces.",
    },
    {
      title: "Exterior Detailing",
      price: "₹4,500 Onwards",
      image:
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1000",
      desc: "Showroom finish polishing and protection.",
    },
    {
      title: "Bike PPF",
      price: "₹8,000 Onwards",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1000",
      desc: "Premium protection film for bikes.",
    },
    {
      title: "Graphene Coating",
      price: "₹15,000 Onwards",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000",
      desc: "Advanced coating technology with extra durability.",
    },
    {
      title: "PPF Material Sales",
      price: "₹1200 / Feet",
      image:
        "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1000",
      desc: "Buy XPEL, Garware, Llumar & STEK PPF rolls.",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#2b1020,#090909 65%)",
        padding: "80px 8%",
        color: "#fff",
      }}
    >
      {/* Heading */}

      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1
          style={{
            fontSize: "clamp(40px,6vw,70px)",
    fontWeight: "900",
    lineHeight: "1.2",
    paddingBottom: "20px",
    marginBottom: "10px",
    overflow: "visible",
            background:
              "linear-gradient(90deg,#D4AF37,#F5D98B,#B76E79)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Premium Services
        </h1>

        <p
          style={{
            color: "#ccc",
            fontSize: "20px",
          }}
        >
          Car & Bike Protection Solutions
        </p>
      </div>

      {/* Services Grid */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              background: "#111",
              borderRadius: "25px",
              overflow: "hidden",
              border: "1px solid rgba(212,175,55,.25)",
              boxShadow:
                "0 10px 30px rgba(0,0,0,.4)",
            }}
          >
            <img
              src={service.image}
              alt={service.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "25px" }}>
              <h3
                style={{
                  color: "#D4AF37",
                  marginBottom: "10px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  color: "#25D366",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                {service.price}
              </p>

              <p
                style={{
                  color: "#ccc",
                  lineHeight: "28px",
                }}
              >
                {service.desc}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <button
                  style={{
                    flex: 1,
                    background:
                      "linear-gradient(90deg,#7b112d,#D4AF37)",
                    color: "#fff",
                    border: "none",
                    padding: "12px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontWeight: "700",
                  }}
                >
                  View Details
                </button>

                <Link
                  to="/book"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    background:
                      "linear-gradient(90deg,#128C7E,#25D366)",
                    color: "#fff",
                    padding: "12px",
                    borderRadius: "10px",
                    textDecoration: "none",
                    fontWeight: "700",
                  }}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PPF Material Section */}

      <div
        style={{
          marginTop: "80px",
          textAlign: "center",
          background: "#111",
          padding: "50px",
          borderRadius: "25px",
          border: "1px solid rgba(212,175,55,.25)",
        }}
      >
        <h2
          style={{
            color: "#D4AF37",
            fontSize: "40px",
          }}
        >
          Need PPF Material?
        </h2>

        <p
          style={{
            color: "#ccc",
            maxWidth: "700px",
            margin: "20px auto",
          }}
        >
          XPEL • Garware • Llumar • STEK Available
        </p>

        <Link
          to="/ppf-order"
          style={{
            display: "inline-block",
            background:
              "linear-gradient(90deg,#7b112d,#D4AF37)",
            color: "#fff",
            padding: "15px 30px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "700",
          }}
        >
          Buy PPF Material
        </Link>
      </div>
    </div>
  );
}