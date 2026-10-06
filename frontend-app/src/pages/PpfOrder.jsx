import { useState } from "react";

export default function PpfOrder() {
  const brands = [
    {
      name: "XPEL Ultimate Plus",
      warranty: "10 Years",
    },
    {
      name: "Garware Premium",
      warranty: "7 Years",
    },
    {
      name: "Llumar Platinum",
      warranty: "10 Years",
    },
    {
      name: "STEK DYNOshield",
      warranty: "8 Years",
    },
  ];

  const [brand, setBrand] = useState(brands[0]);
  const [qty, setQty] = useState(1);

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const whatsappMessage = `Hello PPF Studio

Name: ${name}
Mobile: ${mobile}
Email: ${email}
Address: ${address}

PPF Brand: ${brand.name}
Quantity: ${qty} Feet
Warranty: ${brand.warranty}`;

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,#2b1020,#090909 65%)",
        color: "#fff",
        padding: "80px 20px",
      }}
    >
     <div
  style={{
    textAlign: "center",
    marginBottom: "60px",
    paddingTop: "90px",
    fontFamily: "'Poppins', sans-serif",
  }}
>
  <h1
    style={{
      fontSize: "clamp(42px, 6vw, 72px)",
      fontWeight: "900",
      lineHeight: "1.1",
      letterSpacing: "2px",
      margin: 0,
      textTransform: "uppercase",
      background:
        "linear-gradient(90deg,#D4AF37,#FFD700,#FFF1A8,#D4AF37)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow:
        "0 0 30px rgba(212,175,55,0.3)",
    }}
  >
    PPF Material Inquiry
  </h1>

  <div
    style={{
      width: "120px",
      height: "4px",
      background:
        "linear-gradient(90deg,#D4AF37,#FFD700)",
      margin: "18px auto",
      borderRadius: "10px",
    }}
  />

  <p
    style={{
      color: "#cfcfcf",
      fontSize: "18px",
      fontWeight: "400",
      letterSpacing: "0.5px",
      marginTop: "15px",
      maxWidth: "600px",
      marginInline: "auto",
      lineHeight: "1.8",
    }}
  >
    Choose your preferred PPF brand and send
    your requirements directly on WhatsApp.
  </p>
</div>

      <div
        style={{
          maxWidth: "850px",
          margin: "auto",
          background: "#111",
          padding: "40px",
          borderRadius: "25px",
          border: "1px solid #D4AF37",
        }}
      >
        <label style={labelStyle}>
          Select PPF Brand
        </label>

        <select
          value={brand.name}
          onChange={(e) =>
            setBrand(
              brands.find(
                (b) => b.name === e.target.value
              )
            )
          }
          style={inputStyle}
        >
          {brands.map((b) => (
            <option key={b.name}>
              {b.name}
            </option>
          ))}
        </select>

        <div
          style={{
            marginTop: "20px",
            background: "#0f0f0f",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h3 style={{ color: "#D4AF37" }}>
            {brand.name}
          </h3>

          <p>
            Warranty : {brand.warranty}
          </p>
        </div>

        <div style={{ marginTop: "20px" }}>
          <label style={labelStyle}>
            Quantity
          </label>

          <input
            type="number"
            min="1"
            value={qty}
            onChange={(e) =>
              setQty(e.target.value)
            }
            style={inputStyle}
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <label style={labelStyle}>
            Full Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            placeholder="Enter Name"
            style={inputStyle}
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <label style={labelStyle}>
            Mobile Number
          </label>

          <input
            type="tel"
            value={mobile}
            onChange={(e) =>
              setMobile(e.target.value)
            }
            placeholder="Enter Mobile Number"
            style={inputStyle}
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <label style={labelStyle}>
            Email Address
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="Enter Email"
            style={inputStyle}
          />
        </div>

        <div style={{ marginTop: "20px" }}>
          <label style={labelStyle}>
            Full Address
          </label>

          <textarea
            rows="4"
            value={address}
            onChange={(e) =>
              setAddress(e.target.value)
            }
            placeholder="Enter Address"
            style={{
              ...inputStyle,
              resize: "none",
            }}
          />
        </div>

        <a
          href={`https://wa.me/917570908459?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "block",
            marginTop: "35px",
            textAlign: "center",
            padding: "18px",
            borderRadius: "15px",
            background:
              "linear-gradient(90deg,#128C7E,#25D366)",
            color: "#fff",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Inquiry on WhatsApp
        </a>
      </div>
    </div>
  );
}

const labelStyle = {
  color: "#D4AF37",
  fontWeight: "bold",
  fontSize: "18px",
};

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginTop: "10px",
  borderRadius: "12px",
  background: "#0f0f0f",
  border: "1px solid #D4AF37",
  color: "#fff",
  fontSize: "16px",
  outline: "none",
  boxSizing: "border-box",
};