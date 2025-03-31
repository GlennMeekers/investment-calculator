import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function OutputTable({ formData }) {
  const outputData = calculateInvestmentResults(formData);
  const initialInvestment =
    outputData[0].valueEndOfYear -
    outputData[0].interest -
    outputData[0].annualInvestment;
  //   console.log(outputData);

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {outputData.map((resultRow) => {
            const totalInterest =
              resultRow.valueEndOfYear -
              resultRow.annualInvestment * resultRow.year -
              initialInvestment;

            const totalAmountInvested =
              resultRow.valueEndOfYear - totalInterest;

            return (
              <tr key={resultRow.year}>
                <td>{resultRow.year}</td>
                <td>{formatter.format(resultRow.valueEndOfYear)}</td>
                <td>{formatter.format(resultRow.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
