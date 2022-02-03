const PersonalData = () => {
  return (
    <>
      <h2>Data User</h2>
      <form className="form-data flex-column">
        <div className="form-block d-flex align-items-center">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" placeholder="Your Name" />
        </div>
        <div className="form-block d-flex align-items-center">
          <label htmlFor="lastName">Last Name: </label>
          <input type="text" id="lastname" placeholder="Your Last Name" />
        </div>
        <div className="form-block d-flex align-items-center">
          <label htmlFor="birthdate">Birth Date: </label>
          <input type="date" id="birthdate" placeholder="Your Birth Day" />
        </div>
        <div className="form-block d-flex align-items-center">
          <label htmlFor="email">Email: </label>
          <input type="url" id="email" placeholder="Enter email" />
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
export default PersonalData;
