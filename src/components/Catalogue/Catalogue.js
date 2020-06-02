import React, {Component} from 'react';
import CatalogueDesign from '../CatalogueDesign/CatalogueDesign'


class Catalogue extends Component {
  constructor(props) {
    super(props);
    this.DeleteCatalogue = this.DeleteCatalogue.bind(this);
    this.state = { catalogues: [] };
  }
  render() {
      return (
        <React.Fragment>
            {
              this.state.catalogues.map((eachCatalogues, index) => {
                return (
                  <React.Fragment key={index}>
                    <CatalogueDesign catalogue={eachCatalogues} DeleteCatalogue = {this.DeleteCatalogue}/>
                  </React.Fragment>
                )
              })
            }
        </React.Fragment>
      )
  }
  DeleteCatalogue(catalogueId)
  {
      let url = "http://localhost:50449/api/catalogue/" + catalogueId ;
      const requestOptions = {
          method: 'DELETE'
        };
        fetch(url, requestOptions).then(() => {
          this.componentDidMount();
        });
  }
  componentDidMount() {
      fetch('http://localhost:50449/api/catalogue')
          .then(res => res.json())
          .then((data) => {
              this.setState({ catalogues: data })
          })
          .catch(console.log)
  }
}

export default Catalogue;