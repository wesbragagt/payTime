import React, { Component } from "react";

import Timer from "./Components/Timer";
import SalaryForm from "./Components/SalaryForm";

import "./App.css";

class App extends Component {
    state = {
        seconds: 0,
        minutes: 0,
        hours: 0,
        salaryInput: "",
        salary: null,
        isPlaying: false
    };

    componentDidUpdate() {
        console.log(this.state);
    }

    addOne = currentValue => {
        this.setState({
            timer: (currentValue += 1)
        });
    };

    startTimer = () => {
        setInterval(() => this.chronometer, 1000);
    };

    calcSalaryTime = value => {
        const moneyPerTime = {
            hour: (value / 2080).toFixed(2),
            min: (value / 124800).toFixed(2),
            second: (value / 7488000).toFixed(2)
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
        this.setState({ isPlaying: true, salary: salary.value }, () => {
            this.calcSalaryTime(this.state.salary);
        });
    };

    chronometer = () => {
        const { seconds, minutes, hours } = this.state;
        if (seconds < 10) {
            this.setState(previewsState => {});
        }

        if (seconds > 59) {
            seconds = `00`;
            minutes++;

            if (minutes < 10) minutes = `0` + minutes;
        }

        if (minutes > 59) {
            minutes = `00`;
            hours++;

            if (hours < 10) hours = `0` + hours;
        }
    };
    render() {
        return (
            <div className="App">
                <SalaryForm
                    inputVal={this.state.salaryInput}
                    handleChange={e => this.handleChange(e.target.value)}
                    handleForm={e => this.handleSubmit(e)}
                />
                <Timer display={this.state} playing={this.state.isPlaying} />
            </div>
        );
    }
}

export default App;
