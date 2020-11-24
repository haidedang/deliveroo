import React from 'react'

export default function Button(props) {
    return (
        <button className={props.style}>
            {props.text}
        </button>
    )
}