export default function InputTable({ onInputChange, formData }) {
  return (
    <>
      <div id="user-input" className="input-group">
        <div>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            name="initialInvestment"
            value={formData.initialInvestment}
            onChange={(event) =>
              onInputChange("initialInvestment", event.target.value)
            }
            type="number"
            step="5"
          />
        </div>
        <div>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            name="annualInvestment"
            value={formData.annualInvestment}
            onChange={(event) =>
              onInputChange("annualInvestment", event.target.value)
            }
            type="number"
            step="5"
          />
        </div>
        <div>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            name="expectedReturn"
            value={formData.expectedReturn}
            onChange={(event) =>
              onInputChange("expectedReturn", event.target.value)
            }
            type="number"
          />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input
            name="duration"
            value={formData.duration}
            onChange={(event) => onInputChange("duration", event.target.value)}
            type="number"
          />
        </div>
      </div>
    </>
  );
}
