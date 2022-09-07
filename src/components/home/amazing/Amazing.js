import React from 'react'
import "./style.css"
import a1 from "../../../assets/1.png"
import a2 from "../../../assets/2.png"
import a3 from "../../../assets/3.png"
import a4 from "../../../assets/4.png"
import a5 from "../../../assets/5.png"
import a6 from "../../../assets/6.png"
import a7 from "../../../assets/7.png"
export default function Amazing() {
    return (
        <div className="amazing-section my-5" id="amazing-s">
            <div className="container">
                <div className="mask-head">
                    <h1>20,8700</h1>
                </div>
                <h2 className="text-center mask-title">All-over delivery done by our team</h2>
            <div className="card-imge justify-content-center row">
                    <div className="amazing ">
                        <img src={a1} />
                    </div>
                    <div className="amazing ">
                        <img src={a2} />
                    </div>
                    <div className="amazing ">
                        <img src={a3} />
                    </div>
                    <div className="amazing ">
                        <img src={a4} />
                    </div>
                    <div className="amazing ">
                        <img src={a5} />
                    </div>
                    <div className="amazing ">
                        <img src={a6} />
                    </div>
                    <div className="amazing ">
                        <img src={a7} />
                    </div>
                </div>
            </div>
        </div>
    )
}
