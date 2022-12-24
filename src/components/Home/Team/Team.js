import React from 'react';

const Team = () => {
    return (
        <div className='px-5'>
            <div className='text-center'>
                <h4 className='fw-bold text-primary'>Team</h4>
                <h1 className='text-secondary'>Meet Our Team</h1>
            </div>
            <div className='row row-cols-1 row-cols-md-4 row-cols-sm-2 mt-5'>
                <div>
                    <div>
                        <img className='img-thumbnail' src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className='p-3 border border-top-0 rounded-3'>
                        <p className='m-0 fw-bold fs-4'>Kabir Ali</p>
                        <p className='mb-2 text-secondary fw-semibold'><small>CEO</small></p>
                        <div className='fs-4 d-flex gap-2'>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img className='img-thumbnail' src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className='p-3 border border-top-0 rounded-3'>
                        <p className='m-0 fw-bold fs-4'>Kara Singh</p>
                        <p className='mb-2 text-secondary fw-semibold'><small>HR Manger</small></p>
                        <div className='fs-4 d-flex gap-2'>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img className='img-thumbnail' src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className='p-3 border border-top-0 rounded-3'>
                        <p className='m-0 fw-bold fs-4'>Jaber Ali</p>
                        <p className='mb-2 text-secondary fw-semibold'><small>Instructor</small></p>
                        <div className='fs-4 d-flex gap-2'>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <img className='img-thumbnail' src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    </div>
                    <div className='p-3 border border-top-0 rounded-3'>
                        <p className='m-0 fw-bold fs-4'>Jahana Ali</p>
                        <p className='mb-2 text-secondary fw-semibold'><small>Instructor</small></p>
                        <div className='fs-4 d-flex gap-2'>
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-linkedin"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;