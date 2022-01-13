import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

export const fetchAssets = () => dispatch => {

    
    return fetch(baseUrl + '/api/list')
        .then(response => {
            return response.json();
          })
        .then(assets => dispatch(addAsset(assets)))
        .catch(error => dispatch(assetFailed(error.essage)))
}

export const addAsset = assets => ({
    type: ActionTypes.ADD_ASSETS,
    payload: assets
})

export const assetFailed = errMess => ({
    type: ActionTypes.ASSETS_FAILED,
    payload: errMess
})