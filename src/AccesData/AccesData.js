const AccesData = () => {
  return (
    <>
      <h2>Data User</h2>
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
        </div>
        <div className="form-block d-flex align-items-center">
          <label htmlFor="password">Repeat Password: </label>
          <input
            type="password"
            id="password"
            placeholder="Please Repeat your Password"
          />
        </div>

        <div className="form-block ">
          <button type="submit" className="btn btn-outline-primary ">
            Previous
          </button>
        </div>
        <div className="form-block align-items-end">
          <button type="submit" className="btn btn-outline-primary ">
            Next
          </button>
        </div>
      </form>
    </>
  );
};
export default AccesData;
