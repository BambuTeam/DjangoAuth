import React from "react";
import { StepComponentProps } from "react-step-builder";

const Step2 = (props: StepComponentProps) => {
    return (
        <div>
            <input
                name="fname2"
                value={props.getState("fname2", "")}
                onChange={props.handleChange}
            />
            <input
                name="lname2"
                value={props.getState("lname2", "")}
                onChange={props.handleChange}
            />

            <button onClick={props.prev}>Previous</button>
            <button onClick={props.next}>Next</button>
        </div>
    );
};

export default Step2;