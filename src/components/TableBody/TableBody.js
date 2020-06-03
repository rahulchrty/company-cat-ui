import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'

class TableBody extends Component {
    constructor(props) {
        super(props);
        this.state = 
        { 
            isChacked: false,
            imageUrl: ''
        };
        this.HandleChange = this.HandleChange.bind(this);
    }
    HandleChange(event)
    {
        this.setState({isChacked: event.target.checked});
        if (event.target.checked)
        {
            let imgUrl = this.props.CompanyDetails.webSite + "/favicon.ico";
            this.setState({imageUrl: imgUrl});  
        }
        else
        {
            this.setState({imageUrl: ''});   
        }
    }
  render() {
      return (
        <React.Fragment>
            <tbody>
                <tr>
                    <th>
                        <Form.Check type="checkbox" defaultChecked={this.state.isChacked} onChange={this.HandleChange}/>
                    </th>
                    <th>
                        {this.props.index + 1}
                    </th>
                    <th>
                        <Image src={this.state.imageUrl} responsive />
                        {this.props.CompanyDetails.companyName}
                    </th>
                    <th>{this.props.CompanyDetails.sector}</th>
                    <th>{this.props.CompanyDetails.subSector}</th>
                    <th>{this.props.CompanyDetails.region}</th>
                    <th>{this.props.CompanyDetails.numberOfEmployees}</th>
                    <th>{this.props.CompanyDetails.totalRevenues}</th>
                    <th>{this.props.CompanyDetails.webSite}</th>
                    <th>
                        <Link to={{
                            pathname: '/editDetails',
                            state: {
                                catalogueId : this.props.catalogueId,
                                companyDetails: this.props.CompanyDetails 
                            }
                        }}>
                        Edit
                        </Link>
                    </th>
                </tr>
            </tbody>
        </React.Fragment>
      )
  }
}
export default TableBody;