import axios from "axios";

export default function Faculty() {

  const markAttendance = () => {
    axios.post("http://localhost:5000/api/attendance", {
      student_id: 1,
      subject: "Math",
      status: "present"
    });
  };

  return (
    <div>
      <h2>Faculty Dashboard</h2>
      <button onClick={markAttendance}>Mark Attendance</button>
    </div>
  );
}