import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <section className="contact-area">
                <div className="container border rounded-3 p-5">
                    <div className="row">
                        <div className="col-xl-7 col-lg-8">
                            <div className="section-title mt-45">
                                <h3 className="title">Get in touch</h3>
                            </div>
                            <div className="contact-form form-style-four mt-15">
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-input mt-15">
                                                <label>Full Name</label>
                                                <div className="input-items default">
                                                    <i className="lni lni-user"></i>
                                                    <input type="text" placeholder="John Doe" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-input mt-15">
                                                <label>Email Address</label>
                                                <div className="input-items default">
                                                    <i className="lni lni-envelope"></i>
                                                    <input type="text" placeholder="email@gmail.com" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-input mt-15">
                                                <label>Phone Number</label>
                                                <div className="input-items default">
                                                    <i className="lni lni-phone"></i>
                                                    <input type="text" placeholder="01234567890" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-input mt-15">
                                                <label>Subject</label>
                                                <div className="input-items default">
                                                    <i className="lni lni-bubble"></i>
                                                    <input type="text" placeholder="Type here" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-input mt-15">
                                                <label>Your Message</label>
                                                <div className="input-items default">
                                                    <i className="lni lni-pencil-alt"></i>
                                                    <textarea
                                                        placeholder="Type your message here"
                                                    ></textarea>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-form mt-15">
                                                <div className="input-form rounded-buttons">
                                                    <button
                                                        className="btn btn-primary rounded-full"
                                                        type="submit"
                                                    >
                                                        SEND MESSAGE
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </form>
                            </div>

                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-8 offset-xl-1">
                            <div className="section-title mt-5">
                                <h3 className="title">Contact Information</h3>
                            </div>
                            <div className="contact-info">
                                <ul style={{ listStyle: "none" }} className="info">
                                    <li>
                                        <div className="single-info">
                                            <div className="info-icon">
                                                <i className="fa-solid fa-location-pin"></i>
                                            </div>
                                            <div className="info-content">
                                                <p className="text">
                                                    New York, NY 10012, US
                                                </p>
                                            </div>
                                        </div>

                                    </li>
                                    <li>
                                        <div className="single-info">
                                            <div className="info-icon">
                                                <i class="fa-solid fa-phone"></i>
                                            </div>
                                            <div className="info-content">
                                                <p className="text">+ 01 234 567 89</p>
                                            </div>
                                        </div>

                                    </li>
                                    <li>
                                        <div className="single-info">
                                            <div className="info-icon">
                                                <i class="fa-solid fa-phone-volume"></i>
                                            </div>
                                            <div className="info-content">
                                                <p className="text">+ 01 234 567 88</p>
                                            </div>
                                        </div>

                                    </li>
                                    <li>
                                        <div className="single-info">
                                            <div className="info-icon">
                                                <i class="fa-solid fa-envelope"></i>
                                            </div>
                                            <div className="info-content">
                                                <p className="text">info@example.com</p>
                                            </div>
                                        </div>

                                    </li>
                                </ul>
                                <ul className="social mt-5">
                                    <li>
                                        <p>
                                            <i className="lni lni-facebook-filled"></i>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <i className="lni lni-twitter-original"></i>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <i className="lni lni-instagram-original"></i>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <i className="lni lni-linkedin-original"></i>
                                        </p>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
};

export default Contact;