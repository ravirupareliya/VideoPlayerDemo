import * as ActionTypes from '../Actions/ActionTypes';
import Api from '../Service/Api';

const mApi = Api.create()

export const fetchVideos = () => {
    return dispatch => {
        dispatch({
            type: ActionTypes.SERVICE_PENDING
        })
        mApi.getVideos().then((response) => {
            if (response.ok)
                dispatch({
                    type: ActionTypes.SERVICE_SUCCESS,
                    data: response.data.videos
                })
            else
                dispatch({
                    type: ActionTypes.SERVICE_ERROR,
                    error: response.problem
                })
        }).catch((error) => {
            dispatch({
                type: ActionTypes.SERVICE_ERROR,
                error: error
            })
        })
    }
}