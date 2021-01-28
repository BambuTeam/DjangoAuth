import React, { useState } from 'react';
import { Redirect, Link }from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../actions/auth';

import logo from "../assets/img/logogoya.svg";






const ResetPassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });

    const {email} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e=>{
        e.preventDefault();
        reset_password(email);
        setRequestSent(true);
    }
    if (requestSent){
        return <Redirect to = '/'/>
    }

    //is the user autehticaded
    //redirec then to the home page

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
                                <div className="fxt-transformY-50 fxt-transition-delay-1">
                                    <input 
                                        className="form-control" 
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        placeholder="Email" 
                                        onChange={e=>onChange(e)}
                                        required
                                    />
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
 

export default connect(null, { reset_password })(ResetPassword);
