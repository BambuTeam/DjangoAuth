import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth'


const Navbar = ({}) => {
    const guestLinks=()=>{

    };
    const authLinks =()=>{

    };
        return(
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand">Sistem</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" >Action</a>
                    <a className="dropdown-item" >Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" >Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled"  tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
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
