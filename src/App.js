import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Catalogue} from './Catalogue';
import {Layout} from './components/Layout'

function App() {
  return (
    <React.Fragment>
      <Layout>
      <Router>
        <Switch>
          <Route exact path="/" component={Catalogue}/>
        </Switch>
      </Router>
      </Layout>
    </React.Fragment>
  );
}
export default App;
