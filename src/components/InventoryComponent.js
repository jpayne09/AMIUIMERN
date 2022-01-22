import React, { Component } from "react";
import { Table, Card, CardBody, CardHeader } from 'reactstrap';
import { useHistory } from "react-router-dom";


function RenderInventory({ asset }) {
    const history = useHistory();
    const navigateTo = () => history.push(`/inventory/${asset.assettag}`)

    return (
        <>
        <td onClick={navigateTo}>{asset.assettag}</td><td>{asset.serialnumber}</td><td>{asset.model}</td><td>{asset.status}</td><td>{asset.AssetName}</td>
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
        const filterText = this.props.filterText;
        const inventory = [];
        if(this.props.assetData){
        this.props.assetData.forEach((asset) => {
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