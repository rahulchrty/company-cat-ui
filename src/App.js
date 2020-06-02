import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Catalogue from './components/Catalogue/Catalogue';
import CatalogueDetails from './components/CatalogueDetails/CatalogueDetails';
import {Layout} from './components/Layout'
import EditCompanyDetails from './components/EditCompanyDetails/EditCompanyDetails';

class App extends Component {
  render() {
      return (
        <React.Fragment>
        <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Catalogue}/>
            <Route path="/details" component={CatalogueDetails}/>
            <Route path="/editDetails" component={EditCompanyDetails}/>
          </Switch>
        </Router>
        </Layout>
      </React.Fragment>
      )
  }
}
export default App;
