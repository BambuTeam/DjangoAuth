import React from "react";
import { StepComponentProps } from "react-step-builder";



function Step2(props: StepComponentProps ) {
    var step3 = document.querySelector('#root > div > div.wrapper > div.steps-area.steps-area-fixed > div.steps.clearfix > ul > li:nth-child(3)');
    var step1 = document.querySelector('#root > div > div.wrapper > div.steps-area.steps-area-fixed > div.steps.clearfix > ul > li:nth-child(1)');
    var step2 = document.querySelector('#root > div > div.wrapper > div.steps-area.steps-area-fixed > div.steps.clearfix > ul > li:nth-child(2)');
    step2.classList.add('js-active');
    step1.classList.add('current')
    step1.classList.remove('current');
    step1.classList.add('js-active');
    step3.classList.remove('current');
    step3.classList.remove('js-active');

    try {
        var customfield = document.querySelector('#custom-field')
    if (props.state.is_custom == 'true'){
        customfield.style.display = "block";
    }
    else{
        customfield.style.display="none"
    }

    } catch (error) {   
        console.error(error)
    }
    


    return (
        <div className="multisteps-form__panel" data-animation="slideHorz">
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content col-12">
                            <div className="step-inner-content">
                                <span className="step-no ">Step 2</span>
                                <hr></hr>
                                <br></br>
                                <div className="step-progress float-right">
                                    <span>2 of 3 completed</span>
                                    <div className="step-progress-bar">
                                        <div className="progress">
                                            <div className="progress-bar" style={{width: '40%' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <h2>Ordering</h2>
                                <div className="form-inner-area">
                                    
                                    <input 
                                    id="custom-field"
                                    type="text" 
                                    aria-required="true"
                                    name="custom_order_text" 
                                    class="form-control" 
                                    placeholder="Description of Order "
                                    value = {props.getState('custom_order_text', '') }
                                    onChange={props.handleChange} 
                                    required="true"
                                    />

                                    <input 
                                    type="date" 
                                    aria-required="true"
                                    name="order_date"
                                    value = {props.getState('order_date', '')}
                                    onChange={props.handleChange} 
                                    />
                                    <input 
                                    type="time" 
                                    id="hour" 
                                    name="hour" 
                                    min="09:00" 
                                    max="24:00"
                                    value = {props.getState('hour', '')}
                                    onChange={props.handleChange} 
                                     />
                                    <div className="comment-box">
                                        <div>
                                            <p><i className="fas fa-shopping-basket"></i> Quantity Basket</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-lg-4 col-sm-12">
                                                <input 
                                                type="number" 
                                                id="give_away" 
                                                name="give_away" 
                                                min="0" 
                                                max="100"
                                                placeholder="Give Away (S)" 
                                                value = {props.getState('give_away', '')}
                                                onChange={props.handleChange} 
                                                />
                                            </div>
                                            <div className="col-lg-4 col-lg-4 col-sm-12">
                                                <input 
                                                type="number" 
                                                id="vip" 
                                                name="vip" 
                                                min="0" 
                                                max="100"
                                                placeholder="V.I.P. (M)" 
                                                value = {props.getState('vip', '')}
                                                onChange={props.handleChange} 
                                                />
                                            </div>
                                            <div className="col-lg-4 col-lg-4 col-sm-12">
                                                <input 
                                                type="number" 
                                                id="show_baskets" 
                                                name="show_baskets" 
                                                min="0" 
                                                max="100"
                                                placeholder="Show Basket (L)" 
                                                value = {props.getState('show_baskets', '')}
                                                onChange={props.handleChange} 
                                                /> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="comment-box">
                                        <p><i class="far fa-comment-alt"></i> Notes</p>
                                        <textarea name="full_comments" placeholder="Write here"
                                        value = {props.getState('full_comments', '')}
                                        onChange={props.handleChange} ></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="actions">
                        <ul>
                            <li><button className="js-btn-prev" title="BACK" onClick={props.prev}>BACK <i className="fa fa-arrow-left"></i></button></li>
                            <li><button className="js-btn-next" title="NEXT" onClick={props.next}>NEXT <i className="fa fa-arrow-right"></i></button></li>                      
                        </ul>
                    </div>
                    </div>
        </div>
        
    );
}

export default Step2;