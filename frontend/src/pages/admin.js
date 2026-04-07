import axios from "axios";

export default function Admin() {

  const approve = () => {
    axios.put("http://localhost:5000/api/requests/approve/1");
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={approve}>Approve Request</button>
    </div>
  );
}