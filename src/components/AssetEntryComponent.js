import React, { Component, useState, useEffect } from 'react';
import {  Form, FormGroup, FormFeedback, Input } from 'reactstrap';
import {baseUrl} from '../shared/baseUrl';

class AssetEntry extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            assettag: '',
            serialnumber: '',
            modelinput: '',
            statusinput: '',
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        const value = event.target.value
      this.setState({
          ...this.state,
            [event.target.name]: value
        });
    }
  
    handleSubmit(event) {
      alert('A form was submitted ');
        
      fetch(baseUrl + '/api/list', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            assettag: this.state.assettag,
            serialnumber: this.state.serialnumber,
            model : this.state.modelinput,
            status: this.state.statusinput
        })
      })

      event.preventDefault();
    }
  
    render() {
      return (
        <main id="main">
            <div className="container">
                <div className="form-container">
                    <div className="row">
                        <div className="col-md-12">
                            <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <div className="form-group">
                                <label>
                                    Asset Tag:
                                </label>
                                <input type="text" name="assettag" value={this.state.assettag} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                <label>
                                    SerialNumber:
                                    <input type="text" name="serialnumber" value={this.state.serialnumber} onChange={this.handleChange} />
                                </label>
                                </div>
                                <div className="form-group">
                                  <label>
                                    Model:
                                  </label>
                                  <input type="text" name="modelinput" value={this.state.modelinput} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                  <label>
                                    Status:
                                    <input type="text" name="statusinput" value={this.state.statusinput} onChange={this.handleChange} />
                                  </label>
                                </div>
                                <input type="submit" value="Submit" />
                            </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
      );
    }
  }

  export default AssetEntry;