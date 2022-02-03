import { useState } from "react";
import FormContext from "./FormContext";

const FormContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [brithday, setBirthday] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <FormContext.Provider
      value={{
        name,
        setName,
        lastname,
        setLastname,
        brithday,
        setBirthday,
        email,
        setEmail,
        username,
        setUsername,
        password,
        setPassword,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
export default FormContextProvider;
