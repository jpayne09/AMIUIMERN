import React, { Component } from "react";
import { Table, Card, CardBody, CardHeader,CardTitle } from 'reactstrap';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import AssetInformation from './AssetInfoComponent';

function handleClick(assettag){
    return (
        window.location = `http://52.204.9.154/inventory/${assettag}`
        //window.location = `https://localhost:3002/inventory/${assettag}`
        
    )
}

function RenderInventory({ asset }) {

    return (
        <>
        <td onClick={values => handleClick(asset.assettag)}>{asset.assettag}</td><td>{asset.serialnumber}</td><td>{asset.Modelinput}</td><td>{asset.Statusinput}</td><td>{asset.AssetName}</td>
            <td>{asset.Supplier}</td><td>{asset.OrderNum}</td><td>{asset.PurchaseDate}</td><td>{asset.PurchaseCost}</td>
        </>
    );
}


class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(e){
        this.props.onFilterTextChange(e.target.value);
    }
    render() {
      const filterText = this.props.filterText;  
      return (
          <main className="main">
              <div className="container">
                  <Card>
                      <CardHeader>
                        <label>Search and Table Component</label>
                        <div>
                        <span>-------------------------</span>
                        </div>
                       </CardHeader>
                       <CardBody>
                          <form>
                              <input
                                  type="text"
                                  placeholder="Search..."
                                  value={this.props.filterText}
                                  onChange={this.handleFilterTextChange}
                              />
                          </form>
                        </CardBody>
                  </Card>
              </div>
        </main>
      );
    }
  }

class FilterTable extends Component{
    constructor(props){
        super(props);
        this.state = {
            filterText: '',
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
          filterText: filterText
        });
      }

    render(){
        console.log("filtertable props", this.props.assetData.assets);
        return(
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}
                />
                <Inventory
                    assetData={this.props.assetData.assets}
                    filterText={this.state.filterText}
                />

            </div>
        )        

    }
}
class Inventory extends Component{
    render(){
        console.log("Inventory Props", this.props.assetData);
        const filterText = this.props.filterText;
        const inventory = [];
        if(this.props.assetData){
        this.props.assetData.forEach((asset) => {
            console.log("assettag", asset.assettag);
            if(asset.assettag.indexOf(filterText) === -1){
                return
            }
            inventory.push(
                <tr key={asset.assettag}>
                    <RenderInventory asset={asset} />
                </tr>
                )
        });
        }
    return (
        <main className="main">
            <div className="container">
                <Card>
                    <div className="hardware-table" styles="background-color: rgb(240, 240, 240);">
                        <label>Asset Inventory System </label>
                        <div>
                        <span>-------------------------------</span>
                        </div>
                        <CardBody>
                            <Table bordered hover striped>
                                <thead>
                                    <tr>
                                        <th>Asset Tag</th>
                                        <th>Serial</th>
                                        <th>Model</th>
                                        <th>Status</th>
                                        <th>Asset Name</th>
                                        <th>Supplier</th>
                                        <th>Order Number</th>
                                        <th>Purchase Date</th>
                                        <th>Purchase Cost</th>
                                    </tr>
                                </thead>
                                <tbody id="tbody">
                               {inventory}
                                </tbody>                              
                            </Table>
                        </CardBody>
                    </div>
                </Card>
            </div>
        </main >
    );
}  
}

export default FilterTable;