import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blogs = () => {
    return (
        <div>
            <h4 className='text-primary fw-bold text-center'>Blogs</h4>
            <h1 className='text-center text-secondary'>These are the recently Published Blogs</h1>
            <section class="blog-area pb-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-8 col-sm-10">
                            <div class="single-blog blog-style-one border rounded-3">
                                <div class="blog-image">
                                    <Link to="javascript:void(0)"
                                    ><img src="https://blog.logrocket.com/wp-content/uploads/2021/02/machine-learning-libraries-javascript.png" alt="Blog"
                                        /></Link>

                                </div>
                                <div class="blog-content">
                                    <h5 class="blog-title">
                                        <Link to="javascript:void(0)">
                                            What is JavaScript?
                                        </Link>
                                    </h5>
                                    <span><i class="lni lni-calendar"></i> Mar 23, 2022</span>
                                    <span><i class="lni lni-comments-alt"></i> 24 Comment</span>
                                    <p class="text">
                                        JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript ...
                                    </p>

                                    <Link class="more" to="javascript:void(0)">READ MORE</Link>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-4 col-md-8 col-sm-10">
                            <div class="single-blog blog-style-one border rounded-3">
                                <div class="blog-image">
                                    <Link to="javascript:void(0)"
                                    ><img src="https://blog.ippon.fr/content/images/2016/04/react-javascript.png" alt="Blog"
                                        /></Link>
                                </div>
                                <div class="blog-content">
                                    <h5 class="blog-title">
                                        <Link to="javascript:void(0)">
                                            What is react js?
                                        </Link>
                                    </h5>
                                    <span><i class="lni lni-calendar"></i> Mar 23, 2022</span>
                                    <span><i class="lni lni-comments-alt"></i> 24 Comment</span>
                                    <p class="text">
                                        React is a JavaScript library created by Facebook. React is a User Interface (UI) library. React is a tool for building UI components ...
                                    </p>
                                    <Link class="more" to="javascript:void(0)">READ MORE</Link>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-4 col-md-8 col-sm-10">
                            <div class="single-blog blog-style-one border rounded-3">
                                <div class="blog-image">
                                    <Link to="javascript:void(0)"
                                    ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" alt="Blog"
                                        /></Link>
                                </div>
                                <div class="blog-content">
                                    <h5 class="blog-title">
                                        <Link to="javascript:void(0)">
                                            What is Laravel?
                                        </Link>
                                    </h5>
                                    <span><i class="lni lni-calendar"></i> Mar 23, 2022</span>
                                    <span><i class="lni lni-comments-alt"></i> 24 Comment</span>
                                    <p class="text">
                                        Laravel is a PHP web application framework with expressive, elegant syntax. We've already laid the foundation — freeing you to create...
                                    </p>
                                    <Link class="more" to="javascript:void(0)">READ MORE</Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
};

export default Blogs;