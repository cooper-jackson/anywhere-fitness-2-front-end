import React from 'react'
import { connect } from 'react-redux'
import { fetchClasses } from '../actions/index'
import ClassComponent  from './ClassComponent'

const ClassesList = (props) => {

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