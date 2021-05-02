import React from 'react';
import './Form.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Form = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])
    return (
        <section data-aos="zoom-in">
            <div className="container">
                <div className="row mt-5 pt-5">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 mt-5 text-white d-flex justify-content-center">
                        <h4>—— Sweet mail ——</h4>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
            <div id="contact-us">
                <section className=" container mt-5 pb-5">
                    <form action="https://formspree.io/f/mgeroyav" method="POST" className="row g-3 needs-validation" novalidate>
                        <div className="col-md-12 position-relative">
                            <label for="validationTooltip01" className="form-label box-name">Name</label>
                            <input
                                type="text" name="FirstName" className="form-control Inputs" id="validationTooltip01" placeholder="Arafat" required />
                        </div>
                        <div className="col-md-12 position-relative">
                            <label for="validationTooltipUsername" className="form-label box-name">Email</label>
                            <div className="input-group has-validation">
                                <input
                                    type="text" name="Username" className="form-control Inputs" placeholder="example@gmail.com" id="validationTooltipUsername"
                                    aria-describedby="validationTooltipUsernamePrepend" required />
                                <div className="invalid-tooltip">
                                    Please choose a unique and valid username.
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 position-relative">
                            <label for="validationTooltip03" className="form-label box-name">City</label>
                            <input
                                type="text" name="City" className="form-control Inputs" id="validationTooltip03" placeholder="Kumilla" required />
                            <div className="invalid-tooltip">
                                Please provide a valid city.
                        </div>
                        </div>
                        <div className="col-md-6 position-relative">
                            <label for="validationTooltip04" className="form-label box-name">Phone</label>
                            <input
                                type="text" name="phone" className="form-control Inputs" id="validationTooltip04" placeholder="+88016*******10" required />
                            <div className="invalid-tooltip">
                                Please select a valid state.
                        </div>
                        </div>
                        <div className="col-md-12 position-relative">
                            <label for="validationTooltip05" className="form-label box-name">Message</label>
                            <input
                                type="text" name="message" className="form-control Inputs pt-5 pb-5 text-center" placeholder="Type your message here..." id="validationTooltip05" required />
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn form-button-color" type="submit">S E N D</button>
                        </div>
                    </form>
                </section>
            </div >
        </section>
    );
};

export default Form;