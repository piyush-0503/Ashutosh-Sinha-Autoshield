import { Link } from "react-router-dom";
export default function PpfMaterial() {
  const materials = [
  {
    name: "XPEL Ultimate Plus",
    warranty: "10 Years",
    price: "₹1800 / Feet",
    finish: "Gloss Finish",
    healing: "Self Healing",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  },
  {
    name: "Garware Premium",
    warranty: "7 Years",
    price: "₹1200 / Feet",
    finish: "Gloss Finish",
    healing: "Self Healing",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
  },
  {
    name: "Llumar Platinum",
    warranty: "10 Years",
    price: "₹1500 / Feet",
    finish: "Gloss Finish",
    healing: "Self Healing",
    image: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
  },
  {
    name: "STEK DYNOshield",
    warranty: "8 Years",
    price: "₹1700 / Feet",
    finish: "Matte / Gloss",
    healing: "Self Healing",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
  },
];

  return (
    <div
      style={{
        background: "#0b0b0b",
        color: "white",
        minHeight: "100vh",
      }}
    >
      {/* HERO */}

      <section
        style={{
          textAlign: "center",
          padding: "90px 20px",
          background:
            "linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.75)),url('https://images.unsplash.com/photo-1503376780353-7e6692767b70')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            color: "#ff3b3b",
          }}
        >
          Premium PPF Materials
        </h1>

        <p
          style={{
            maxWidth: "900px",
            margin: "20px auto",
            fontSize: "20px",
          }}
        >
          Protect your vehicle with the world's
          leading Paint Protection Films.
        </p>
      </section>

      {/* MATERIALS */}

      <section
        style={{
          padding: "60px 40px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#ff3b3b",
            marginBottom: "50px",
          }}
        >
          Available PPF Brands
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "30px",
          }}
        >
          {materials.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#151515",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow:
                  "0 0 20px rgba(255,59,59,.15)",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "230px",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  padding: "25px",
                }}
              >
                <h2>{item.name}</h2>

                <p>{item.desc}</p>

                <h3
                  style={{
                    color: "#00ff88",
                    marginTop: "15px",
                  }}
                >
                  {item.price}
                </h3>

                <p>
                  Warranty:
                  <strong>
                    {" "}
                    {item.warranty}
                  </strong>
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "20px",
                  }}
                >
                  <Link
  to="/ppf-order"
  style={{
    flex: 1,
    textAlign: "center",
    background: "#ff3b3b",
    color: "white",
    padding: "12px",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
  }}
>
  Buy Now
</Link>

                  <a
                    href="https://wa.me/7570908459"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      flex: 1,
                      textAlign: "center",
                      background: "#25D366",
                      color: "white",
                      padding: "12px",
                      borderRadius: "8px",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Inquiry
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}

      <section
        style={{
          padding: "60px 40px",
          background: "#111",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#ff3b3b",
          }}
        >
          Why Choose PPF?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <Feature title="Scratch Protection" />
          <Feature title="Self Healing Technology" />
          <Feature title="UV Protection" />
          <Feature title="Hydrophobic Surface" />
          <Feature title="High Gloss Finish" />
          <Feature title="Stone Chip Resistance" />
        </div>
      </section>

     

      {/* CTA */}

      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "#111",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
          }}
        >
          Ready To Protect Your Car?
        </h2>

        <a
          href="/book"
          style={{
            display: "inline-block",
            marginTop: "25px",
            background: "#ff3b3b",
            color: "white",
            textDecoration: "none",
            padding: "15px 40px",
            borderRadius: "10px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Book Appointment
        </a>
      </section>
    </div>
  );
}

function Feature({ title }) {
  return (
    <div
      style={{
        background: "#1a1a1a",
        padding: "25px",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <h3>{title}</h3>
    </div>
  );
}

function WarrantyCard({ year, brand }) {
  return (
    <div
      style={{
        background: "#151515",
        padding: "25px",
        borderRadius: "12px",
        width: "220px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#00ff88",
        }}
      >
        {year}
      </h2>

      <h3>{brand}</h3>
    </div>
  );
}