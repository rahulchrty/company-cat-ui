import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Catalogue} from './Catalogue';
import {Layout} from './components/Layout'

class App extends Component {
  render() {
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
      )
  }

  state = {
      contacts: []
  };

  componentDidMount() {
      fetch('http://localhost:50449/api/catalogue')
          .then(res => res.json())
          .then((data) => {
              this.setState({ contacts: data })
              console.log(data);
          })
          .catch(console.log)
  }
}
export default App;
