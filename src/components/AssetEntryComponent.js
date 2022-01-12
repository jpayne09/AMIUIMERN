import React, { Component, useState, useEffect } from 'react';
import {  Form, FormGroup, FormFeedback } from 'reactstrap';
import {baseUrl} from '../shared/baseUrl';

class AssetEntry extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            assettag: '',
            serialnumber: ''
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
      alert('A form was submitted: ');
        
      fetch(baseUrl + '/list', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            assettag: this.state.assettag,
            serialnumber: this.state.serialnumber
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
                            <form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <div className="form-group">
                                <label>
                                    Asset Tag:
                                    <input type="text" name="assettag" value={this.state.assettag} onChange={this.handleChange} />
                                </label>
                                </div>
                                <div className="form-group">
                                <label>
                                    SerialNumber
                                    <input type="text" name="serialnumber" value={this.state.serialnumber} onChange={this.handleChange} />
                                </label>
                                </div>
                                <input type="submit" value="Submit" />
                            </FormGroup>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
      );
    }
  }

  export default AssetEntry;