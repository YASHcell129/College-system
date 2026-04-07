import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem("id");

    axios
      .get(`http://localhost:5000/api/notifications/${id}`)
      .then((res) => setNotifications(res.data))
      .catch(() => console.log("Error loading notifications"));
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case "attendance":
        return "📊";
      case "exam":
        return "📝";
      case "holiday":
        return "🏖️";
      default:
        return "🔔";
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🔔 Notifications</h2>

      {notifications.length === 0 ? (
        <p style={{ textAlign: "center" }}>No notifications</p>
      ) : (
        notifications.map((n, i) => (
          <div
            key={i}
            style={{
              ...styles.card,
              background: n.read_status ? "#fff" : "#eef5ff",
            }}
          >
            <div style={styles.icon}>{getIcon(n.type)}</div>

            <div style={styles.content}>
              <p style={styles.message}>{n.message}</p>
              <span style={styles.time}>{n.time}</span>
            </div>

            {!n.read_status && <span style={styles.badge}>NEW</span>}
          </div>
        ))
      )}

      <button style={styles.backBtn} onClick={() => window.history.back()}>
        ← Back
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    background: "#f4f7fb",
    minHeight: "100vh",
  },

  title: {
    textAlign: "center",
    marginBottom: "20px",
  },

  card: {
    display: "flex",
    alignItems: "center",
    padding: "12px",
    borderRadius: "10px",
    marginBottom: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },

  icon: {
    fontSize: "22px",
    marginRight: "12px",
  },

  content: {
    flex: 1,
  },

  message: {
    margin: 0,
    fontWeight: "500",
  },

  time: {
    fontSize: "12px",
    color: "#777",
  },

  badge: {
    background: "red",
    color: "white",
    padding: "4px 8px",
    borderRadius: "8px",
    fontSize: "10px",
  },

  backBtn: {
    marginTop: "20px",
    padding: "10px 20px",
    border: "none",
    background: "#1e88e5",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
  },
};