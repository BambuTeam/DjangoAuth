import React from "react";
import { StepComponentProps } from "react-step-builder";

const Step3 = (props: StepComponentProps) => {
    return (
        <div>
            <input
                name="fname"
                value={props.getState("fname", "")}
                onChange={props.handleChange}
            />
            <input
                name="lname"
                value={props.getState("lname", "")}
                onChange={props.handleChange}
            />

            <button onClick={props.prev}>Previous</button>
            <button onClick={props.next}>Next</button>
        </div>
    );
};

export default Step3;