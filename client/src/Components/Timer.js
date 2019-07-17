import React from "react";

export default function Timer({
    display,
    playing
}) {
    return (
        <div
            style={{ display: !playing ? "none" : "inline" }}
            className="timerDisplay"
        >
            <h1 className="timerDisplay_hour">{`pay/hour \$${display.hours}`}</h1>
            <h1 className="timerDisplay_minutes">{`pay/min \$${display.minutes}`}</h1>
            <h1 className="timerDisplay_seconds">{`pay/sec \$${display.seconds}`}</h1>
        </div>
    );
}
