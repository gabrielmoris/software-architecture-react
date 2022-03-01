import React from "react";
import { useState } from "react";

export const CounterButton = () => {
    const [numberOfClicks, SetNumberOfClicks] = useState(0);
    const [incrementBy, SetIncrementBy] = useState(1);
    return (
        <>
            <p>You have clicked the button {numberOfClicks} times.</p>
            <label>
                increment by:
                <input
                    value={incrementBy}
                    onChange={(e) => SetIncrementBy(Number(e.target.value))}
                    type="number"
                />
            </label>
            <button onClick={() => SetNumberOfClicks(numberOfClicks + incrementBy)}>
                Click
            </button>
        </>
    );
};
