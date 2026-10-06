import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    brand: "",
    price: "",
    stock: "",
    description: "",
  });

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(res.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const uploadImage = async () => {
    if (!imageFile) return "";

    const data = new FormData();
    data.append("image", imageFile);

    const res = await axios.post(
      "http://localhost:5000/api/upload/image",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return res.data.imageUrl;
  };

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      let imageUrl = "";

      if (imageFile) {
        imageUrl = await uploadImage();
      }

      await axios.post(
        "http://localhost:5000/api/products",
        {
          ...form,
          image: imageUrl,
        }
      );

      alert("Product Added Successfully ✅");

      setForm({
        name: "",
        brand: "",
        price: "",
        stock: "",
        description: "",
      });

      setImageFile(null);

      fetchProducts();
    } catch (error) {
      console.log(error);
      alert("Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    if (!window.confirm("Delete Product ?"))
      return;

    try {
      await axios.delete(
        `http://localhost:5000/api/products/${id}`
      );

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#fff",
        padding: "30px",
        paddingTop: "120px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "55px",
            fontWeight: "800",
            marginBottom: "40px",
            lineHeight: "1.3",
            background:
              "linear-gradient(90deg,#FFD700,#ff8c00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor:
              "transparent",
          }}
        >
          🛒 PPF Store Products
        </h1>

        <form
          onSubmit={addProduct}
          style={{
            background: "#111",
            padding: "30px",
            borderRadius: "20px",
            marginBottom: "50px",
            border:
              "1px solid rgba(255,215,0,0.15)",
            boxShadow:
              "0 0 30px rgba(255,215,0,0.12)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(280px,1fr))",
              gap: "15px",
            }}
          >
            <input
              placeholder="Product Name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              style={inputStyle}
            />

            <input
              placeholder="Brand"
              value={form.brand}
              onChange={(e) =>
                setForm({
                  ...form,
                  brand: e.target.value,
                })
              }
              style={inputStyle}
            />

            <input
              placeholder="Price"
              value={form.price}
              onChange={(e) =>
                setForm({
                  ...form,
                  price: e.target.value,
                })
              }
              style={inputStyle}
            />

            <input
              placeholder="Stock"
              value={form.stock}
              onChange={(e) =>
                setForm({
                  ...form,
                  stock: e.target.value,
                })
              }
              style={inputStyle}
            />

            <input
              placeholder="Description"
              value={form.description}
              onChange={(e) =>
                setForm({
                  ...form,
                  description:
                    e.target.value,
                })
              }
              style={inputStyle}
            />

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImageFile(
                  e.target.files[0]
                )
              }
              style={{
                color: "#fff",
                paddingTop: "12px",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              marginTop: "20px",
              background:
                "linear-gradient(90deg,#FFD700,#ff9900)",
              border: "none",
              padding: "15px 30px",
              borderRadius: "12px",
              fontWeight: "700",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            {loading
              ? "Uploading..."
              : "Add Product"}
          </button>
        </form>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill,minmax(320px,1fr))",
            gap: "25px",
          }}
        >
          {products.map((item) => (
            <div
              key={item._id}
              style={{
                background: "#111",
                borderRadius: "18px",
                overflow: "hidden",
                border:
                  "1px solid rgba(255,215,0,0.15)",
                boxShadow:
                  "0 0 20px rgba(255,215,0,0.08)",
              }}
            >
              <img
                src={
                  item.image ||
                  "https://via.placeholder.com/400x250?text=PPF+Studio"
                }
                alt={item.name}
                style={{
                  width: "100%",
                  height: "240px",
                  objectFit: "cover",
                }}
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/400x250?text=PPF+Studio";
                }}
              />

              <div
                style={{
                  padding: "20px",
                }}
              >
                <h2>{item.name}</h2>

                <p>
                  Brand:
                  <strong>
                    {" "}
                    {item.brand}
                  </strong>
                </p>

                <h2
                  style={{
                    color: "#00e676",
                  }}
                >
                  ₹{item.price}
                </h2>

                <p>
                  Stock:
                  <strong>
                    {" "}
                    {item.stock}
                  </strong>
                </p>

                <p>
                  {item.description}
                </p>

                <button
                  onClick={() =>
                    deleteProduct(
                      item._id
                    )
                  }
                  style={{
                    marginTop: "10px",
                    background:
                      "#ff1744",
                    border: "none",
                    color: "#fff",
                    padding:
                      "10px 18px",
                    borderRadius:
                      "10px",
                    cursor: "pointer",
                  }}
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  padding: "14px",
  background: "#1a1a1a",
  color: "#fff",
  border: "1px solid #333",
  borderRadius: "10px",
  fontSize: "15px",
};