import AccesData from "./components/AccesData/AccesData";
import "./App.css";
import PersonalData from "./components/PersonalData/PersonalData";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <PersonalData />
      <AccesData />
      <Login />
    </div>
  );
}

export default App;
