import { FETCH_START, FETCH_CLASS_SUCCESS, FETCH_FAIL, ADD_CLASS, LOGIN_START, LOGIN_SUCCESSFUL, FETCH_REGISTERED_SUCCESS } from './../actions';

const initialState = {
    credentials: {},
    classes: [],
    registered: [],
    isFetching: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(FETCH_START):
            return({
                ...state, isFetching: true, 
            })
        case(FETCH_CLASS_SUCCESS):
            return({
                ...state, isFetching: false, classes: action.payload
            })
        case(FETCH_FAIL):
            return({
                ...state, isFetching: false, error: action.payload
            })
        case(ADD_CLASS):
            return({
                ...state, isFetching: false, classes: [...state.classes, action.payload]
            })
        case(LOGIN_START):
            return({
                ...state, isFetching: true
            })

        case(LOGIN_SUCCESSFUL):
            return({
                ...state, isFetching: false, credentials: action.payload
            })
        case(FETCH_REGISTERED_SUCCESS):
            return({
                ...state, isFetching: false, registered: action.payload
            })
        default:
            return state
    }
}