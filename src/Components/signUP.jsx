import React from 'react'
import "../CSS/SignUp.css";

export default function signUP() {
    return (
        <div className='main_Container-signup'>
            <div className="Section_1">
                <div className='jobHunt_text'>
                    Job Hunt
                </div>
                <div class='emp_text'>
                    <span style={{ textAlign: "center", width: "20rem", display: "inline-block" }}> Empowering Your Next Step</span> <br />
                    Your Path to Opportunities Begins Here.
                </div>
            </div>
            <div className="Section_2">
                <div className="Signup_box">
                    <span className="Signup_text">Sign Up</span>
                    <span className="Welcome_text">Welcome to a world of endless possibilities and exciting opportunities. Let's embark on this journey together!</span>
                    <form onSubmit={""}>
                        <input type="email" placeholder="Email" className='Input_Field' />
                        <input type="password" placeholder="Password" className='Input_Field' />
                        <input type="submit" value="SUBMIT" className='submit_btn' />
                    </form>
                    <div className="Or_section"><span className='b_W'></span> <span className='Or_div'>OR</span>    <span className='b_W'></span></div>
                    <div className=''>
                        <button className='google_btn'>Sign up with Google</button>
                        <button className='facebook_btn'>Sign up with Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
