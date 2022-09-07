import React from 'react'
import "./style.css"
import Head from "../../header/Head"
export default function ContactForm() {
    return (
        <div className="contact-form my-5 text-center">
            <Head head="contact" span="fil the form" hDesc="get" sDesc="in touch" />
            <div className="container">
                <div className="row m-0">
                    <div className="inp col-sm-6 my-2">
                        <label className="d-block">Name</label>
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="inp col-sm-6 my-2">
                        <label className="d-block">Email</label>
                        <input type="text" placeholder="Email" />
                    </div>
                </div>
                <div className="row m-0">
                    <div className="inp col-sm-6 my-2">
                        <label className="d-block">Phone</label>
                        <input type="text" placeholder="Phone" />
                    </div>
                    <div className="inp col-sm-6 my-2">
                        <label className="d-block">Subject</label>
                        <input type="text" placeholder="Subject" />
                    </div>
                </div>
                <div className="row m-0 col-sm-12 inp">
                    <label className="d-block" > message</label>
                    <textarea >Message</textarea>
                </div>

            </div>
        </div>
    )
}
