import React, {Component} from 'react';
import Table from 'react-bootstrap/Table'
import TableBody from '../TableBody/TableBody';
import { Row, Col }from 'react-bootstrap';

class CatalogueDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { companyDetails: [], catalogueId: '', exportLink : '' };
      }
  render() {
      return (
        <React.Fragment>
            <Row><Col></Col></Row>
            <Row>
                <Col>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>SL</th>
                        <th>company Name</th>
                        <th>Sector</th>
                        <th>Sub-Sector</th>
                        <th>Region</th>
                        <th>No. of Employees</th>
                        <th>Total Revenues ($)</th>
                        <th>website</th>
                        <th></th>
                    </tr>
                </thead>
                {
                    this.state.companyDetails.map((eachCompany, index) => {
                        return (
                        <React.Fragment key={index}>
                            <TableBody CompanyDetails={eachCompany} index = {index} catalogueId = {this.state.catalogueId}/>
                        </React.Fragment>
                        )
                    })
                }
            </Table>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <a href={this.state.exportLink} className="btn btn-primary">Export</a>
            </Row>
        </React.Fragment>
      )
  }
  componentDidMount() {
        //const {handle} = this.props.match.params;
        const {catalogueId} = this.props.location.state;
        let url = "http://localhost:50449/api/catalogue/" + catalogueId;
        fetch(url)
        .then(res => res.json())
        .then((data) => {
            this.setState({ companyDetails: data.companyDetails})
            this.setState({ catalogueId: data.catalogueId})
            this.setState({ exportLink: 'http://localhost:50449/api/catalogue/Export?catalogueId=' + data.catalogueId})
        })
        .catch(console.log)
    }
}

export default CatalogueDetails;