import React from "react";

export default function Timetable() {
  const timetable = [
    {
      day: "Monday",
      classes: [
        { time: "9:00 - 10:00", subject: "DSA" },
        { time: "10:00 - 11:00", subject: "DBMS" },
        { time: "11:00 - 12:00", subject: "Computer Networks" },
        { time: "1:00 - 2:00", subject: "Competitive Coding" },
      ],
    },
    {
      day: "Tuesday",
      classes: [
        { time: "9:00 - 10:00", subject: "Computer Organization" },
        { time: "10:00 - 11:00", subject: "DSA" },
        { time: "11:00 - 12:00", subject: "DBMS" },
        { time: "1:00 - 2:00", subject: "Competitive Coding" },
      ],
    },
    {
      day: "Wednesday",
      classes: [
        { time: "9:00 - 10:00", subject: "Computer Networks" },
        { time: "10:00 - 11:00", subject: "DBMS" },
        { time: "11:00 - 12:00", subject: "DSA" },
        { time: "1:00 - 2:00", subject: "Computer Organization" },
      ],
    },
    {
      day: "Thursday",
      classes: [
        { time: "9:00 - 10:00", subject: "Competitive Coding" },
        { time: "10:00 - 11:00", subject: "Computer Networks" },
        { time: "11:00 - 12:00", subject: "DBMS" },
        { time: "1:00 - 2:00", subject: "DSA" },
      ],
    },
    {
      day: "Friday",
      classes: [
        { time: "9:00 - 10:00", subject: "DSA" },
        { time: "10:00 - 11:00", subject: "Computer Organization" },
        { time: "11:00 - 12:00", subject: "Competitive Coding" },
        { time: "1:00 - 2:00", subject: "Computer Networks" },
      ],
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📅 Weekly Timetable</h2>

      <div style={styles.grid}>
        {timetable.map((day, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.day}>{day.day}</h3>

            {day.classes.map((cls, i) => (
              <div key={i} style={styles.classBox}>
                <span style={styles.time}>{cls.time}</span>
                <span style={styles.subject}>{cls.subject}</span>
              </div>
            ))}
          </div>
        ))}
      </div>

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
    fontSize: "24px",
    fontWeight: "bold",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "white",
    padding: "15px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  day: {
    marginBottom: "10px",
    color: "#2c3e50",
  },

  classBox: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px",
    marginBottom: "6px",
    background: "#eef3ff",
    borderRadius: "8px",
  },

  time: {
    fontSize: "12px",
    color: "#555",
  },

  subject: {
    fontWeight: "bold",
    color: "#1e88e5",
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