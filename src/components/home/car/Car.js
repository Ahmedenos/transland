import React from 'react'
import "./style.css"
import logoImg from "../../../assets/footer-logo.png"
export default function Car() {
    return (
        <div className="car-section">
            <div className="car-over-lay">
            <div className="container ">
                <div className="body text-center">
                    <div className="footer-img">
                        <img src={logoImg}/>
                    </div>
                    <h1 className="b-car">World’s Leading Contract Logistics Provider</h1>
                    <button className="btn my-btn footer-btn">Make Coustom Request</button>

                </div>

            </div>
            </div>
        </div>
    )
}

