import React from 'react'
import HeaderJobPart from './applyJobhedear'
import Footer from "./footer"
import "../CSS/ApplyForJob.css"


export default function applyForJob() {
  const header_text={
    text1:"Apply For Job",
    text2:"Seize the Opportunity: Your Journey Starts Here, Apply Today!"
  }

 
  return (
    <div className="main_conteiner">
          <HeaderJobPart {...header_text}/>
          <div className="main-section-applyjob">
            <div className="main-content-applyjob">
              <div className="apply-sec-part1">
                <div className="apply-sec-text1">Job Information</div>
                <div className="apply-sec-part1-second">
                  <div className="apply-mid">
                <div className="apply-sec-text2">Job Details</div>
                <div className="apply-sec-text3">Full Time</div>
                </div>
                <div className="apply-sec-text-part1">
                <div className="apply-sec-text4">Graphic Designer</div>
                <div className='apply-sec-text8'>
                The Walt Disney Company. <br />
                2972 Westheimer Rd. Santa Ana, Illinois 85486.
                </div>
                </div>
                <div className="apply-sec-text5"><span>Posted Date:</span> <span>5/7/16</span></div>
                </div>
              </div>
              <div className="apply-sec-part2">
                <div className="apply-sec-text6">Application Form</div>
                <div className="apply-sec-part2-second">
                  <div className="apply-personal-info">
                    <div className="apply-sec-text7">Personal Information</div>
                    <input type="text" className="apply-personal-input" placeholder='Full Name*' required/>
                    <input type="email" className="apply-personal-input" placeholder='Contact Email*' required/>
                    <input type="text" className="apply-personal-input" placeholder='Contact Phone Number*' required/>
                  </div>
                  <div className="apply-resume">
                    <div className="apply-sec-text9">Resume/CV Upload</div>
                    <div className="apply-input-file">
                      <input type="file" name="input-box" placeholder='Upload CV'  
                      id='apply-input-box' required/>
                     <label for="apply-input-box" className='apply-input-label'><span className='apply-upload-icon'></span>Upload CV</label>
                    </div>
                  </div>
                  <div className="apply-Cover">
                    <div className="apply-sec-text10">Cover Letter</div>
                    <textarea className="apply-Cover-Latter" placeholder="Cover Latter"   />
                  </div>
                  <div className="apply-btn">Post Job</div>
                </div>
                </div>



            </div>

          </div>
          <Footer/>
    </div>
  )
}
