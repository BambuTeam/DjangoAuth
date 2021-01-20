import React from "react";

class StepThree extends React.Component {
    render() {
        return (
            <div className="multisteps-form__panel " data-animation="slideHorz">
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content col-12">
                            <div className="step-inner-content">
                                <span className="step-no bottom-line">Step 3</span>
                                <div className="step-progress float-right">
                                    <span>3 of 5 completed</span>
                                    <div className="step-progress-bar">
                                        <div className="progress">
                                            <div className="progress-bar" style={{width: '40%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <h2>Pick up information</h2>
                                <p>Please select the type of handle of your basket</p>
                                <div className="budget-area">
                                    <p>Optimization and Accessibility</p>
                                    <div className="opti-list">
                                        <ul className="d-md-flex">
                                            <li className="bg-white active"><input type="checkbox" name="code_opti1"
                                                    value="Pick Up" defaultChecked />Pick Up</li>
                                            <li className="bg-white"><input type="checkbox" name="code_opti2"
                                                    value="Deliver to GOYA" />Deliver to GOYA</li>
                                            <li className="bg-white"><input type="checkbox" name="code_opti3"
                                                    value="Drop Off" />Drop Off</li>
                                                    <li className="bg-white"><input type="checkbox" name="code_opti3"
                                                        value="FedEx" />FedEx</li>                                                    
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <div className="form-inner-area">
                                    <input type="date" />
                                    <input type="text" />


                                    </div>    
                                </div>    

                                
                                <div className="language-select">
                                    <p>I want to browse projects in the following languages: </p>
                                    <select name="languages">
                                        <option>English</option>
                                        <option>Arabic</option>
                                        <option>Spanish</option>
                                        <option>French</option>
                                    </select>
                                </div>
                                <div className="comment-box">
                                    <p><i className="fas fa-comments"></i> Write Somthing note</p>
                                    <textarea name="full_comments" placeholder="Write here"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="actions">
                    <ul>
                                    <li><span className="js-btn-prev" title="BACK"><i className="fa fa-arrow-left"></i> BACK </span></li>
                                    <li><button type="submit" title="SEND" htmlType = "submit">SUBMIT <i className="fa fa-arrow-right"></i></button></li>
                                </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default StepThree;