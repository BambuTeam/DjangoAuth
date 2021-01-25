import React from "react";
import { StepComponentProps } from "react-step-builder";
import '../../../../frontend/src/assets/scss/_wizard.scss';




const Step1 = (props: StepComponentProps) => {
    return (
        <div>
            <input
                name="fname2"
                value={props.getState("fname", "")}
                onChange={props.handleChange}
            />
            <input
                name="lname2"
                value={props.getState("lname", "")}
                onChange={props.handleChange}
            />

            <button onClick={props.prev}>Previous</button>
            <button onClick={props.next}>Next</button>
        </div>
    );
};

export default Step1;