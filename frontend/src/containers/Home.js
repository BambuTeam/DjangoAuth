import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = ({ isAuthenticated, unsername, usermail }) => {
        if (!isAuthenticated){
        return <Redirect to = '/'/>
    }



    return(
    <div className='container'>
        <div className='jumbotron'>
            <h1 className='display-4'>Hello!</h1>
            <p className='lead'>what would you like to do.</p>
            <hr className='my-4' />
            <h1>User</h1>
            <p></p>
            <h2>{unsername}</h2>  
            <p>{usermail}</p>
            
            


            
            <Link className='btn btn-primary btn-lg' to = '/step'>Place a order</Link>
        </div>
    </div>
    );
};


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


export default connect(mapStateToProps)(Home);
