import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {

  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      username === "admin" &&
      password === "admin123"
    ) {

      localStorage.setItem(
        "token",
        "ppfstudioadmin"
      );

      alert(
        "Login Successful"
      );

      navigate(
        "/admin/dashboard"
      );

    } else {

      alert(
        "Invalid Credentials"
      );

    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <form
        onSubmit={handleLogin}
        style={{
          background: "#151515",
          padding: "40px",
          width: "400px",
          borderRadius: "15px",
        }}
      >

        <h1
          style={{
            color: "#ff3b3b",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Admin Login
        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(
              e.target.value
            )
          }
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          style={inputStyle}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "15px",
            background: "#ff3b3b",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Login
        </button>

      </form>

    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  background: "#222",
  color: "white",
  border: "1px solid #333",
  borderRadius: "8px",
};