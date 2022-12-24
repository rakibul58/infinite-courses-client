import React from 'react';

const CustomerReviews = () => {
    return (
        <div>
            <div class="container">
                <div class="text-center mb-5">
                    <h4 class="text-muted" contenteditable="false">Not Yet Convinced?</h4>
                    <h1 class="text-primary" contenteditable="false">Read Customer Reviews</h1>
                </div>
                <div class="d-flex justify-content-between gap-4">
                    <div className='d-flex flex-column'>
                        <img style={{height:"200px" , marginBottom:"-40px" , zIndex: "1"}} src="https://images.unsplash.com/photo-1495995424756-6a5a3f9e7543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbiUyMHN0dWRlbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="img-fluid mx-auto w-50 rounded-circle" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                        <div className='border rounded-3 p-5'>
                            <p class="fs-110 font-cond-l" contenteditable="false">" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
                            <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Martha Stewart</h5>
                            <small class="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Business Woman - New York</small>
                        </div>
                    </div>
                    <div className='d-flex flex-column'>
                        <img style={{height:"200px" , marginBottom:"-40px" , zIndex: "1"}} src="https://media.istockphoto.com/id/1351445530/photo/african-student-sitting-in-classroom.jpg?b=1&s=170667a&w=0&k=20&c=0M-gtlR1M_x9sYGarPG44f54s5cBBdHTsPxmzNzHbAE=" className="img-fluid mx-auto w-50 rounded-circle" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                        <div className='border rounded-3 p-5'>
                            <p class="fs-110 font-cond-l" contenteditable="false">" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
                            <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Ariana Menage</h5>
                            <small class="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Recording Artist - Los Angeles</small>
                        </div>
                    </div>
                    <div className='d-flex flex-column'>
                        <img style={{height:"200px" , marginBottom:"-40px" , zIndex: "1"}} src="https://media.istockphoto.com/id/1446120439/photo/young-woman-reaching-for-a-book-to-study-next-when-preparing-for-exam.jpg?b=1&s=170667a&w=0&k=20&c=gt1SA6D0YqWFisVJyvbLBL6K9m-jch6jSgRJoBCP5FM=" className="img-fluid mx-auto w-50 rounded-circle" title="" alt="" data-edit="false" data-editor="field" data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                        <div className='border rounded-3 p-5'>
                            <p class="fs-110 font-cond-l" contenteditable="false">" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. "</p>
                            <h5 class="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Sean Carter</h5>
                            <small class="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Fund Manager - Chicago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviews;