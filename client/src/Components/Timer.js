import React from "react";

export default function Timer({ hourDisplay, minutesDisplay, secondsDisplay }) {
    console.log(props);
    return (
        <div className="timerDisplay">
            <span className="timerDisplay_hour">{hourDisplay}</span>
            <span className="timerDisplay_minutes">{minutesDisplay}</span>
            <span className="timerDisplay_seconds">{secondsDisplay}</span>
        </div>
    );
}
