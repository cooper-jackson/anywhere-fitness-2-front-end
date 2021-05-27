import axios from 'axios'
import { useHistory } from 'react-router';
import { classes } from '../classData'
import { axiosWithAuth } from '../utils/AxiosWithAuth'

export const FETCH_START = "FETCH_START";
export const FETCH_CLASS_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_CLASS = "ADD_CLASS";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const FETCH_REGISTERED_SUCCESS = "FETCH_REGISTERED_SUCCESS";



// const { push } = useHistory()

export const fetchClasses = () => {
    console.log('starting')
    return (dispatch => {
        dispatch({type: FETCH_START})
        axiosWithAuth().get('https://ft-anywhere-fitness-2.herokuapp.com/classes')
        // dispatch({type: FETCH_SUCCESS, payload: classes})
            .then(res => {
                console.log(res)
                
                dispatch({type: FETCH_CLASS_SUCCESS, payload:res.data.sort((a, b) => (a.class_id > b.class_id) ? 1 : -1)})
                dispatch({type:FETCH_START})
                axiosWithAuth().get(`https://ft-anywhere-fitness-2.herokuapp.com/reserved/${localStorage.user_id}`)
                    .then(res => {
                        console.log(res.data)
                        
                        registeredSuccess(res.data.sort((a, b) => (a.class_id > b.class_id) ? 1 : -1))
                        dispatch({type: FETCH_REGISTERED_SUCCESS, payload:res.data.sort((a, b) => (a.class_id > b.class_id) ? 1 : -1)})
                    })
                    .catch(err => {
                        console.log(err)
                    })
                
            })
            .catch(err => {
                dispatch({type: FETCH_FAIL, payload: err})
            })
    })  
}

export const addClass = (newClass) => {
    console.log(newClass)
    return(dispatch => {
        dispatch({type:ADD_CLASS, payload: newClass})
        axiosWithAuth().post('https://ft-anywhere-fitness-2.herokuapp.com/classes', newClass)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))

    })
}

export const fetchStart = ()=> {
    return({type: FETCH_START});
}

export const fetchSuccess = (classes) => {
    return({type: FETCH_CLASS_SUCCESS, payload:classes});
}

export const fetchFail = (error)=> {
    return({type: FETCH_FAIL, payload: error})
}

export const loginStart = () => {
    return({type: LOGIN_START});
    // return (dispatch => {
    //     dispatch({type: LOGIN_START})
    //     console.log(credentials)
    //     axiosWithAuth().post('https://ft-anywhere-fitness-2.herokuapp.com/login', credentials)
    //     .then(res => {
    //         localStorage.setItem('token', res.data.token)
    //         // loginSuccess(credentials)
    //         dispatch({type: LOGIN_SUCCESSFUL, payload: credentials})
    //         useHistory().push('/Home')
    //         console.log(res)
    //     })
    //     .catch(err => {
    //         console.log(err.message)
    //     })
    // })
}

export const loginSuccess = (credentials)=> {
    return({type: LOGIN_SUCCESSFUL, payload: credentials});
}

export const registeredSuccess = (registered) => {
    return({type: FETCH_REGISTERED_SUCCESS, payload: registered})
}

export const handleDelete = () => {
    
}