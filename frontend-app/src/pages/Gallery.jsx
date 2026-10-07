import { useEffect, useState } from "react";
import api from "../api/api";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await api.get("/gallery");
      console.log(res.data);
      setImages(res.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg,#070707,#1a0d16,#070707)",
        color: "#fff",
        padding: "80px 7%",
      }}
    >
      {/* HEADER */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "70px",
        }}
      >
        <h1
          style={{
            fontSize: "70px",
            fontWeight: "900",
            color: "#D4AF37",
            marginBottom: "20px",
            textShadow:
              "0 0 25px rgba(212,175,55,0.35)",
          }}
        >
          Gallery
        </h1>

        <p
          style={{
            color: "#cccccc",
            fontSize: "20px",
            maxWidth: "850px",
            margin: "auto",
            lineHeight: "34px",
          }}
        >
          Explore our Premium PPF, Ceramic Coating,
          Wrapping, Detailing and Luxury Vehicle
          Protection Projects.
        </p>
      </div>

      {/* LOADING */}

      {loading && (
        <div
          style={{
            textAlign: "center",
            marginTop: "100px",
            fontSize: "22px",
            color: "#D4AF37",
          }}
        >
          Loading Gallery...
        </div>
      )}

      {/* GALLERY */}

      {!loading && images.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(360px,1fr))",
            gap: "35px",
          }}
        >
          {images.map((item) => (
            <div
              key={item._id}
              style={{
                background:
                  "linear-gradient(135deg,#101010,#23111b)",
                border:
                  "1px solid rgba(212,175,55,0.25)",
                borderRadius: "25px",
                overflow: "hidden",
                boxShadow:
                  "0 15px 40px rgba(0,0,0,0.45)",
                transition: "0.4s ease",
              }}
            >
              {/* IMAGE */}

              <div
                style={{
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={
                    item.image ||
                    item.imageUrl ||
                    "https://via.placeholder.com/800x500/111111/D4AF37?text=PPF+Studio"
                  }
                  alt={item.title}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/800x500/111111/D4AF37?text=PPF+Studio";
                  }}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "120px",
                    background:
                      "linear-gradient(transparent,rgba(0,0,0,0.9))",
                  }}
                />
              </div>

              {/* CONTENT */}

              <div
                style={{
                  padding: "25px",
                }}
              >
                <h2
                  style={{
                    color: "#D4AF37",
                    marginBottom: "12px",
                    fontSize: "24px",
                  }}
                >
                  {item.title || "PPF Project"}
                </h2>

                <p
                  style={{
                    color: "#d5d5d5",
                    lineHeight: "30px",
                    minHeight: "90px",
                  }}
                >
                  {item.description ||
                    "Premium vehicle protection project."}
                </p>

                <button
                  style={{
                    width: "100%",
                    padding: "15px",
                    border: "none",
                    borderRadius: "14px",
                    cursor: "pointer",
                    fontWeight: "700",
                    fontSize: "15px",
                    color: "#fff",
                    background:
                      "linear-gradient(90deg,#7b112d,#D4AF37)",
                    boxShadow:
                      "0 5px 20px rgba(212,175,55,0.25)",
                  }}
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* EMPTY */}

      {!loading && images.length === 0 && (
        <div
          style={{
            textAlign: "center",
            marginTop: "120px",
          }}
        >
          <div
            style={{
              fontSize: "100px",
            }}
          >
            🚘
          </div>

          <h2
            style={{
              color: "#D4AF37",
              marginTop: "25px",
            }}
          >
            No Gallery Projects Yet
          </h2>

          <p
            style={{
              color: "#999",
              marginTop: "12px",
            }}
          >
            Upload projects from Gallery Admin Panel
          </p>
        </div>
      )}
    </div>
  );
}