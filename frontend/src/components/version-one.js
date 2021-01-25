import React, { version } from "react";

import { Steps, Step } from "react-step-builder";
import Step1 from "./step/step-1";
import Step2 from "./step/step-2";
import Step3 from "./step/step-3";

function VersionOne() {
  return (
    <div className="App">
      <Steps>
        <Step component={Step1} />
        <Step component={Step2} />
        <Step component={Step3} />
      </Steps>
    </div>
  );
}

export default VersionOne;