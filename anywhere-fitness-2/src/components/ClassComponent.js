import React, { useEffect, useRef, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { fetchClasses } from '../actions/index'
import { axiosWithAuth } from '../utils/AxiosWithAuth'

export const ClassComponent = (props) => {
    const { classInfo } = props
    // const [classInfo, setClassInfo] = 
    const { index } = props
    const { push } = useHistory()
    const selectorId = 'attendance_setting'+index
    const [foundClass, setFoundClass] = useState("a")
    
    // const [newCount, setNewCount] = useState(Number(props.classes[index].num_registered))

    useEffect(() => {
        setFoundClass('')
        for(let i = 0; i < props.registered.length; i++) {
            if (props.registered[i].class_id === classInfo.class_id) {
                // console.log(`yeet for ${classInfo.name}`, props.registered[i].class_id, ' versus ' , classInfo.class_id)
                setFoundClass("Attending")
                break
            } else {
                // console.log(`neet for ${classInfo.name}`, props.registered[i].class_id, ' versus ' , classInfo.class_id)
                setFoundClass("Not Attending");
            }
        }
    }, [])

    const handleStatusChange = e => {
        e.preventDefault()
        
        if((document.getElementById(selectorId).value === 'Attending' && (((props.registered[index]) === undefined) || !(props.registered[index]) || (props.registered[index].reserved_clients.find(element => element.user_id === Number(localStorage.user_id)) === 'undefined')))) {
            axiosWithAuth().post(`https://ft-anywhere-fitness-2.herokuapp.com/reserved/${localStorage.user_id}`, {class_id: classInfo.class_id} )
            .then(res => {
                // setNewCount(props.registered[index] + 1)
                const newClass = {
                    name: res.data.name,
                    type: res.data.type,
                    date: res.data.date,
                    start_time: res.data.start_time,
                    duration: res.data.duration,
                    intensity_level: res.data.intensity_level,
                    location: res.data.location,
                    num_registered: res.data.num_registered,
                    max_class_size: res.data.max_class_size,
                    user_id: localStorage.user_id
                }
                axiosWithAuth().put(`https://ft-anywhere-fitness-2.herokuapp.com/classes/${classInfo.class_id}`, newClass)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
            console.log('posting ', classInfo.class_id, 'to ', localStorage.user_id)
            setFoundClass('Attending')
            console.log(classInfo.class_id)


        } else if(document.getElementById(selectorId).value === 'Not Attending' ) {
            console.log(classInfo.class_id)
            console.log(localStorage.user_id)
            const whatever = {class_id: parseInt(classInfo.class_id)}
            console.log(whatever)
            axiosWithAuth().delete(`https://ft-anywhere-fitness-2.herokuapp.com/reserved/${parseInt(localStorage.user_id)}`, {data:whatever})
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log({err})
            })
            console.log('deleting ', classInfo.class_id, 'from ', localStorage.user_id)
            setFoundClass('Not Attending')
            console.log(classInfo.class_id)


        } else {
            return
        }

    }

    return (
        <div>
            {/* {reservedInfo.includes(localStorage.user_id) ? console.log('yeet') : console.log('neet')} */}
            {/* <div>{foundClass === "Attending" ? classInfo.name : console.log(foundClass)}</div> */}
            <div>Index: {index}</div>
            <div>Name: {classInfo.name}</div>
            <div>Type: {classInfo.type}</div>
            <div>Start Time: {classInfo.start_time}</div>
            <div>Duration: {classInfo.duration}</div>
            <div>Intensity Level: {classInfo.intensity_level}</div>
            <div>Location: {classInfo.location}</div>
            <div>Number Registered: {classInfo.num_registered}</div>
            <div>Max Class Size: {classInfo.max_class_size}</div>
            <div>Date: {classInfo.date}</div>
            {/* <div>{classInfo.instructor.username}</div> */}
            <div>{foundClass}</div>
            <select id={selectorId}>
                <option></option>
                <option value="Not Attending">Not Attending</option>
                <option value="Attending">Attending</option>
            </select>
            <button onClick={handleStatusChange}>Save Attendance Setting</button>
            {localStorage.role === 'INSTRUCTOR' && <Link to={`/Edit/${classInfo.class_id}`}>Edit</Link>}
        </div>
    )
} 

const mapStateToProps = state => {
    return {
        registered: state.registered,
        classes: state.classes,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchClasses})(ClassComponent);