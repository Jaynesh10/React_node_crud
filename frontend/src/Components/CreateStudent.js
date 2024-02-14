import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function CreateStudent() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    if (name == "" || phone == "" || email == "") {
      alert("All Fields Required");
    } else {
      axios
        .post("http://localhost:8081/create", { name, phone, email })
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handlesubmit}>
          <h2 style={{ textAlign: "center" }}>Add Student</h2>
          <hr />
          <div className="mb-2">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Phone</label>
            <input
              type="number"
              placeholder="Enter Phone"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-success">ADD</button>
          <Link to="/" className="btn btn-danger ms-2">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
}

export default CreateStudent;
