import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'
type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix
    const priorityClass =s.item +' '+s[props.affair.priority]

    return (
        <div>
            <div>{props.affair.name}</div>
            <div>{props.affair.priority}</div>

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
