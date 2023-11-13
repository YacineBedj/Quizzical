import { selectClasses } from '@mui/material';
import React from 'react'

export default function Input(props) {
    let selectedClass = props.isSelected ? "selected" : "";
    let showIsTrue = (props.isTrue === "true") ? "true" : (props.isTrue === "false" && props.isSelected) ? "false" : "";
    return (
    <div className="input" >
    <input 
        type="radio" 
        id={`${props.id}${props.value}`} 
        name={props.id} 
        value={props.value}
        onClick={(e)=>{props.change(props.id, e.target.value)}}
        
    />
    <label className={`${showIsTrue} ${selectedClass}`} htmlFor={`${props.id}${props.value}`}>{props.value}</label >
    </div>
  )
}
