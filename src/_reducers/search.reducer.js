import { FETCH_SEARCH_SUCCESS, FETCH_SEARCH_PENDING, FETCH_SEARCH_ERROR } from "../_actions";

const initialState = {
    pending: false,
    searchResult: [],
    error:''
}

export function search(state = initialState, action) {
    switch (action.type) {
        case FETCH_SEARCH_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_SEARCH_SUCCESS:
            return {
                ...state,
                pending: false,
                searchResult: action.searchResult,
                error:''
            }
        case FETCH_SEARCH_ERROR:
            return {
                ...state,
                pending: false,
                searchResult: [],
                error: action.error
            }
        default:
            return state;
    }
}