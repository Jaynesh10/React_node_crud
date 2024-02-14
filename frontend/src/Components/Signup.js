import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    if (username == "" || email == "" || password == "") {
      alert("Enter all input fields");
    } else {
      axios
        .post("http://localhost:8081/signup", { username, email, password })
        .then((res) => {
          console.log(res);
          alert("Signup Successfull");
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-25 bg-white rounded p-3">
        <form onSubmit={handleSignup}>
          <h2 style={{ textAlign: "center" }}>Signup User</h2>
          <hr />
          <div className="mb-2">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter Username"
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
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
          <div className="mb-2">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p>
            Already have an account? <Link to="/login">Login Now</Link>
          </p>
          <button className="btn btn-success">Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
