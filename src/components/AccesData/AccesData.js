import { useContext } from "react";
import FormContext from "../../context/FormContext";

const AccesData = () => {
  const [username, setUsername] = useContext(FormContext);
  const [password, setPassword] = useContext(FormContext);
  return (
    <>
      <h2>Username and Password</h2>
      <form className="form-data flex-column">
        <div className="form-block d-flex align-items-center">
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            placeholder="Your Username"
            onChange={(event) => setUsername(event.target.value)}
            value={username}
          />
        </div>
        <div className="form-block d-flex align-items-center">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="Pasword"
            placeholder="Pasword. Keep it secret"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </div>
        <div className="form-block d-flex align-items-center">
          <label htmlFor="password">Repeat Password: </label>
          <input
            type="password"
            id="password"
            placeholder="Please Repeat your Password"
          />
        </div>

        <div className="from-block btn d-flex">
          <div className="form-block">
            <button type="submit" className="btn btn-outline-primary ">
              Previous
            </button>
          </div>
          <div className="form-block d-flex align-items-end">
            <button
              type="submit"
              className="btn btn-outline-primary d-flex align-items-end"
            >
              Acces
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
export default AccesData;
