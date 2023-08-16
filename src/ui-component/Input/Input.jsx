import React from 'react'
import './Input.scss'

export default function Input({placeholder, title, name, width, className}) {
  return (
    <div className='input-container'>
        <label className='input-text'>{title}</label>
        <input width={width} className={className} name={name} placeholder={placeholder} type="text" />
    </div>
  )
}
