import React from "react";

import { Steps, Step } from "react-step-builder";
import Step1 from "./step/step-1";
import Step2 from "./step/step-2";
import Step3 from "./step/step-3";

import svg from '../../src/assets/img/sideimg.svg';


function VersionOne() {
  return (


    <div className="wrapper">
                <div className="steps-area steps-area-fixed">
                    <div className="image-holder">

                        <img src={svg} alt="" />
                    </div>
                    <div className="steps clearfix">
                        <ul className="tablist multisteps-form__progress">
                            <li className="multisteps-form__progress-btn js-active current">
                                <span>1</span>
                            </li>
                            <li className="multisteps-form__progress-btn">
                                <span>2</span>
                            </li>
                            <li className="multisteps-form__progress-btn">
                                <span>3</span>
                            </li>
                        
                        </ul>
                    </div>
                </div>
                <div className="multisteps-form__form" >

                
                    <Steps>
                        <Step component={Step1} />
                        <Step component={Step2} />
                        <Step component={Step3} />
                    </Steps>
                    </div>

            </div>
  );
}

export default VersionOne;