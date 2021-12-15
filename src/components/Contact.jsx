import React from 'react'
export const Contact = () => {
    return (
        <div className="full-page contact">
            <div className="container block">
                <h2>Contact Us</h2>
                <div className="row">
                    <hr/>
                    <div className="col-md-6 col-sm-12">
                        <h4>Our Address</h4>
                        <p>Pauri Garhwal, Uttarakhand</p>
                        <p>Email: fyear414@gmail.com</p>
                        <p>Phone Number : (+91)XXXXXX4307</p>
                        <hr/>
                        <h4>Opening Hours</h4>
                        <p>Monday to Friday: 8am-8pm</p>
                        <p>Saturday: 8am-6pm</p>
                        <hr/>
                        <p> Please assure that the subscription is successful.</p>
                        <p>Thanks for using our services.</p>
                        
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <hr></hr>
                        <form>
                            <div class="row">
                                <div class="form-group col-md-6">
                                <label for="inputEmail4">Your Name</label>
                                <input type="text" class="form-control" id="inputName" placeholder="Name" />
                                </div>
                                <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Subject</label>
                                <input type="text" class="form-control" id="inputSubject" placeholder="Subject" />
                            </div>
                            <div class="form-group">
                                <label for="inputAddress">Message</label>
                                <textarea class="form-control" aria-label="With textarea" col='50' row="50" ></textarea>
                            </div>
    
                            <button type="submit" class="btn">Send Message</button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
