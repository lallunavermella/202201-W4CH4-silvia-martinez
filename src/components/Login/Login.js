import Buttons from "../Buttons/Buttons";

const Login = () => {
  return (
    <>
      <h2>Login</h2>
      <form className="form-data flex-column">
        <div className="form-block d-flex align-items-center">
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" placeholder="Your Username" />
        </div>
        <div className="form-block d-flex align-items-center">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="Pasword"
            placeholder="Pasword. Keep it secret"
          />
          <div className="form-block d-flex align-items-end">
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
            Remember password
          </div>
        </div>
        <Buttons />
      </form>
    </>
  );
};
export default Login;
