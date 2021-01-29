import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth'


const Navbar = ({ logout, isAuthenticated}) => {
    const guestLinks=()=>{

        <Fragment>
            <li className= 'nav-item'd>
                <Link className = 'nav-link' to='/login'>
                    Login 
                </Link>
            </li>
            <li>
                <Link className = 'nav-link' to='/login'>
                    Signup 
                </Link>    
            </li>
        </Fragment>

    };
    const authLinks =()=>(
            <li className= 'nav-item'd>
                <a className = 'nav-link' href='#!' onClick={ logout }>
                    Logout 
                </a>
            </li>

    );


        return(
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand">Batres Creative Services ® </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {isAuthenticated ? authLinks() : guestLinks()}
                </ul>
              
            </div>
            </nav>
            </div>

        )
};

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps,{ logout })(Navbar)
