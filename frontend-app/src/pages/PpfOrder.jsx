
import { useState } from "react";

export default function PpfOrder() {
  const brands = [
    { name: "XPEL Ultimate Plus", warranty: "10 Years" },
    { name: "Garware Premium", warranty: "7 Years" },
    { name: "Llumar Platinum", warranty: "10 Years" },
    { name: "STEK DYNOshield", warranty: "8 Years" },
  ];

  const [brand, setBrand] = useState(brands[0]);
  const [qty, setQty] = useState("1");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [requestType, setRequestType] = useState("Booking");

  const quantity = Math.max(1, Number(qty) || 1);

  const whatsappMessage = `Hello PPF Studio,

Request Type: ${requestType}

Customer Name: ${name}
Mobile: ${mobile}
Email: ${email}
Address: ${address}

PPF Brand: ${brand.name}
Quantity: ${quantity} Feet
Warranty: ${brand.warranty}

Please confirm availability, final price and delivery/booking details.
Thank you!`;

  const whatsappLink = `https://wa.me/917570908459?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handleSubmit = (type) => {
    if (!name.trim() || !mobile.trim() || !address.trim()) {
      alert("Please enter your name, mobile number and address.");
      return;
    }

    if (!/^\d{10}$/.test(mobile.replace(/\D/g, ""))) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    if (!Number.isInteger(Number(qty)) || Number(qty) < 1) {
      alert("Please enter a valid quantity of at least 1 foot.");
      return;
    }

    setRequestType(type);

    const message = `Hello PPF Studio,

Request Type: ${type}

Customer Name: ${name}
Mobile: ${mobile}
Email: ${email || "Not provided"}
Address: ${address}

PPF Brand: ${brand.name}
Quantity: ${quantity} Feet
Warranty: ${brand.warranty}

Please confirm availability, final price and ${type.toLowerCase()} details.
Thank you!`;

    window.open(
      `https://wa.me/917570908459?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="ppf-order-page">
      <style>{`
        .ppf-order-page,
        .ppf-order-page * {
          box-sizing: border-box;
        }

        .ppf-order-page {
          min-height: 100vh;
          width: 100%;
          overflow-x: clip;
          padding: 35px 16px 60px;
          color: #fff;
          background: radial-gradient(circle at top,#2b1020,#090909 65%);
        }

        .ppf-order-heading {
          text-align: center;
          margin: 25px auto 40px;
          font-family: Poppins, Arial, sans-serif;
        }

        .ppf-order-heading h1 {
          font-size: clamp(32px,6vw,65px);
          line-height: 1.15;
          overflow-wrap: anywhere;
          margin: 0;
          background: linear-gradient(90deg,#D4AF37,#FFD700,#FFF1A8,#D4AF37);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .ppf-order-heading p {
          max-width: 620px;
          margin: 18px auto 0;
          color: #ccc;
          font-size: 17px;
          line-height: 1.7;
        }

        .ppf-order-card {
          width: 100%;
          max-width: 850px;
          margin: 0 auto;
          padding: clamp(18px,4vw,40px);
          background: #111;
          border: 1px solid rgba(212,175,55,.5);
          border-radius: 22px;
          box-shadow: 0 12px 40px rgba(0,0,0,.3);
        }

        .ppf-order-label {
          display: block;
          margin: 20px 0 8px;
          color: #D4AF37;
          font-weight: 700;
          font-size: 15px;
        }

        .ppf-order-input {
          display: block;
          width: 100%;
          min-width: 0;
          padding: 14px;
          border: 1px solid #66501b;
          border-radius: 10px;
          background: #0f0f0f;
          color: #fff;
          font-size: 16px;
        }

        .ppf-order-input:focus {
          outline: 2px solid rgba(212,175,55,.4);
          border-color: #D4AF37;
        }

        .ppf-order-brand {
          margin-top: 22px;
          padding: 20px;
          border-radius: 14px;
          background: #0b0b0b;
          border: 1px solid #282828;
        }

        .ppf-order-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 30px;
        }

        .ppf-order-button {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 54px;
          padding: 14px;
          border: 0;
          border-radius: 12px;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          text-align: center;
          cursor: pointer;
          text-decoration: none;
        }

        .ppf-order-inquiry {
          background: linear-gradient(90deg,#128C7E,#25D366);
        }

        .ppf-order-booking {
          background: linear-gradient(90deg,#7b112d,#D4AF37);
        }

        @media(max-width:560px) {
          .ppf-order-actions {
            grid-template-columns: 1fr;
          }

          .ppf-order-page {
            padding: 22px 12px 40px;
          }
        }
      `}</style>

      <header className="ppf-order-heading">
        <h1>PPF Material Inquiry</h1>

        <div
          style={{
            width: 100,
            height: 4,
            margin: "18px auto",
            borderRadius: 10,
            background: "linear-gradient(90deg,#D4AF37,#FFD700)",
          }}
        />

        <p>
          Select your preferred PPF material, enter your details
          and send an inquiry or booking request directly on WhatsApp.
        </p>
      </header>

      <section className="ppf-order-card">
        <h2 style={{ color: "#D4AF37", textAlign: "center" }}>
          Customer & Material Details
        </h2>

        <label className="ppf-order-label" htmlFor="ppf-brand">
          Select PPF Brand
        </label>

        <select
          id="ppf-brand"
          className="ppf-order-input"
          value={brand.name}
          onChange={(e) =>
            setBrand(brands.find((b) => b.name === e.target.value))
          }
        >
          {brands.map((b) => (
            <option key={b.name} value={b.name}>
              {b.name}
            </option>
          ))}
        </select>

        <div className="ppf-order-brand">
          <h3 style={{ color: "#D4AF37", marginBottom: 10 }}>
            {brand.name}
          </h3>
          <p style={{ color: "#ddd" }}>
            Warranty: {brand.warranty}
          </p>
          <p style={{ color: "#aaa", marginTop: 8, fontSize: 13 }}>
            Final warranty terms are subject to brand and product confirmation.
          </p>
        </div>

        <label className="ppf-order-label" htmlFor="ppf-quantity">
          Quantity (Feet)
        </label>

        <input
          id="ppf-quantity"
          className="ppf-order-input"
          type="number"
          min="1"
          step="1"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
          required
        />

        <label className="ppf-order-label" htmlFor="ppf-name">
          Full Name
        </label>

        <input
          id="ppf-name"
          className="ppf-order-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your full name"
          autoComplete="name"
          required
        />

        <label className="ppf-order-label" htmlFor="ppf-mobile">
          Mobile Number
        </label>

        <input
          id="ppf-mobile"
          className="ppf-order-input"
          type="tel"
          inputMode="numeric"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="10-digit mobile number"
          autoComplete="tel"
          required
        />

        <label className="ppf-order-label" htmlFor="ppf-email">
          Email Address (Optional)
        </label>

        <input
          id="ppf-email"
          className="ppf-order-input"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          autoComplete="email"
        />

        <label className="ppf-order-label" htmlFor="ppf-address">
          Full Address
        </label>

        <textarea
          id="ppf-address"
          className="ppf-order-input"
          rows={4}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your full delivery/service address"
          autoComplete="street-address"
          required
          style={{ resize: "vertical" }}
        />

        <div className="ppf-order-actions">
          <button
            type="button"
            className="ppf-order-button ppf-order-inquiry"
            onClick={() => handleSubmit("Inquiry")}
          >
            💬 Inquiry on WhatsApp
          </button>

          <button
            type="button"
            className="ppf-order-button ppf-order-booking"
            onClick={() => handleSubmit("Booking Request")}
          >
            📦 Book PPF Material
          </button>
        </div>

        <p
          style={{
            marginTop: 18,
            color: "#aaa",
            fontSize: 13,
            lineHeight: 1.6,
            textAlign: "center",
          }}
        >
          This sends a WhatsApp request only. Your order is not confirmed
          until PPF Studio confirms availability, pricing and delivery.
        </p>
      </section>
    </main>
  );
}
