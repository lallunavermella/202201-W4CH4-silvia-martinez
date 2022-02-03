import { useState } from "react";
import FormContext from "./FormContext";

const FormContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  return (
    <FormContext.Provider value={{ name, setName }}>
      {children}
    </FormContext.Provider>
  );
};
export default FormContextProvider;
