import React from 'react'

export const Signup = () => {
    return (
        <div className="full-page Signup">
            <div className="container block">
                <h2>My Account</h2>
                <hr/>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                            <form>
                                <h3>Login</h3>
                                <div class="form-group">
                                    <label for="inputEmail4">Email Address</label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Enter Email" />
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail4">Password</label>
                                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                                </div>
                                <button type="submit" class="btn">Login</button>
                            </form>
                            
                        </div>

                        <div className="col-md-6 col-sm-12">
                            
                            <form>
                                <h3>Register</h3>
                                <div class="form-group">
                                    <label for="inputEmail4">Your Name</label>
                                    <input type="text" class="form-control" id="inputName" placeholder="Name" />
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail4">Email</label>
                                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail4">Password</label>
                                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail4">Repeat Password</label>
                                    <input type="password" class="form-control" id="inputRePassword" placeholder="Password" />
                                </div>
                                <button type="submit" class="btn">Register</button>
                            </form>
                            
                        </div>
                    </div>
            </div>
        </div>
    )
}
