import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <section>
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
                    <form className="row g-3 needs-validation" novalidate>
                        <div className="col-md-4 position-relative">
                            <label for="validationTooltip01" className="form-label box-name">First name</label>
                            <input
                                type="text" className="form-control Inputs" id="validationTooltip01" placeholder="Arafat" required />
                            <div className="valid-tooltip">
                                Looks good!
                        </div>
                        </div>
                        <div className="col-md-4 position-relative">
                            <label for="validationTooltip02" className="form-label box-name">Last name</label>
                            <input
                                type="text" className="form-control Inputs" id="validationTooltip02" placeholder="Islam" required />
                            <div className="valid-tooltip">
                                Looks good!
                        </div>
                        </div>
                        <div className="col-md-4 position-relative">
                            <label for="validationTooltipUsername" className="form-label box-name">Username</label>
                            <div className="input-group has-validation">
                                <span className="input-group-text Inputs" id="validationTooltipUsernamePrepend">@</span>
                                <input
                                    type="text" className="form-control Inputs" placeholder="example@gmail.com" id="validationTooltipUsername"
                                    aria-describedby="validationTooltipUsernamePrepend" required />
                                <div className="invalid-tooltip">
                                    Please choose a unique and valid username.
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 position-relative">
                            <label for="validationTooltip03" className="form-label box-name">City</label>
                            <input
                                type="text" className="form-control Inputs" id="validationTooltip03" placeholder="Kumilla" required />
                            <div className="invalid-tooltip">
                                Please provide a valid city.
                        </div>
                        </div>
                        <div className="col-md-3 position-relative">
                            <label for="validationTooltip04" className="form-label box-name">State</label>
                            <select
                                className="form-select Inputs" id="validationTooltip04" required>
                                <option className="Options">Dhaka</option>
                                <option >Chittagong</option>
                                <option >Kumilla</option>
                                <option>Cox's bazar</option>
                            </select>
                            <div className="invalid-tooltip">
                                Please select a valid state.
                        </div>
                        </div>
                        <div className="col-md-3 position-relative">
                            <label for="validationTooltip05" className="form-label box-name">Zip</label>
                            <input
                                type="text" className="form-control Inputs" placeholder="3500" id="validationTooltip05" required />
                            <div className="invalid-tooltip">
                                Please provide a valid zip.
                        </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn form-button-color" type="submit">S E N D . . .</button>
                        </div>
                    </form>
                </section>
            </div >
        </section>
    );
};

export default Form;