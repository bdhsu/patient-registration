import React from 'react';

// Libraries
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Components
import Landing from 'components/Landing';
import Register from 'components/Register';
import Admin from 'components/Admin';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={props => <Landing {...props} />} />
                <Route exact path="/register">
                    <Redirect to="/register/step0" />
                </Route>
                <Route path="/register/:step" render={props => <Register {...props} />} />
                <Route path="/admin" render={props => <Admin {...props} />} />
            </Switch>
        </Router>
    );
}

export default App;
