import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchClasses, registeredSuccess } from '../actions/index'
import ClassComponent  from './ClassComponent'
import { axiosWithAuth } from '../utils/AxiosWithAuth'

const ClassesList = (props) => {

    // const [reservedInfo, setReservedInfo] = useState([])

    useEffect(() => {
        // console.log(props.classes)
    }, [])

    return (
        <div>
            {props.isFetching === true ? <p>Please Wait</p>: props.classes.map((element, index) => 
                <ClassComponent key={element.name} classInfo={element} index={index} />
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        classes: state.classes,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchClasses})(ClassesList);