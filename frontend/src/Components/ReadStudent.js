import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function ReadStudent() {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state;
  const handleUpdate = (data) => {
    navigate("/update", { state: { data } });
  };
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h2 style={{ textAlign: "center" }}>
          ✔ Welcome, <i>{data.name}</i> ✔
        </h2>
        <hr />
        <h3>Name: {data.name} </h3>
        <h3>Phone: {data.phone} </h3>
        <h3>Email: {data.email} </h3>
        <Link to="/" className="btn btn-danger">
          Back
        </Link>
        <button
          onClick={() => handleUpdate(data)}
          className="btn btn-success ms-2"
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default ReadStudent;
