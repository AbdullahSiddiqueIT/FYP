import React from "react";
import HeaderJobPart from "./applyJobhedear";
import Footer from "./footer";
import "../CSS/PostJob.css";
export default function postJob() {
  const header_text = {
    text1: "Post a Job",
    text2:
      "Shape the Future: Post Your Opportunity and Find Your Ideal Candidate Today!",
  };

  return (
    <>
      <div className="main_conteiner">
        <HeaderJobPart {...header_text} />
        <div className="main-postJob-container">
          <div className="post-content-container">
            <div className="post-part1">
              <div className="post-text1">Company Information</div>
                <div className="post-input-file">
                  <input
                    type="file"
                    name="input-box"
                    placeholder="Upload CV"
                    id="post-input-box"
                    required
                  />
                  <label for="post-input-box" className="post-input-label">
                    <span className="post-upload-icon"></span>Upload Logo
                  </label>
                </div>
              <div className="post-company-info">
                <input
                  type="text"
                  name="Company Name"
                  placeholder="Company Name*"
                  className="post-input"
                />
                <textarea
                  name="Company Description"
                  placeholder="Company Description*"
                  className="post-text-area"
                />
              </div>
              <div className="post-application-ins">
                <div className="post-text2">Application Instruction</div>
                <input
                  type="text"
                  name="How to Apply"
                  placeholder="How to Apply*"
                  className="post-input"
                />
              </div>
              <div className="post-contact-info">
                <div className="post-text3">Contact Information</div>
                <input
                  type="text"
                  name="Contact Email"
                  placeholder="Contact Email*"
                  className="post-input"
                />
                <input
                  type="text"
                  name="Contact Phone"
                  placeholder="Contact Phone*"
                  className="post-input"
                />
              </div>
            </div>
            <div className="post-part2">
              <div className="post-text4">Job Details</div>
              <input
                type="text"
                name="Job Title"
                placeholder="Job Title*"
                className="post-input"
              />
              <select className="post-select">
                <option value="Job Type">Job Type</option>
              </select>
              <input
                type="text"
                name="Job Location"
                placeholder="Job Location*"
                className="post-input"
              />
              <input
                type="text"
                name="Job Category"
                placeholder="Job Category*"
                className="post-input"
              />
              <input
                type="text"
                name="Application Deadline"
                placeholder="Application Deadline*"
                className="post-input"
              />
              <textarea
                name="Job Description"
                className="post-text-area"
                placeholder="Job Description*"
              ></textarea>
            </div>
            <div className="post-part3">
              
                
                <div className="post-btn">Post Job</div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
