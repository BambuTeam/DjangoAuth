import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Layout from './hocs/Layout'
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPassword';


import { Provider } from 'react-redux'
import store from './store';

const App = ()=>(
    <Provider store = {store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path ='/' component={Home}/>
                    <Route exact path ='/login' component={Login}/>
                    <Route exact path ='/reset-password' component={ResetPassword}/>
                    <Route exact path ='/signup' component={Signup}/>
                    <Route exact path ='/activate/:uid/:token' component={Activate}/>
                    <Route exact path ='/Password/reset/configm/:uid/:token' component={ResetPasswordConfirm}/>
                </Switch>
            </Layout>     
        </Router>
    </Provider>
    
)

export default App;