import { Component } from 'react';
import Header from './HeaderComponent';
import Sidenav from './Sidenavcomponent';
import Dashboard from './DashboardComponent';
import AssetEntry from './AssetEntryComponent';
import FilterTable from './InventoryComponent';
import Contact from './Contactuscomponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect} from 'react-redux';
import AssetInformation from './AssetInfoComponent';
import {fetchAssets } from '../redux/ActionCreators';

const mapStateToProps = (state) => {
    return {
        assets: state.assets,
    };
};

/** 
const mapDispatchToProps = {
    fetchAssets: () => (fetchAssets()),

};

*/

class Main extends Component {


    componentDidMount() {
        //this.props.fetchAssets();
    }
    render(){
        console.log("Main component", this.props.assets.assets)
        const assetwithId = ({match}) => {
            return (
                <AssetInformation 
                asset={this.props.assets.assets.filter(asset => asset.assettag === match.params.assetwithId)[0]}
                />

            );
        };
        return(
            <div>
                <Sidenav />
                <Header />
                <Switch>
                    <Route path='/dashboard' render={() => <Dashboard assetData={this.props.assets.assets} /> }
                    />
                    <Route exact path='/assetentry' component={AssetEntry} />
                    <Route exact path='/inventory' render={() => <FilterTable assetData={this.props.assets} filterText={this.props.filterText} /> } />
                    <Route path='/inventory/:assetwithId' component={assetwithId} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='dashboard' />
                </Switch>
            </div>
        );
    }
}
export default withRouter(connect(mapStateToProps)(Main));
//export default Main;