import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {Row, Col }from 'react-bootstrap';

class EditCompanyDetails extends Component {
    constructor(props) {
        super(props);
        this.state = 
        { 
            catalogueId: '', 
            companyId: '',
            companyName : '',
            sector: '',
            subSector: '',
            region: '',
            numberOfEmployees: '',
            totalRevenues: '',
            webSite:''
        };
        this.handleCompanyNameChange = this.handleCompanyNameChange.bind(this);
        this.handleSectorChange = this.handleSectorChange.bind(this);
        this.handleSubSectorChange = this.handleSubSectorChange.bind(this);
        this.handleRegionChange = this.handleRegionChange.bind(this);
        this.handleNumberOfEmployeesChange = this.handleNumberOfEmployeesChange.bind(this);
        this.handleTotalRevenuesChange = this.handleTotalRevenuesChange.bind(this);
        this.handleWebSiteChange = this.handleWebSiteChange.bind(this);

        this.UpdateCompanyDetails = this.UpdateCompanyDetails.bind(this);
      }
    handleCompanyNameChange(event) 
    {    
        this.setState({companyName: event.target.value});  
    }
    handleSectorChange(event) 
    {    
        this.setState({sector: event.target.value});  
    }
    handleSubSectorChange(event) 
    {    
        this.setState({subSector: event.target.value});  
    }
    handleRegionChange(event) 
    {    
        this.setState({region: event.target.value});  
    }
    handleNumberOfEmployeesChange(event) 
    {    
        this.setState({numberOfEmployees: event.target.value});  
    }
    handleTotalRevenuesChange(event) 
    {    
        this.setState({totalRevenues: event.target.value});  
    }
    handleWebSiteChange(event) 
    {    
        this.setState({webSite: event.target.value});  
    }

    UpdateCompanyDetails()
    {
        let url = "http://localhost:50449/api/catalogue/" + this.state.catalogueId + "/" + this.state.companyId;
        const payload = {
            companyName : this.state.companyName,
            sector: this.state.sector,
            subSector: this.state.subSector,
            region: this.state.region,
            numberOfEmployees: this.state.numberOfEmployees,
            totalRevenues: this.state.totalRevenues,
            webSite: this.state.webSite
        };
        fetch (url, {
            method: "PUT",
            headers: {"Content-type": "application/json", "accept": "*/*"},
            body: JSON.stringify(payload)
        }).then(() => {
            //redirect to another page
            console.log("Success");
        });
    }

    componentDidMount() {
        //const {handle} = this.props.match.params;
        const {catalogueId, companyDetails} = this.props.location.state;
        this.setState({ catalogueId: catalogueId})
        this.setState({ companyId: companyDetails.companyId})
        this.setState({ companyName: companyDetails.companyName})
        this.setState({ sector: companyDetails.sector})
        this.setState({ subSector: companyDetails.subSector})
        this.setState({ region: companyDetails.region})
        this.setState({ numberOfEmployees: companyDetails.numberOfEmployees})
        this.setState({ totalRevenues: companyDetails.totalRevenues})
        this.setState({ webSite: companyDetails.webSite})
        this.setState({ webSite: companyDetails.webSite})
    }
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                <Form.Group>
                    <Row>
                        <Col></Col>
                        <Col xs={2}><Form.Label>Company Name</Form.Label></Col>
                        <Col xs={4}><Form.Control type="text" placeholder="Company Name" value={this.state.companyName} onChange={this.handleCompanyNameChange}/></Col>
                        <Col></Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col></Col>
                        <Col xs={2}><Form.Label>Sector</Form.Label></Col>
                        <Col xs={4}><Form.Control type="text" placeholder="Sector" value={this.state.sector} onChange={this.handleSectorChange}/></Col>
                        <Col></Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col></Col>
                        <Col xs={2}><Form.Label>Sub-Sector</Form.Label></Col>
                        <Col xs={4}><Form.Control type="text" placeholder="Sub-Sector" value={this.state.subSector} onChange={this.handleSubSectorChange}/></Col>
                        <Col></Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col></Col>
                        <Col xs={2}><Form.Label>Region</Form.Label></Col>
                        <Col xs={4}><Form.Control type="text" placeholder="Region" value={this.state.region} onChange={this.handleRegionChange}/></Col>
                        <Col></Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col></Col>
                        <Col xs={2}><Form.Label>Number of Employees</Form.Label></Col>
                        <Col xs={4}><Form.Control type="text" placeholder="Number of Employees" value={this.state.numberOfEmployees} onChange={this.handleNumberOfEmployeesChange}/></Col>
                        <Col></Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col></Col>
                        <Col xs={2}><Form.Label>Total Revenues</Form.Label></Col>
                        <Col xs={4}><Form.Control type="text" placeholder="Total Revenues" value={this.state.totalRevenues} onChange={this.handleTotalRevenuesChange}/></Col>
                        <Col></Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col></Col>
                        <Col xs={2}><Form.Label>Website</Form.Label></Col>
                        <Col xs={4}><Form.Control type="text" placeholder="Website" value={this.state.webSite} onChange={this.handleWebSiteChange}/></Col>
                        <Col></Col>
                    </Row>
                </Form.Group>
                    <Row>
                        <Col xs={7}></Col>
                            <Col xs={2}>
                                <Button variant="success" onClick={this.UpdateCompanyDetails}>Update</Button>
                               <Link to={{
                                    pathname: '/details',
                                    state: {
                                        catalogueId : this.state.catalogueId
                                    }
                                }} className="btn btn-danger">
                                Cancel
                                </Link>
                            </Col>
                    </Row>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default EditCompanyDetails;