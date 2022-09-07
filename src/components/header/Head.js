import React from 'react'
import"./head.css"
export default function Head(props) {
    return (
        <div className="head-iter">
            <h1 className="main-head">{props.head}</h1>
            <div className="div-desc">
                <span className="span-head">{props.span}</span>
            <h2 className="head-desc">{props.hDesc}<span className="span-desc">{props.sDesc}</span></h2>
            </div>
        </div>
    )
}
