import React from "react";

export default function SalaryForm({ inputVal, handleChange, handleForm }) {
    return (
        <div className="salary_form">
            <form onSubmit={handleForm}>
                
                <input
                    name="salary"
                    placeholder="insert annual income Ex: 50000"
                    value={inputVal}
                    onChange={handleChange}
                />
                <button type="submit">Calculate</button>
            </form>
        </div>
    );
}
