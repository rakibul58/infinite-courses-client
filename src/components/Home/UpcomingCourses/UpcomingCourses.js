import React from 'react';
import { Link } from 'react-router-dom';
import './UpcomingCourse.css';

const UpcomingCourses = () => {
    return (
        <div>
            <h4 className='text-primary fw-bold text-center'>Upcoming Course</h4>
            <h1 className='text-secondary text-center mb-5'>These are the course coming soon</h1>
            <section class="card-area pb-5">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-7 col-sm-9">
                            <div class="single-card card-style-one border rounded-3">
                                <div class="card-image">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKja0lwgwMMD7S9fEjyfgffmqbkkc8A5md7h4MKxrAIVxnyK7jWgbVE-PR7PvWtzemWLg&usqp=CAU" alt="course" />
                                </div>
                                <div class="card-content">
                                    <h4 class="card-title">
                                        <p>React JS | Complete Course</p>
                                    </h4>
                                    <p class="text">
                                        React · Declarative. React makes it painless to create interactive UIs.
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div class="col-lg-4 col-md-7 col-sm-9">
                            <div class="single-card card-style-one border">
                                <div class="card-image">
                                    <img src="https://www.drupal.org/files/project-images/screenshot_361.png" alt="course" />
                                </div>
                                <div class="card-content">
                                    <h4 class="card-title">
                                        <p>Tailwind CSS | Complete Guide</p>
                                    </h4>
                                    <p class="text">
                                        A utility-first CSS framework packed with classes like flex..
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div class="col-lg-4 col-md-7 col-sm-9">
                            <div class="single-card card-style-one border">
                                <div class="card-image">
                                    <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png" alt="course" />
                                </div>
                                <div class="card-content">
                                    <h4 class="card-title">
                                        <p>Bootstrap 5 | Framework Guide</p>
                                    </h4>
                                    <p class="text">
                                        Get started with Bootstrap, the world's most popular framework ...
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default UpcomingCourses;