import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Layout from './hocs/Layout'
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';





import { Provider } from 'react-redux'
import store from './store';
import VersionOne from './components/version-one';



const App = ()=>(
    <Provider store = {store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path ='/' component={Login}/>
                    <Route exact path ='/home' component={Home}/>
                    <Route exact path ='/login' component={Login}/>
                    <Route exact path ='/reset-password' component={ResetPassword}/>
                    <Route exact path ='/signup' component={Signup}/>
                    <Route exact path ='/activate/:uid/:token' component={Activate}/>
                    <Route exact path ='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm}/>
                    <Route exact path = '/step' component = {VersionOne} />
                </Switch>
            </Layout>     
        </Router>   
    </Provider>
    
)

export default App;
 