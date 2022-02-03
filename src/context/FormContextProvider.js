import FormContext from "./FormContext";

const FormContextProvider = ({ children }) => {
  return <FormContext.Provider value={""}>{children}</FormContext.Provider>;
};
export default FormContextProvider;
