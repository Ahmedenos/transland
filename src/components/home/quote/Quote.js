import React from 'react'
import "./style.css"
import Head from '../../header/Head'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Quote() {
    return (
        <div className="quote-section" id="quote-s">
            <div className="over-lay">
            <div className="container mt-5">
                <div className="row m-0 px-0  quote-row">
                    <div className="quote-desc py-5 col-lg-5">
                        <Head head="quote" span="Request a quote" hDesc="Cost" sDesc="Calculator"/>
                        <p className="quote-p">
                        You can know the Price for your Transportation in Advance. 
                        We Offers intellgent
                        concepts for road and tail and well as complex special transport services
                        </p>
                        <div className="row text-center" p-0 m-0>
                            <div className="col-lg-6 col-sm-3 col-md-5">
                                <div className="quote-icons">
                                <i class="fa-solid fa-house-flag"></i>
                                <p>Warehouse</p>
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-3 col-md-5">
                            <div className="quote-icons">
                                <i class="fa-solid fa-magnifying-glass-location"></i>
                                <p>Online Tracking</p>
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-3 col-md-5">
                            <div className="quote-icons">
                            <i class="fa-solid fa-headphones-simple"></i>
                                <p>Support 24/7</p>
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-3 col-md-5">
                            <div className="quote-icons">
                            <i class="fa-regular fa-compass"></i>
                                <p>Cargo Insurance</p>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="quote-form col-lg-7 align-self-center">
                        <div className="form-body">
                            <h1>Personal & Shipment Data</h1>
                            <div className="my-inp text-center">
                            <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text"  placeholder="Full Name" />
                                <Form.Control type="email"  placeholder="Enter email" />
                                <Form.Control type="phone"  placeholder="Phone" />
                                <Form.Control type="text"  placeholder="Subject" />
                                <Form.Control type="text"  placeholder="Delivary City" />
                                <Form.Control type="text"  placeholder="City of Depatured" />
                            </Form.Group>
                            
                            <Form.Select aria-label="Default select ">
                                <option>Select an Option</option>
                                <option value="1">Freight type</option>
                                <option value="2">Air Freight</option>
                                <option value="3">Ship Freight</option>
                                <option value="3">Cargo Freight</option>
                                <option value="3">Road Freight </option>
                                <option value="3">Rail Freight </option>
                            </Form.Select>
                            <Form.Select aria-label="Default select ">
                                <option>Select an Option</option>
                                <option value="1">Incometers</option>
                                <option value="2">Value1</option>
                                <option value="3">Value2</option>
                                <option value="3">Value3</option>
                                <option value="3">Value4</option>
                            </Form.Select>
                            <div className="sm-inp">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="text"  placeholder="Weight" />
                                <Form.Control type="text"  placeholder="Height" />
                                <Form.Control type="text"  placeholder="Width" />
                                <Form.Control type="text"  placeholder="Length" />
                            </Form.Group>
                            </div>
                            <div className="check-btn ">
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Fragile" />
                                <Form.Check type="checkbox" label="Express Delivery" />
                                <Form.Check type="radio" label="Insurance" />
                                <Form.Check type="radio" label="Packaging" />
                            </Form.Group>
                            </div>  
                                <Button  type="submit" className="submit-btn">
                                            Request A Quote
                                </Button>                 
                            </Form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
