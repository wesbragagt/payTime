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
            <h1 className="timerDisplay_hour">{`/hour \$${display.hours}`}</h1>
            <h1 className="timerDisplay_minutes">{`/min \$${display.minutes}`}</h1>
            <h1 className="timerDisplay_seconds">{`/sec \$${display.seconds}`}</h1>
        </div>
    );
}
