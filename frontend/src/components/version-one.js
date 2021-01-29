import React from "react";
import { connect } from 'react-redux'
import { Steps, Step } from "react-step-builder";
import { Redirect } from 'react-router-dom'
import Step1 from "./step/step-1";
import Step2 from "./step/step-2";
import Step3 from "./step/step-3";
import Step4 from "./step/step-4";


import svg from '../../src/assets/img/sideimg.svg';


function VersionOne(isAuthenticated, username, usermail) {


    if (!isAuthenticated){
        return <Redirect to = '/'/>
    }

    
    var username = username;

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

                
                    <Steps >
                        <Step component={Step1} />
                        <Step component={Step2} />
                        <Step component={Step3} />
                        <Step component={Step4} />

                    </Steps>
                    </div>

            </div>
  );
}

const mapStateToProps = state =>{
    if(state.auth.user){
        return({
            isAuthenticated: state.auth.isAuthenticated,
            unsername: state.auth.user.name,
            usermail: state.auth.user.mail
            
        })
    }
    return({
    isAuthenticated: state.auth.isAuthenticated,
    unsername: null,
    usermail: null
    })
}


export default connect(mapStateToProps)(VersionOne);