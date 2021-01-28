import React from "react";
import regular from "../../assets/img/regular.svg";
import custom from "../../assets/img/custom.svg";


function Step1(props) {
    return (
        <div className="multisteps-form__panel js-active" data-animation="slideHorz" >
                {/* div 1 */}
                <div className="wizard-forms">
                    <div className="inner pb-100 clearfix">
                        <div className="form-content pera-content">
                            <div className="step-inner-content">
                                <div className="nameshape">
                                    <span className="step-no">[ Welcome ]<h1> Nombre de Usuario</h1></span>
                                </div>
                                <h2>Please select the type of your order.</h2>
                                <p>
                                    Thank you for your new order.
                                </p>

                                <div className="container-rush">
                                    <div className="rushsvg">
                                        <input type="checkbox" value="Rush" name="is_rush" /> <label></label>
                                    </div>
                                </div>

                                <div className="step-box">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label
                                                className="step-box-content bg-white text-center relative-position active">
                                                <span className="step-box-icon img-vector">
                                                    <img src={regular} alt="" />
                                                </span>
                                                <span className="step-box-text">Regular Order</span>
                                                <span className="service-check-option">
                                                    <span>
                                                        <input type="radio" name="order_type"
                                                            defaultValue="Regular Order" defaultChecked />
                                                    </span>
                                                </span>

                                            </label>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="step-box-content bg-white text-center relative-position">
                                                <span className="step-box-icon img-vector">
                                                    <img src={custom} alt="" />
                                                </span>
                                                <span className="step-box-text">Custom Order</span>
                                                <span className="service-check-option">
                                                    <span>
                                                        <input type="radio" name="order_type"
                                                            defaultValue="Custom Order" />
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
    <p>{ this.props.username }</p>
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
    );
}

export default Step1;