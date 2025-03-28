import { useState } from "react";
import Header from "./components/Header";
import InputTable from "./components/InputTable";
import OutputTable from "./components/OutputTable";
import { calculateInvestmentResults } from "./util/investment.js";

function App() {
  const [formData, setFormData] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,
  });

  let outputData = calculateInvestmentResults(formData);

  function inputHandler(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  return (
    <>
      <Header />
      <InputTable onInputChange={inputHandler} />
    </>
  );
}

export default App;
