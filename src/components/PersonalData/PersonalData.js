import { useContext } from "react";
import FormContext from "../../context/FormContext";
import Buttons from "../Buttons/Buttons";

const PersonalData = () => {
  const { name, setName } = useContext(FormContext);
  const { lastname, setLastname } = useContext(FormContext);
  const { birthday, setBirthday } = useContext(FormContext);
  const { email, setEmail } = useContext(FormContext);

  return (
    <>
      <h2>Data User</h2>
      <form className="form-data flex-column">
        <div className="form-block d-flex align-items-center">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </div>
        <div className="form-block d-flex align-items-center">
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastname"
            placeholder="Your Last Name"
            onChange={(event) => setLastname(event.target.value)}
            value={lastname}
          />
        </div>
        <div className="form-block d-flex align-items-center">
          <label htmlFor="birthdate">Birth Date: </label>
          <input
            type="date"
            id="birthdate"
            placeholder="Your Birth Day"
            onChange={(event) => setBirthday(event.target.value)}
            value={birthday}
          />
        </div>
        <div className="form-block d-flex align-items-center">
          <label htmlFor="email">Email: </label>
          <input
            type="url"
            id="email"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </div>
        <Buttons />
      </form>
    </>
  );
};
export default PersonalData;
