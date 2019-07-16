import React, { Component } from "react";

import SalaryForm from "./Components/SalaryForm";

import "./App.css";

class App extends Component {
    state = {
        seconds: 0,
        minutes: 0,
        hours: 0,
        salaryInput: "",
        salary: null
    };

    componentDidUpdate() {
        console.log(this.state);
    }

    addOne = currentValue => {
        this.setState({
            timer: (currentValue += 1)
        });
    };

    startTimer = currentValue => {
        setInterval(() => {
            this.setState({
                seconds: (currentValue += 1)
            });

            if (this.state.seconds > 60) {
                this.setState({
                    seconds: 0
                });
            }
        }, 1000);
    };

    calcSalaryTime = value => {
        const moneyPerTime = {
            hour: value / 52 / 40,
            min: value / 52 / 40 / 60,
            second: value / 52 / 40 / 60 / 60
        };

        const { hour, min, second } = moneyPerTime;

        this.setState({
            seconds: second,
            minutes: min,
            hours: hour
        });
    };

    handleChange = value => {
        this.setState({ salaryInput: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { salary } = event.target;
        // console.log(salary.value);
        this.setState(
            {
                salary: salary.value
            },

            () => {
                this.calcSalaryTime(this.state.salary);
            }
        );
    };
    render() {
        return (
            <div className="App">
                <SalaryForm
                    inputVal={this.state.salaryInput}
                    handleChange={e => this.handleChange(e.target.value)}
                    handleForm={e => this.handleSubmit(e)}
                />
            </div>
        );
    }
}

export default App;
