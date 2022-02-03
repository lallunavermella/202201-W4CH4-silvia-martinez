import AccesData from "./components/AccesData/AccesData";
import "./App.css";
import PersonalData from "./components/PersonalData/PersonalData";
import Login from "./components/Login/Login";
import DataUser from "./components/DataUser/DataUser";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("PersonalData");
  return (
    <div className="App">
      {currentPage === "PersonalData" && <PersonalData />}
      {currentPage === "AccesData" && <AccesData />}
      {currentPage === "Login" && <Login />}
      {currentPage === "DataUser" && <DataUser />}
    </div>
  );
}

export default App;
