import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
          role,
        }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("id", res.data.id);

      if (res.data.role === "student") window.location = "/student";
      if (res.data.role === "faculty") window.location = "/faculty";
      if (res.data.role === "admin") window.location = "/admin";
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div style={styles.container}>
      {/* Overlay */}
      <div style={styles.overlay}></div>

      {/* Logo */}
      <div style={styles.logo}>
        🎓 ACAD-HUB
      </div>

      {!role ? (
        <div style={styles.roleBox}>
          <h2>Select Your Role</h2>

          <button onClick={() => setRole("student")} style={styles.roleBtn}>
            🎓 Student
          </button>

          <button onClick={() => setRole("faculty")} style={styles.roleBtn}>
            👨‍🏫 Faculty
          </button>

          <button onClick={() => setRole("admin")} style={styles.roleBtn}>
            🛠 Admin
          </button>
        </div>
      ) : (
        <div style={styles.loginBox}>
          <h2>{role.toUpperCase()} LOGIN</h2>

          <input
            placeholder="Email"
            style={styles.input}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={login} style={styles.loginBtn}>
            Login
          </button>

          <button onClick={() => setRole(null)} style={styles.back}>
            ← Change Role
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundImage:
        "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  overlay: {
  position: "absolute",
  width: "100%",
  height: "100%",
  background: "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
},

  logo: {
    position: "absolute",
    top: "30px",
    left: "40px",
    color: "white",
    fontSize: "28px",
    fontWeight: "bold",
    zIndex: 2,
  },

  roleBox: {
    zIndex: 2,
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    padding: "40px",
    borderRadius: "15px",
    textAlign: "center",
    color: "white",
  },

  roleBtn: {
    display: "block",
    width: "220px",
    margin: "15px auto",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#1e88e5",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  },

  loginBox: {
    zIndex: 2,
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(15px)",
    padding: "30px",
    borderRadius: "15px",
    width: "300px",
    textAlign: "center",
    color: "white",
  },

  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "none",
  },

  loginBtn: {
    width: "100%",
    padding: "12px",
    background: "#00c853",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
  },

  back: {
    marginTop: "10px",
    background: "transparent",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};