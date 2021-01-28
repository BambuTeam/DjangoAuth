import React, { useState } from 'react';
import { Redirect, Link }from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

import logo from "../assets/img/logogoya.svg";






const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password:''
    });

    const {email, password} = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e=>{
        e.preventDefault();
        login(email, password)
    }
    if (isAuthenticated){
        return <Redirect to = '/home'/>
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
                        <p>Login into your account</p>
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
                                <div className="fxt-transformY-50 fxt-transition-delay-2">
                                    <input 
                                        id="password" 
                                        type="password" 
                                        className="form-control" 
                                        name="password"
                                        placeholder="********" 
                                        required
                                        value={password}
                                        onChange={e=>onChange(e)}
                                        minLength = '6'
                                    />
                                    <i toggle="#password" className="fa fa-fw fa-eye toggle-password field-icon" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="fxt-transformY-50 fxt-transition-delay-4">
                                    <button type="submit" className="fxt-btn-fill">Login</button>
                                </div>
                            </div>


                            <div className="form-group">
                                <div className="fxt-transformY-50 fxt-transition-delay-3">
                                    <div className="fxt-checkbox-area">
                                        <div className="checkbox">
                                            <input id="checkbox1" type="checkbox" />
                                            <label htmlFor="checkbox1">Keep me logged in</label>
                                        </div>
                                        <Link to="/reset-password" className="switcher-text">Forgot Password</Link>
                                    </div>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                    
                </div>
            </section>

    
    );



};
 
const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);
