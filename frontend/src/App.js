import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./Components/Student";
import CreateStudent from "./Components/CreateStudent";
import UpdateStudent from "./Components/UpdateStudent";
import ReadStudent from "./Components/ReadStudent";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/create" element={<CreateStudent />} />
          <Route path="/update" element={<UpdateStudent />} />
          <Route path="/read" element={<ReadStudent />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
