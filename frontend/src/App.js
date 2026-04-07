import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Student from "./pages/student";

// NEW PAGES
import Attendance from "./pages/Attendance";
import Timetable from "./pages/timetable";
import Notifications from "./pages/notification";
import Holidays from "./pages/holidays";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/student" element={<Student />} />

        {/* ROUTES */}
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/timetable" element={<Timetable />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/holidays" element={<Holidays />} />
      </Routes>
    </Router>
  );
}

export default App;