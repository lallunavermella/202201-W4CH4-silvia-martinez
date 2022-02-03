import { useContext } from "react";
import FormContext from "../../context/FormContext";

const DataUser = () => {
  const { name, lastName, birthdate, email, username, password } =
    useContext(FormContext);

  return (
    <>
      <h2>Data User</h2>
      <form className="form-data flex-column">
        <div className="form-block d-flex align-items-center">
          <h3> Name: {name} </h3>
        </div>
        <div className="form-block d-flex align-items-center">
          <h3>Last Name: {lastName} </h3>
        </div>
        <div className="form-block d-flex align-items-center">
          <h3>Birth date: {birthdate}</h3>
        </div>
        <div className="form-block d-flex align-items-center">
          <h3>Email: {email}</h3>
        </div>
        <div className="form-block d-flex align-items-center">
          <h3>Username: {username}</h3>
        </div>
        <div className="form-block d-flex align-items-center">
          <h3>Password: {password}</h3>
        </div>
        <div className="form-block d-flex align-items-center">
          <button type="submit" className="btn btn-outline-primary ">
            Next
          </button>
        </div>
      </form>
    </>
  );
};
export default DataUser;
