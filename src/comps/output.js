import React from 'react'

export default function Output(props) {
    return (
        <div className='mt-4 text-center'>
            <h1>{props.amount} {props.coinS} = {props.total} {props.coinE}</h1>
        </div>
    )
}
