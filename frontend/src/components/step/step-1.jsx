import React from "react";
import regular from "../../assets/img/regular.svg";
import custom from "../../assets/img/custom.svg";
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import { StepComponentProps } from "react-step-builder";


function Step1(props: StepComponentProps) {
    

    const handleClicDropOf = ()=>{
        var button = document.querySelector('#btn-regular-order');
        var cajas = document.querySelectorAll('.step-box-content');
        cajas.forEach((el)=>el.classList.remove('active'));
        button.classList.add('active');
        document.getElementById("rd-regular-order").checked = true;
    }
    const handleClicCustomORder = () => {
        var button = document.querySelector('#btn-custom-order');
        var cajas = document.querySelectorAll('.step-box-content');
        cajas.forEach((el)=>el.classList.remove('active'));
        button.classList.add('active');
        document.getElementById("rd-custom-order").checked = true;
    }
    
        return (
        <div className="multisteps-form__panel js-active" data-animation="slideHorz" >
                {/* div 1 */}
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content">
                            <div className="step-inner-content">
                                <div className="nameshape">
                                    <span className="step-no">[ Welcome ] {props.user} {props.mail} <h1> </h1></span>
                                    <p></p>
                                </div>
                                <h2>Please select the type of your order.</h2>
                                <p>
                                    Thank you for your new order.
                                </p>

                                <div className="container-rush">
                                    <div className="rushsvg">
                                        <input 
                                        type="checkbox" 
                                        name="is_rush" 
                                        value = {props.getState('is_rush', 'rush')} 
                                        onChange={props.handleChange}
                                        /> <label></label>
                                    </div>
                                </div>

                                <div className="step-box">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label
                                                id = "btn-regular-order"
                                                onClick = {handleClicDropOf}
                                                className="step-box-content bg-white text-center relative-position active">
                                                <span className="step-box-icon img-vector">
                                                    <img src={regular} alt="" />
                                                </span>
                                                <span className="step-box-text">Regular Order</span>
                                                <span className="service-check-option">
                                                    <span>
                                                        <input 
                                                            type="radio" 
                                                            name="order_type"
                                                            id = "rd-regular-order"
                                                            defaultValue="Regular Order" 
                                                            defaultChecked
                                                            value = {props.getState('order_t', 'Regular Order')}
                                                            onChange={props.handleChange} 
                                                        />
                                                    </span>
                                                </span>

                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <label 
                                            id = "btn-custom-order"
                                            onClick = {handleClicCustomORder}
                                            className="step-box-content bg-white text-center relative-position">
                                                <span className="step-box-icon img-vector">
                                                    <img src={custom} alt="" />
                                                </span>
                                                <span className="step-box-text">Custom Order</span>
                                                <span className="service-check-option">
                                                    <span>
                                                        <input 
                                                        type="radio" 
                                                        id = "rd-custom-order"
                                                        name="order_type"
                                                        defaultValue="Custom Order"
                                                        value = {props.getState('order_t', 'Custom Order')}
                                                        onChange={props.handleChange} 
                                                        />
                                                    </span>
                                                </span>
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*
                    <!-- /.inner -->*/}
                    <div className="actions">
                        <ul>
                            
                            <li><button className="js-btn-prev" title="BACK" onClick={props.next}>NEXT <i className="fa fa-arrow-right"></i></button></li>    
                        </ul>
                    </div>
                </div>
            </div>
    );
}

const mapStateToProps = state =>{
    if(state.auth.user){
        return({
            user: state.auth.user.name,
            mail: state.auth.user.mail
        })
    }
}

export default connect (mapStateToProps)(Step1);    