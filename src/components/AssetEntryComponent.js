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
            assetnameinput: '',
            purchasedateinput:'',
            supplierinput:'',
            ordernumberinpiut:'',
            purchasecostinput:'',
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
        
      fetch(baseUrl + '/list', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            assettag: this.state.assettag,
            serialnumber: this.state.serialnumber,
            model : this.state.modelinput,
            status: this.state.statusinput,
            assetname: this.state.assetnameinput,
            purchasedate: this.state.purchasedateinput,
            supplier: this.state.supplierinput,
            ordernumber : this.state.ordernumberinpiut,
            purchasecost : this.state.purchasecostinput,
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
                        <div className="col-sm-12">
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup >
                                  <label>
                                      Asset Tag:
                                  </label>
                                  <div></div>
                                  <Input className='mb-3' type="text" name="assettag" value={this.state.assettag} onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                <label>
                                    SerialNumber:
                                </label>
                                <div></div>
                                <Input className='mb-3' type="text" name="serialnumber" value={this.state.serialnumber} onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                  <label>
                                    Model:
                                  </label>
                                  <div></div>
                                  <Input className='mb-3' type="text" name="modelinput" value={this.state.modelinput} onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                  <label>
                                    Status:
                                    </label>
                                    <div></div>
                                    <Input className='mb-3' type="text" name="statusinput" value={this.state.statusinput} onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                  <label>
                                    Asset Name:
                                  </label>
                                  <div></div>
                                  <Input className='mb-3' type="text" name="assetnameinput" value={this.state.assetnameinput} onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                  <label>
                                    Purchase Date:
                                  </label>
                                  <div></div>
                                  <Input className='mb-3' type="text" name="purchasedateinput" value={this.state.purchasedateinput} onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                  <label>
                                    Supplier:
                                  </label>
                                  <div></div>
                                  <Input className='mb-3' type="text" name="supplierinput" value={this.state.supplierinput} onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                  <label>
                                    OrderNumber
                                  </label>
                                  <div></div>
                                  <Input className='mb-3' type="text" name="ordernumberinput" value={this.state.ordernumberinpiut} onChange={this.handleChange} />
                                </FormGroup>
                                <FormGroup>
                                  <label>
                                    Purchase Cost
                                  </label>
                                  <div></div>
                                  <Input className='mb-3' type="text" name="purchasecostinput" value={this.state.purchasecostinput} onChange={this.handleChange} />
                                </FormGroup>
                                <input type="submit" value="Submit" />
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