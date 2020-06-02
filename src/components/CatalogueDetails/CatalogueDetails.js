import React, {Component} from 'react';

class CatalogueDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { cataloguesDetails: [] };
      }
  render() {
      return (
        <React.Fragment>
            Hello
        </React.Fragment>
      )
  }
  componentDidMount() {
        const {handle} = this.props.match.params;
        const {catalogueId} = this.props.location.state;
        console.log(catalogueId);
        let url = "http://localhost:50449/api/catalogue/" + catalogueId;
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            this.setState({ cataloguesDetails: data })
            console.log(data);
        })
        .catch(console.log)
    }
}

export default CatalogueDetails;