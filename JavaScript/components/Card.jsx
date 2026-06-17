import React from 'react'

const Card = () => {
      return (
        <div style={{border:'5px solid red',width:20}}>
        <h3>Student Record</h3>
        <h3>Student Name:{props.name}</h3>
        <h3>Student Class:{props.class}</h3>
        </div>
      )
}