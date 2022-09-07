import React from 'react'
import "./about.css"
import Head from '../../header/Head'
import aboutImage1 from "../../../assets/about-air.jpg"
import aboutImage2 from "../../../assets/man-img.jpg"
import aboutImage3 from "../../../assets/signature.png"
export default function About() {
    return (
        <div className="about " id="about-s">
            <div className="container">
                <div className="row p-0 ">
                    <div className="col-lg-5 col-sm-12 text-center align-self-center">
                        <div className="about-imge ">
                            <div className="my-about-img">
                                <img src= {aboutImage1} alt="img-about"/>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 ml-lg-5 col-md-12 col-sm-12">
                        <div className="about-text ml-lg-5 pt-sm-5 pt-lg-0 ">
                        <Head head="About" span="Since from 2000" hDesc="Company" sDesc="Overview"/>
                            <div className="about-desc">
                                <p>
                                    Transland is the world’s driving worldwide 
                                    coordinations supplier
                                </p>
                                <p>
                                    — we uphold industry and exchange the worldwide trade 
                                    of merchandise through land transport. 
                                    merchandise through land transport.Transland 
                                    is the world’s driving worldwide coordinations supplier
                                </p>
                                <p>
                                    Our worth added administrations guarantee the
                                    progression of products proceeds
                                    consistently and supply chains stay lean and 
                                    streamlined for progress.
                                </p>
                            </div>
                            <div className="person-about">
                                <div className="person">
                                    <div className="person-img">
                                        <img src={aboutImage2}/>
                                    </div>
                                    <div className="person-desc">
                                        <h1 className="person-name">Alexis D. Denzol </h1>
                                        <p className="person-title">Head Of Idea</p>
                                    </div>
                                </div>
                                <div className="mark-sign">
                                        <img src={aboutImage3} />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
