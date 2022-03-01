import React from "react";
import { useRecoilState } from "recoil";

import { counterState } from "../counterState";
import { incrementByState } from "../incrementByState";

export const CounterButton2 = () => {
    const [numberOfClicks, setNumberOfClicks] = useRecoilState(counterState);
    const [incrementBy, setIncrementBy] = useRecoilState(incrementByState);
    return (
        <>
            <p>You have clicked the button {numberOfClicks} times.</p>
            <label>
                increment by:
                <input
                    value={incrementBy}
                    onChange={(e) => setIncrementBy(Number(e.target.value))}
                    type="number"
                />
            </label>
            <button
                onClick={() => setNumberOfClicks(numberOfClicks + incrementBy)}
            >
                Click2
            </button>
        </>
    );
};
