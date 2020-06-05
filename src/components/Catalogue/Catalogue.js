import React, {Component} from 'react';
import CatalogueDesign from '../CatalogueDesign/CatalogueDesign'
import UploadFile from '../UploadFile/UploadFile';
import { post } from 'axios';


class Catalogue extends Component {
  constructor(props) {
    super(props);
    this.DeleteCatalogue = this.DeleteCatalogue.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
    this.state = { catalogues: [] };
  }
  render() {
      return (
        <React.Fragment>
            <UploadFile fileUpload = {this.fileUpload}/>
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
  fileUpload(file)
  {
    const url = 'http://localhost:50449/api/catalogue';
    const formData = new FormData();
    formData.append('catalogueFile',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    post(url, formData,config).then((response)=>{
        this.componentDidMount();
        console.log(response.data);
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