import { useState } from "react";
import FormContext from "./FormContext";

const FormContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentPage, setCurrentPage] = useState("PersonalData");
  return (
    <FormContext.Provider
      value={{
        name,
        setName,
        lastname,
        setLastname,
        birthday,
        setBirthday,
        email,
        setEmail,
        username,
        setUsername,
        password,
        setPassword,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
export default FormContextProvider;
