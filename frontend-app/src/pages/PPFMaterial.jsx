
import { Link } from "react-router-dom";

const materials = [
  {
    name: "XPEL Ultimate Plus",
    warranty: "10 Years",
    price: "₹1,800 / Feet",
    finish: "Gloss Finish",
    healing: "Self Healing",
    desc: "Premium PPF option for vehicle paint protection.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Garware Premium",
    warranty: "7 Years",
    price: "₹1,200 / Feet",
    finish: "Gloss Finish",
    healing: "Self Healing",
    desc: "A PPF material option for everyday paint protection.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "Llumar Platinum",
    warranty: "10 Years",
    price: "₹1,500 / Feet",
    finish: "Gloss Finish",
    healing: "Self Healing",
    desc: "Explore this film option for a clean gloss appearance.",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    name: "STEK DYNOshield",
    warranty: "8 Years",
    price: "₹1,700 / Feet",
    finish: "Matte / Gloss",
    healing: "Self Healing",
    desc: "A film option for customers looking for different finishes.",
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1000&q=80",
  },
];

const features = [
  "Scratch Protection",
  "Self-Healing Technology",
  "UV Protection",
  "Hydrophobic Surface",
  "High Gloss Finish",
  "Stone Chip Resistance",
];

export default function PpfMaterial() {
  return (
    <main className="ppf-material-page">
      <style>{`
        .ppf-material-page,
        .ppf-material-page * {
          box-sizing: border-box;
        }

        .ppf-material-page {
          width: 100%;
          max-width: 100%;
          min-height: 100vh;
          overflow-x: clip;
          background: #0b0b0b;
          color: #fff;
        }

        .ppf-material-page img {
          display: block;
          max-width: 100%;
        }

        .ppf-material-hero {
          width: 100%;
          padding: clamp(50px, 8vw, 100px) 18px;
          text-align: center;
          background:
            linear-gradient(rgba(0,0,0,.78),rgba(0,0,0,.78)),
            url("https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80")
            center / cover no-repeat;
        }

        .ppf-material-hero h1 {
          margin: 0 0 18px;
          color: #d4af37;
          font-size: clamp(32px, 5.5vw, 62px);
          line-height: 1.15;
          overflow-wrap: anywhere;
        }

        .ppf-material-hero p {
          max-width: 760px;
          margin: 0 auto;
          color: #eee;
          font-size: clamp(15px, 2vw, 20px);
          line-height: 1.8;
        }

        .ppf-material-section {
          width: 100%;
          max-width: 1450px;
          margin: 0 auto;
          padding: clamp(35px, 5vw, 65px) clamp(14px, 4vw, 45px);
        }

        .ppf-material-heading {
          margin: 0 0 32px;
          text-align: center;
          color: #d4af37;
          font-size: clamp(25px, 4vw, 38px);
          line-height: 1.25;
        }

        .ppf-material-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          width: 100%;
        }

        .ppf-material-card {
          min-width: 0;
          overflow: hidden;
          border: 1px solid rgba(212,175,55,.25);
          border-radius: 18px;
          background: #151515;
          box-shadow: 0 10px 28px rgba(0,0,0,.25);
          transition: transform .2s ease, border-color .2s ease;
        }

        .ppf-material-card:hover {
          transform: translateY(-4px);
          border-color: rgba(212,175,55,.65);
        }

        .ppf-material-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
        }

        .ppf-material-card-content {
          padding: clamp(16px, 2vw, 24px);
          overflow-wrap: anywhere;
        }

        .ppf-material-card h3 {
          margin: 0 0 12px;
          color: #e5c45c;
          font-size: clamp(19px, 2vw, 23px);
          line-height: 1.35;
        }

        .ppf-material-description {
          color: #ccc;
          line-height: 1.7;
          margin-bottom: 14px;
        }

        .ppf-material-price {
          color: #25d366;
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .ppf-material-detail {
          margin-bottom: 9px;
          color: #ddd;
          font-size: 14px;
          line-height: 1.6;
        }

        .ppf-material-actions {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin-top: 20px;
        }

        .ppf-material-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 0;
          min-height: 44px;
          padding: 11px 10px;
          border: 0;
          border-radius: 9px;
          text-align: center;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          overflow-wrap: anywhere;
          transition: filter .2s ease;
        }

        .ppf-material-btn:hover {
          filter: brightness(1.12);
        }

        .ppf-material-btn-order {
          background: linear-gradient(90deg,#7b112d,#d4af37);
          color: #fff;
        }

        .ppf-material-btn-whatsapp {
          background: linear-gradient(90deg,#0f9d58,#25d366);
          color: #fff;
        }

        .ppf-material-features {
          width: 100%;
          padding: clamp(35px, 5vw, 60px) clamp(14px, 4vw, 45px);
          background: #111;
        }

        .ppf-material-feature-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          width: 100%;
          max-width: 1300px;
          margin: 0 auto;
        }

        .ppf-material-feature {
          min-width: 0;
          padding: 23px 16px;
          border: 1px solid rgba(212,175,55,.2);
          border-radius: 14px;
          background: #191919;
          text-align: center;
          overflow-wrap: anywhere;
        }

        .ppf-material-feature span {
          display: block;
          margin-bottom: 10px;
          color: #25d366;
          font-size: 24px;
        }

        .ppf-material-feature h3 {
          font-size: 16px;
          line-height: 1.5;
        }

        .ppf-material-cta {
          padding: clamp(45px, 7vw, 80px) 18px;
          text-align: center;
          background: #0b0b0b;
        }

        .ppf-material-cta h2 {
          margin-bottom: 15px;
          font-size: clamp(25px, 4vw, 40px);
          line-height: 1.3;
        }

        .ppf-material-cta p {
          margin: 0 auto 24px;
          color: #ccc;
          line-height: 1.7;
        }

        @media (max-width: 1000px) {
          .ppf-material-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .ppf-material-feature-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .ppf-material-grid,
          .ppf-material-feature-grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .ppf-material-section {
            padding: 35px 14px;
          }

          .ppf-material-card img {
            height: 215px;
          }

          .ppf-material-card-content {
            padding: 20px;
          }

          .ppf-material-actions {
            grid-template-columns: minmax(0, 1fr);
          }

          .ppf-material-btn {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ppf-material-card,
          .ppf-material-btn {
            transition: none;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="ppf-material-hero">
        <h1>Premium PPF Materials</h1>
        <p>
          Explore paint protection film options for your car or bike.
          Contact our team to confirm availability, pricing and warranty terms.
        </p>
      </section>

      {/* MATERIAL CARDS */}
      <section className="ppf-material-section">
        <h2 className="ppf-material-heading">
          Available PPF Options
        </h2>

        <div className="ppf-material-grid">
          {materials.map((item) => (
            <article className="ppf-material-card" key={item.name}>
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
              />

              <div className="ppf-material-card-content">
                <h3>{item.name}</h3>

                <p className="ppf-material-description">
                  {item.desc}
                </p>

                <p className="ppf-material-price">
                  {item.price}
                </p>

                <p className="ppf-material-detail">
                  Warranty: <strong>{item.warranty}</strong>
                </p>

                <p className="ppf-material-detail">
                  Finish: <strong>{item.finish}</strong>
                </p>

                <p className="ppf-material-detail">
                  Technology: <strong>{item.healing}</strong>
                </p>

                <div className="ppf-material-actions">
                  <Link
                    to="/ppf-order"
                    className="ppf-material-btn ppf-material-btn-order"
                  >
                    Enquire / Order
                  </Link>

                  <a
                    href="https://wa.me/917570908459"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ppf-material-btn ppf-material-btn-whatsapp"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="ppf-material-features">
        <h2 className="ppf-material-heading">
          PPF Features
        </h2>

        <div className="ppf-material-feature-grid">
          {features.map((feature) => (
            <div className="ppf-material-feature" key={feature}>
              <span>✓</span>
              <h3>{feature}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="ppf-material-cta">
        <h2>Ready to Protect Your Vehicle?</h2>

        <p>
          Contact us to discuss material options and installation.
        </p>

        <Link
          to="/book"
          className="ppf-material-btn ppf-material-btn-order"
        >
          Book Appointment
        </Link>
      </section>
    </main>
  );
}
