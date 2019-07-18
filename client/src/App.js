import React, { Component } from 'react';
import 'react-table/react-table.css';
import Timer from './Components/Timer';
import SalaryForm from './Components/SalaryForm';
import Table from './Components/Table';
import './App.css';

class App extends Component {
    state = {
        salaryInput: '',
        hours: '',
        minutes: '',
        seconds: '',
        salary: null,
        isPlaying: false,
        moneyMade: 0,
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };

    calcSalaryTime = value => {
        const moneyPerTime = {
            perMonth: (value / 12).toFixed(2),
            perWeek: (value / 52).toFixed(2),
            perHour: (value / 2080).toFixed(2),
            perMin: (value / 124800).toFixed(2),
            perSecond: (value / 7488000).toFixed(3)
        };

        const { perHour, perMin, perSecond } = moneyPerTime;

        this.setState({
            seconds: perSecond,
            minutes: perMin,
            hours: perHour
        });
    };

    handleChange = value => {
        this.setState({ salaryInput: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { salary } = event.target;
        this.setState(
            { isPlaying: true, salary: salary.value },

            () => {
                this.calcSalaryTime(this.state.salary);
            }
        );
    };

    // TIMER
    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                moneyMade:
                    this.state.moneyMade + parseFloat(this.state.seconds),
                timerTime: Date.now() - this.state.timerStart
            });
        }, 1000);
    };

    stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
    };
    resetTimer = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0,
            moneyMade: 0
        });
    };
    // =================================================================================
    render() {
        // Chronometer logic
        const { timerTime } = this.state;
        let centiseconds = ('0' + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ('0' + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ('0' + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ('0' + Math.floor(timerTime / 3600000)).slice(-2);
        return (
            <div className="App">
                <SalaryForm
                    inputVal={this.state.salaryInput}
                    handleChange={e => this.handleChange(e.target.value)}
                    handleForm={e => this.handleSubmit(e)}
                />
                <Timer display={this.state} playing={this.state.isPlaying} />
                <div>
                    <span>
                        Money Made: {`\$${this.state.moneyMade.toFixed(3)}`}
                    </span>
                </div>
                <div className="Stopwatch-display">
                    {hours} : {minutes} : {seconds} : {centiseconds}
                    {this.state.timerOn === false &&
                        this.state.timerTime === 0 && (
                            <button onClick={this.startTimer}>Start</button>
                        )}
                    {this.state.timerOn === true && (
                        <button onClick={this.stopTimer}>Stop</button>
                    )}
                    {this.state.timerOn === false &&
                        this.state.timerTime > 0 && (
                            <button onClick={this.startTimer}>Resume</button>
                        )}
                    {this.state.timerOn === false &&
                        this.state.timerTime > 0 && (
                            <button onClick={this.resetTimer}>Reset</button>
                        )}
                </div>
            </div>
        );
    }
}

export default App;
