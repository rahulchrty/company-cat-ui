import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {Row, Col }from 'react-bootstrap';

class CatalogueDesign extends Component {
    constructor(props) {
        super(props);
    }
  render() {
      return (
        <React.Fragment>
            <Card>
                <Card.Header>
                <Row>
                    <Col>{this.props.catalogue.catalogueId}</Col>
                    <Button onClick={() => this.props.DeleteCatalogue(this.props.catalogue.catalogueId)}>Delete</Button>
                </Row>
                </Card.Header>
                <Card.Body>
                    <Link to={{
                        pathname: '/details',
                        state: {
                            catalogueId : this.props.catalogue.catalogueId
                        }
                    }}>
                    {this.props.catalogue.fileName}
                    </Link>
                </Card.Body>
            </Card>
        </React.Fragment>
      )
  }
}

export default CatalogueDesign;