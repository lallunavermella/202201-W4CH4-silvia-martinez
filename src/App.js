import AccesData from "./components/AccesData/AccesData";
import "./App.css";
import PersonalData from "./components/PersonalData/PersonalData";
import Login from "./components/Login/Login";
import DataUser from "./components/DataUser/DataUser";
import { useContext } from "react";
import FormContext from "./context/FormContext";

function App() {
  const { currentPage } = useContext(FormContext);

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
