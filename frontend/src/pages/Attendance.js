import { useEffect, useState } from "react";
import axios from "axios";

const formatSubject = (sub) => {
  return sub
    .replace("DSA", "Data Structures")
    .replace("DBMS", "Database Systems")
    .replace("Computer Networks", "Computer Networks")
    .replace("Competitive Coding", "Competitive Coding")
    .replace("Computer Organization", "Computer Organization");
};  

export default function Attendance() {
  const [records, setRecords] = useState([]);
  const [summary, setSummary] = useState({});

  useEffect(() => {
    const id = localStorage.getItem("id");

    // Fetch all attendance
    axios
      .get(`http://localhost:5000/api/attendance/${id}`)
      .then(res => setRecords(res.data));

    // Fetch summary
    axios
      .get(`http://localhost:5000/api/dashboard/attendance/${id}`)
      .then(res => setSummary(res.data));
  }, []);

  const percentage = summary.total
    ? ((summary.present / summary.total) * 100).toFixed(1)
    : 0;

  return (
    <div className="attendance-container">
      <h2>📅 Attendance Dashboard</h2>

      {/* Summary Cards */}
      <div className="summary-grid">
        <div className="summary-card blue">
          <h3>Total Classes</h3>
          <p>{summary.total || 0}</p>
        </div>

        <div className="summary-card green">
          <h3>Present</h3>
          <p>{summary.present || 0}</p>
        </div>

        <div className="summary-card purple">
          <h3>Attendance %</h3>
          <p>{percentage}%</p>
        </div>
      </div>

      {/* Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Subject</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {records.map((item, index) => (
              <tr key={index} className="row">
                <td>{new Date(item.date).toLocaleDateString()}</td>
                <td>{formatSubject(item.subject)}</td>
                <td className={item.status === "present" ? "present" : "absent"}>
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Back Button */}
      <button onClick={() => window.location = "/student"}>
        ← Back
      </button>
    </div>
  );
}