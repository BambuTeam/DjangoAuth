import React, { useState } from 'react';
import { Redirect, Link }from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirmation } from '../actions/auth';

import logo from "../assets/img/logogoya.svg";






const ResetPasswordConfirm = ({match, reset_password_confirmation }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password:''
    });

    const {new_password, re_new_password} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e=>{
        e.preventDefault();

        const uid = match.params.uid;
        const token = match.params.uid;
        

        reset_password_confirmation(uid, token, new_password, re_new_password);
        setRequestSent(true);
    }
    if (requestSent){
        return <Redirect to = '/'/>
    }

    return(

        <section className="fxt-template-animation fxt-template-layout8 login-bk" data-bg-image="img/figure/bg8-l.jpg">
                <div className="fxt-content ">
                    <div className="fxt-header">
                        <a  className="fxt-logo" href = "#"><img src={ logo } alt="Logo" /></a>
                    </div>
                    <div className="lottie">
            
                    </div>
                    
                    <div className="fxt-form">
                        <p>Request Password Reset:</p>
                        <form onSubmit={e=>onSubmit(e)}>
                        <div className="form-group">
                                <div className="fxt-transformY-50 fxt-transition-delay-2">
                                    <input 
                                        id="new_password" 
                                        type="password" 
                                        className="form-control" 
                                        name="new_password"
                                        placeholder="New Password" 
                                        required
                                        value={new_password}
                                        onChange={e=>onChange(e)}
                                        minLength = '6'
                                    />
                                    <i toggle="#password" className="fa fa-fw fa-eye toggle-password field-icon" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="fxt-transformY-50 fxt-transition-delay-2">
                                    <input 
                                        id="re_ew_password" 
                                        type="password" 
                                        className="form-control" 
                                        name="re_new_password"
                                        placeholder="Confirm Password" 
                                        required
                                        value={re_new_password}
                                        onChange={e=>onChange(e)}
                                        minLength = '6'
                                    />
                                    <i toggle="#password" className="fa fa-fw fa-eye toggle-password field-icon" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="fxt-transformY-50 fxt-transition-delay-4">
                                    <button type="submit" className="fxt-btn-fill">Reset</button>
                                </div>
                            </div>


                        
                            
                        </form>
                    </div>
                    <div className="fxt-footer">
                        <div className="fxt-transformY-50 fxt-transition-delay-9">
                            <p>Do you already have an account?
                                <Link to="/login" className="switcher-text2 inline-text">Loging</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

    
    );



};
 

export default connect(null, { reset_password_confirmation })(ResetPasswordConfirm);
