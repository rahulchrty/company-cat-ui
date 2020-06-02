import React, {Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class EditCompanyDetails extends Component {
    constructor(props) {
        super(props);
        this.state = 
        { 
            catalogueId: '', 
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
        console.log(this.state.companyName);
    }

    componentDidMount() {
        //const {handle} = this.props.match.params;
        const {catalogueId, companyDetails} = this.props.location.state;
        this.setState({ catalogueId: catalogueId})
        this.setState({ companyName: companyDetails.companyName})
        this.setState({ sector: companyDetails.sector})
        this.setState({ subSector: companyDetails.subSector})
        this.setState({ region: companyDetails.region})
        this.setState({ numberOfEmployees: companyDetails.numberOfEmployees})
        this.setState({ totalRevenues: companyDetails.totalRevenues})
        this.setState({ webSite: companyDetails.webSite})
    }
    render() {
        return (
            <React.Fragment>
                <Form.Group>
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" placeholder="Company Name" value={this.state.companyName} onChange={this.handleCompanyNameChange}/>
                    <br/>
                    <Form.Label>Sector</Form.Label>
                    <Form.Control type="text" placeholder="Sector" value={this.state.sector} onChange={this.handleSectorChange}/>
                    <br/>
                    <Form.Label>Sub-Sector</Form.Label>
                    <Form.Control type="text" placeholder="Sub-Sector" value={this.state.subSector} onChange={this.handleSubSectorChange}/>
                    <br/>
                    <Form.Label>Region</Form.Label>
                    <Form.Control type="text" placeholder="Region" value={this.state.region} onChange={this.handleRegionChange}/>
                    <br/>
                    <Form.Label>Number of Employees</Form.Label>
                    <Form.Control type="text" placeholder="Number of Employees" value={this.state.numberOfEmployees} onChange={this.handleNumberOfEmployeesChange}/>
                    <br/>
                    <Form.Label>Total Revenues</Form.Label>
                    <Form.Control type="text" placeholder="Total Revenues" value={this.state.totalRevenues} onChange={this.handleTotalRevenuesChange}/>
                    <br/>
                    <Form.Label>Website</Form.Label>
                    <Form.Control type="text" placeholder="Website" value={this.state.webSite} onChange={this.handleWebSiteChange}/>
                </Form.Group>
                <Button onClick={this.UpdateCompanyDetails}>Update</Button>
                <Link to={{
                    pathname: '/details',
                    state: {
                        catalogueId : this.state.catalogueId
                    }
                }} className="btn btn-primary">
                Cancel
                </Link>
            </React.Fragment>
        )
    }
}

export default EditCompanyDetails;