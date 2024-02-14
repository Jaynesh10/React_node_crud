import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Student() {
  const [student, setStudents] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const userEmailFromState = location.state?.email;
    const userEmailFromStorage = localStorage.getItem("userEmail");

    if (userEmailFromState) {
      setUserEmail(userEmailFromState);
      localStorage.setItem("userEmail", userEmailFromState);
    } else if (userEmailFromStorage) {
      setUserEmail(userEmailFromStorage);
    } else {
      navigate("/login");
    }
  }, [location.state, navigate]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  });

  const handleUpdate = (data) => {
    navigate("/update", { state: { data } });
  };

  const handleRead = (data) => {
    navigate("/read", { state: { data } });
  };

  const handlelogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  const handleDelete = (id) => {
    var confirmed = window.confirm("Are you sure you want to delete");
    if (confirmed) {
      axios
        .delete(`http://localhost:8081/delete/` + id)
        .then((res) => {
          console.log(res);
          alert("Data Deleted Successfully");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h3 style={{ textAlign: "center" }}>Students Dashboard</h3>
        <hr />
        <div>
          <h5>Welcome, {userEmail}👋</h5>
          <button onClick={handlelogout} className="btn btn-danger">
            Logout
          </button>
        </div>
        <hr />
        <Link to="/create" className="btn btn-success">
          Add +
        </Link>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {student.map((data, i) => (
              <tr key={i}>
                <td>{data.name}</td>
                <td>{data.phone}</td>
                <td>{data.email}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(data)}
                    className="btn btn-success"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(data.id)}
                    className="btn btn-danger ms-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleRead(data)}
                    className="btn btn-primary ms-2"
                  >
                    Read
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Student;
