import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

function UpdateStudent() {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state || {};
  //   console.log(data?.id);
  const [id, setId] = useState(data?.id || "");
  const [name, setName] = useState(data?.name || "");
  const [phone, setPhone] = useState(data?.phone || "");
  const [email, setEmail] = useState(data?.email || "");
  const handlesubmit = (e) => {
    e.preventDefault();
    if (name == "" || phone == "" || email == "") {
      alert("All Fields Required");
    } else {
      axios
        .put("http://localhost:8081/update", { id, name, phone, email })
        .then((res) => {
          console.log(res);
          alert("Data Updated Successfully");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handlesubmit}>
          <h2 style={{ textAlign: "center" }}>Update Student</h2>
          <hr />
          <div className="mb-2">
            <input
              type="hidden"
              placeholder="Enter Id"
              className="form-control"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Phone</label>
            <input
              type="number"
              placeholder="Enter Phone"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Update</button>
          <Link to="/" className="btn btn-danger ms-2">
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
}

export default UpdateStudent;
