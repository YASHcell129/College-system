import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Student() {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    const id = localStorage.getItem("id");

    axios
      .get(`http://localhost:5000/api/dashboard/attendance/${id}`)
      .then((res) => setData(res.data))
      .catch(() => console.log("Error fetching dashboard"));
  }, []);

  return (
    <div style={styles.container}>
      
      {/* 🔷 HEADER */}
      <div style={styles.header}>
        <div style={styles.left}>
          <h2 style={styles.appName}>ACAD-HUB</h2>
        </div>

        <div style={styles.right}>
          <span style={styles.welcome}>
            👋 {localStorage.getItem("role")}
          </span>

          <button
            style={styles.logout}
            onClick={() => {
              localStorage.clear();
              window.location = "/";
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* 🔷 GREETING */}
      <h2 style={styles.greeting}>
        Good Evening 👋 {localStorage.getItem("role")}
      </h2>

      {/* 🔍 SEARCH */}
      <input
        style={styles.search}
        placeholder="Search modules..."
      />

      {/* 🎯 MAIN CARDS */}
      <div style={styles.grid}>
        <Card color="#ff6b6b" title="📊 Attendance" onClick={() => navigate("/attendance")} />
        <Card color="#6c5ce7" title="⏰ Timetable" onClick={() => navigate("/timetable")} />
        <Card color="#00b894" title="💰 Fees" />
        <Card color="#0984e3" title="🌴 Holidays" onClick={() => navigate("/holidays")} />
        <Card color="#fdcb6e" title="🔔 Notifications" onClick={() => navigate("/notifications")} />
        <Card color="#e17055" title="📚 Assignments" />
        <Card color="#00cec9" title="💻 LMS" />
        <Card color="#636e72" title="👨‍🏫 Mentorship" />
        <Card color="#a29bfe" title="⭐ Feedback" />
      </div>

      {/* 📊 SUMMARY */}
      <div style={styles.summary}>
        <h3>Attendance Summary</h3>
        <p>Total Classes: {data.total || 0}</p>
        <p>Present: {data.present || 0}</p>
      </div>
    </div>
  );
}

/* 🔷 CARD COMPONENT */
function Card({ color, title, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: color,
        color: "white",
        padding: "20px",
        borderRadius: "15px",
        cursor: "pointer",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "16px",
        boxShadow: "0 6px 15px rgba(0,0,0,0.2)",
        transition: "0.3s",
      }}
    >
      {title}
    </div>
  );
}

/* 🎨 STYLES */
const styles = {
  container: {
    padding: "20px",
    fontFamily: "sans-serif",
    background: "#f5f7fb",
    minHeight: "100vh",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#ffffff",
    padding: "15px 20px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  logo: {
    width: "40px",
  },

  appName: {
    margin: 0,
    color: "#2d3436",
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  welcome: {
    fontWeight: "bold",
  },

  logout: {
    background: "#d63031",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  greeting: {
    marginBottom: "15px",
  },

  search: {
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    marginBottom: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "15px",
    marginBottom: "20px",
  },

  summary: {
    background: "#ffffff",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
};