import { useContext } from "react";
import FormContext from "../../context/FormContext";

const Buttons = () => {
  const { currentPage, setCurrentPage } = useContext(FormContext);
  return (
    <>
      <div className="from-block btn d-flex">
        <div className="form-block">
          <button
            className="btn btn-outline-primary"
            onClick={(event) => {
              event.preventDefault();
              if (currentPage === "AccesData") {
                setCurrentPage("PersonalData");
              }
              if (currentPage === "Login") {
                setCurrentPage("AccesData");
              }
              if (currentPage === "DataUser") {
                setCurrentPage("Login");
              }
            }}
          >
            Previous
          </button>
        </div>
        <div className="form-block d-flex align-items-end">
          <button
            className="btn btn-outline-primary d-flex align-items-end"
            onClick={(event) => {
              event.preventDefault();
              if (currentPage === "PersonalData") {
                setCurrentPage("AccesData");
              }
              if (currentPage === "AccesData") {
                setCurrentPage("Login");
              }
              if (currentPage === "Login") {
                setCurrentPage("DataUser");
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Buttons;
