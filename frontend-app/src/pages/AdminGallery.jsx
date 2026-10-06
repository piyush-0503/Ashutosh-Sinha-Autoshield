import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminGallery() {
  const [gallery, setGallery] = useState([]);

  const [title, setTitle] = useState("");
  const [carName, setCarName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/gallery"
      );

      setGallery(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please Select Image");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("carName", carName);
      formData.append("description", description);
      formData.append("image", image);

      await axios.post(
        "http://localhost:5000/api/gallery",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      alert("Image Uploaded Successfully ✅");

      setTitle("");
      setCarName("");
      setDescription("");
      setImage(null);

      loadGallery();
    } catch (error) {
      console.log(error);
      alert("Upload Failed ❌");
    }
  };

  const deleteImage = async (id) => {
    try {
      const confirmDelete =
        window.confirm(
          "Delete this image?"
        );

      if (!confirmDelete) return;

      await axios.delete(
        `http://localhost:5000/api/gallery/${id}`
      );

      alert("Deleted Successfully");

      loadGallery();
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "white",
        padding: "40px",
      }}
    >
      <h1
        style={{
          color: "#ff3b3b",
          marginBottom: "30px",
        }}
      >
        Admin Gallery
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "#151515",
          padding: "25px",
          borderRadius: "10px",
          marginBottom: "40px",
        }}
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          style={inputStyle}
          required
        />

        <input
          type="text"
          placeholder="Car Name"
          value={carName}
          onChange={(e) =>
            setCarName(e.target.value)
          }
          style={inputStyle}
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          style={{
            ...inputStyle,
            height: "120px",
          }}
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setImage(
              e.target.files[0]
            )
          }
          style={{
            marginBottom: "20px",
          }}
          required
        />

        <br />

        <button
          type="submit"
          style={{
            background: "#ff3b3b",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Upload Image
        </button>
      </form>

      <h2
        style={{
          color: "#ff3b3b",
          marginBottom: "20px",
        }}
      >
        Gallery Images
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
          gap: "20px",
        }}
      >
        {gallery.map((item) => (
          <div
            key={item._id}
            style={{
              background: "#151515",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <img
              src={`http://localhost:5000/uploads/${item.image}`}
              alt={item.title}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div
              style={{
                padding: "15px",
              }}
            >
              <h3>{item.title}</h3>

              <p>{item.carName}</p>

              <p>
                {item.description}
              </p>

              <button
                onClick={() =>
                  deleteImage(item._id)
                }
                style={{
                  background:
                    "#ff3b3b",
                  color: "white",
                  border: "none",
                  padding:
                    "10px 20px",
                  borderRadius:
                    "6px",
                  cursor:
                    "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  background: "#222",
  color: "white",
  border: "1px solid #333",
  borderRadius: "8px",
};