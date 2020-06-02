import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TableBody extends Component {
    constructor(props) {
        super(props);
    }
  render() {
      return (
        <React.Fragment>
            <tbody>
                <tr>
                    <th>{this.props.index + 1}</th>
                    <th>{this.props.CompanyDetails.companyName}</th>
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