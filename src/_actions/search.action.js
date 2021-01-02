import { searchService } from "../_services";

export const FETCH_SEARCH_PENDING = 'FETCH_SEARCH_PENDING';
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS';
export const FETCH_SEARCH_FIRST_SUCCESS = 'FETCH_SEARCH_FIRST_SUCCESS';
export const FETCH_SEARCH_ERROR = 'FETCH_SEARCH_ERROR';

export const searchActions = {
    Updatesearchid,
    getSearchresult
}

function Updatesearchid(topicid) {
    return dispatch => {
        dispatch(success(topicid));
    }
    function success(topicid) { return { type: FETCH_SEARCH_SUCCESS, id: topicid } }
}
function getSearchresult(url) {
    return dispatch => {
        dispatch(pending());
        searchService.getSearchresult(url)
            .then(res => {
                
                if (res.status) {
                    throw (res.message);
                }
                if(res.hits){
                    dispatch(success(res.hits));
                }else{
                    dispatch(failure(res));
                }
                return res;
            })
            .catch(error => {
                dispatch(failure(error));
            })
    };
    function pending() { return { type: FETCH_SEARCH_PENDING } }
    function success(exams) { return { type: FETCH_SEARCH_SUCCESS, searchResult: exams } }
    function failure(error) { return { type: FETCH_SEARCH_ERROR, error:error } }

}