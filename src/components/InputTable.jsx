export default function InputTable({ onInputChange }) {
  return (
    <>
      <div id="user-input" className="input-group">
        <div>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            name="initialInvestment"
            onChange={onInputChange}
            type="number"
          />
        </div>
        <div>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            name="annualInvestment"
            onChange={onInputChange}
            type="number"
          />
        </div>
        <div>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input name="expectedReturn" onChange={onInputChange} type="number" />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input name="duration" onChange={onInputChange} type="number" />
        </div>
      </div>
    </>
  );
}
