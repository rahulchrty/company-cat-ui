import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import {Card, Row, Col }from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';

class UploadFile extends Component {
    constructor(props) {
        super(props);
        this.state ={
          file:null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
      }
      onFormSubmit(e){
        e.preventDefault();
        this.props.fileUpload(this.state.file)
      }
      onChange(e) {
        this.setState({file:e.target.files[0]})
      }
      render() {
        return (
            <React.Fragment>
              <Row>
                <Col>
                <Jumbotron>
                  <Card>
                  <Card.Body>

                    <form onSubmit={this.onFormSubmit}>
                      <Row>
                          <Col></Col>
                          <Col>
                            <Form>
                                <Form.Group>
                                    <Form.File type="file" id="exampleFormControlFile1" onChange={this.onChange}/>
                                </Form.Group>
                            </Form>
                          </Col>
                          <Col>
                            <button class="btn btn-primary">Upload</button>
                          </Col>
                          <Col></Col>
                        </Row>
                    </form>
                    </Card.Body>
                  </Card>
                  </Jumbotron>
                </Col>
              </Row>
          </React.Fragment>
       )
      }
}
export default UploadFile;