import React from 'react';
import { Card,Button,  CardBody, CardTitle} from 'reactstrap';

class AssetInformation extends React.Component{
    constructor(props){
        super(props);
    }

        render(){
        return(
            <div>
                <main id="main">
                    <div className="form-container">
                        <div className="row">
                            <Card>
                                <CardTitle>View Asset ID: {this.props.asset.assettag}</CardTitle>
                                <CardBody> 
                                <p>Asset Tag: {this.props.asset.assettag}</p>
                                <p>Asset Serialnumber : {this.props.asset.serialnumber}</p>
                                <p>Created Time: {this.props.asset.createdAt}</p>
                                </CardBody>
                            </Card>
                            <Button>Go Back</Button>
                        </div>
                    </div>
                </main>
            </div>
        )
     }
}

export default AssetInformation;