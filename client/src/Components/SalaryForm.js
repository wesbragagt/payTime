import React from "react";

export default function SalaryForm({ inputVal, handleChange, handleForm }) {
    return (
        <div className="salary_form">
            <form onSubmit={handleForm}>
                <label>Salary/Hour</label>
                <input
                    name="salary"
                    placeholder="$50,000"
                    value={inputVal}
                    onChange={handleChange}
                />
                <button type="submit">Start</button>
            </form>
        </div>
    );
}
