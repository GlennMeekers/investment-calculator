import { useState } from "react";
import Header from "./components/Header";
import InputTable from "./components/InputTable";
import OutputTable from "./components/OutputTable";

function App() {
  const INITIAL_FORM_DATA = {
    initialInvestment: 5000,
    annualInvestment: 500,
    expectedReturn: 5,
    duration: 10,
  };
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const inputIsValid = formData.duration > 0;

  function inputHandler(inputIdentifier, newValue) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <InputTable onInputChange={inputHandler} formData={formData} />
      {inputIsValid ? (
        <OutputTable formData={formData} />
      ) : (
        <p className="center">A minimum 1 year duration is required.</p>
      )}
    </>
  );
}

export default App;
