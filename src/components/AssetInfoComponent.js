import React from 'react';
import { Card,  CardBody, CardTitle} from 'reactstrap';

function AssetInformation(props){
    if(props){
        console.log("assetinfoprops", props.asset.assettag);
        return(
            <div>
                <main id="main">
                    <div className="form-container">
                        <div className="row">
                            <Card>
                                <CardTitle>View Asset ID: {props.asset.assettag}</CardTitle>
                                <CardBody>  

                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default AssetInformation;