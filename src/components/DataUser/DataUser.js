import { useContext } from "react";
import FormContext from "../../context/FormContext";

const DataUser = () => {
  const { name, lastname, birthday, email, username, password } =
    useContext(FormContext);

  return (
    <>
      <h2>Data User</h2>

      <div className="form-block d-flex align-items-center">
        <h3> Name: {name} </h3>
      </div>
      <div className="form-block d-flex align-items-center">
        <h3>Last Name: {lastname} </h3>
      </div>
      <div className="form-block d-flex align-items-center">
        <h3>Birth date: {birthday}</h3>
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
    </>
  );
};
export default DataUser;
