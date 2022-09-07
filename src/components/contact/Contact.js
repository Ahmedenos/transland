import React  from 'react'
import "./style.css"
// import  axios from "axios"
import ContactForm from './contact-form/ContactForm'
export default function Contact() {

    // const [contact ,setContact]=useState([])
    // useEffect(()=>{
    //     axios.get("data.json").then(res=>{
    //         setContact(res.data.contact)
    //     })
    // })
   
    // const myContact=contact.map(item=>{
    //     return(
    //         <div className="user-contact bg-white col-lg-4 col-md-6 mt-5 py-2" key={item.id}>
    //         <div className="contact-body">
    //             <div className="call-me d-flex">
    //                 <span className="contact-icon">
    //                     <a href="#"><i className={item.icon}></i></a>
    //                 </span>
    //                 <div className="email">
    //                         <h4 className="email-h4">{item.social}</h4>
    //                         <p className="email-p"> {item.info} </p>
    //                 </div>
    //             </div>

    //             <div className="my-phones d-flex">
    //                 <div className="phones-inner">
    //                     <h3>{item.contact1}</h3>
    //                     <h3>{item.contact2}</h3>
    //                 </div>
    //                 <span className="arrow-icons">
    //                     <i class="fa-solid fa-arrow-right"></i>
    //                 </span>
    //             </div>
    //             </div>
    //         </div>
    //     )
    // })
    return (
        <div className="contact-section" id="contact">
            <div className="contact-img ">
                <div className="contact-overlay ">
                <h1>Contact Us </h1>
                </div>
            </div>  
            <div className="seconed-section-contact py-5">
            <div className="container">
            <div className="row ">
                {/* {myContact} */}
            <div className="user-contact bg-white col-lg-4 col-md-6 mt-5 py-2" >
            <div className="contact-body">
                <div className="call-me d-flex">
                    <span className="contact-icon">
                        <a href="#"><i className="fa-regular fa-envelope"></i></a>
                    </span>
                    <div className="email">
                            <h4 className="email-h4">Email Address</h4>
                            <p className="email-p">Sent mail asap anytime</p>
                    </div>
                </div>

                <div className="my-phones d-flex">
                    <div className="phones-inner">
                        <h3>info@example.com</h3>
                        <h3>jobs@example.com</h3>
                    </div>
                    <span className="arrow-icons">
                        <i class="fa-solid fa-arrow-right"></i>
                    </span>
                </div>
                </div>
            </div>
            <div className="user-contact bg-white col-lg-4 col-md-6 mt-5 py-2" >
            <div className="contact-body">
                <div className="call-me d-flex">
                    <span className="contact-icon">
                        <a href="#"><i className="fa-solid fa-phone-flip"></i></a>
                    </span>
                    <div className="email">
                            <h4 className="email-h4">Phone Number</h4>
                            <p className="email-p">call us asap anytime</p>
                    </div>
                </div>

                <div className="my-phones d-flex">
                    <div className="phones-inner">
                        <h3>010 6717 55 92</h3>
                        <h3>010 0046 94 26</h3>
                    </div>
                    <span className="arrow-icons">
                        <i class="fa-solid fa-arrow-right"></i>
                    </span>
                </div>
                </div>
            </div>
            <div className="user-contact bg-white col-lg-4 col-md-6 mt-5 py-2" >
            <div className="contact-body">
                <div className="call-me d-flex">
                    <span className="contact-icon">
                        <a href="#"><i className="fa-solid fa-location-dot"></i></a>
                    </span>
                    <div className="email">
                            <h4 className="email-h4">Office Address</h4>
                            <p className="email-p">Sent mail asap anytime</p>
                    </div>
                </div>

                <div className="my-phones d-flex">
                    <div className="phones-inner">
                        <h3>B2, Miranda City</h3>
                        <h3>New York, US</h3>
                    </div>
                    <span className="arrow-icons">
                        <i class="fa-solid fa-arrow-right"></i>
                    </span>
                </div>
                </div>
            </div>



            </div>
            </div>
            </div>

            <ContactForm />
        </div>
    )
}
