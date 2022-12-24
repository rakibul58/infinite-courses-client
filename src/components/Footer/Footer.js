import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='' style={{marginTop:"200px"}}>
            <footer class="text-center text-lg-start bg-light text-muted pt-5">
                <section class="">
                    <div class="container text-center text-md-start mt-5">
        
                        <div class="row mt-3">
            
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                
                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3"></i>Infinite Courses
                                </h6>
                                <p>
                                    Join Our team and we would help you to react your full capability.
                                </p>
                            </div>
            

            
                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <Link to="#!" class="text-reset">Angular</Link>
                                </p>
                                <p>
                                    <Link to="#!" class="text-reset">React</Link>
                                </p>
                                <p>
                                    <Link to="#!" class="text-reset">Vue</Link>
                                </p>
                                <p>
                                    <Link to="#!" class="text-reset">Laravel</Link>
                                </p>
                            </div>
            

            
                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <Link to="#!" class="text-reset">Pricing</Link>
                                </p>
                                <p>
                                    <Link to="#!" class="text-reset">Settings</Link>
                                </p>
                                <p>
                                    <Link to="#!" class="text-reset">Orders</Link>
                                </p>
                                <p>
                                    <Link to="#!" class="text-reset">Help</Link>
                                </p>
                            </div>
            

            
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                
                                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>
            
                        </div>
        
                    </div>
                </section>



                <div class="text-center p-4">
                    © 2021 Copyright:
                    <p className="text-reset fw-bold">Infinite Courses</p>
                </div>

            </footer>
        </div>
    );
};

export default Footer;