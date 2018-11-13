import * as actionTypes from '../constants/ActionTypes';

export function onRequestDogAction() {
    return {
        type: actionTypes.API_CALL_REQUEST,
    };
}

export function onRequestDogActionSuccess(data) {
    return {
        type: actionTypes.API_CALL_SUCCESS,
        data,
    };
}

export function onRequestDogActionFailure(error) {
    return {
        type: actionTypes.API_CALL_FAILURE,
        error,
    };
}