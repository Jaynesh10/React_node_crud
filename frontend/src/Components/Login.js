import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (email == "" || password == "") {
      alert("Enter all input fields");
    } else {
      axios
        .post("http://localhost:8081/login", { email, password })
        .then((res) => {
          console.log(res);
          if (res.data && res.data.message === "Login successful") {
            alert("Login Successfull");
            // console.log(email);
            navigate("/", { state: { email } });
          }
        })
        .catch((err) => {
          alert("Invalid Credentials");
          console.log(err);
        });
    }
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-25 bg-white rounded p-3">
        <form onSubmit={handleLogin}>
          <h2 style={{ textAlign: "center" }}>Login User</h2>
          <hr />
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
            Don't have an account? <Link to="/signup">Signup Now</Link>
          </p>
          <button className="btn btn-success">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
