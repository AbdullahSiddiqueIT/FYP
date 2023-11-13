import React from "react";

export default function jobSeeker() {
    const jobitem=[
        {
            text1:"Jenny Wilson",
            text2:"Louis Vuitton",
            text3:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con",
        },
        {
            text1:"Courtney Henry",
            text2:"Gillette",
            text3:"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu",
        },
        {
            text1:"Jane Cooper",
            text2:"The Walt Disney Company",
            text3:"Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu",
        },
    ]
  return (
    <>
      <div className="main-job-seeker">
        <div className="job-seeker-text-sec">
          <div className="job-seeker-text1">What Says</div>
          <div className="job-seeker-text2">Job Seekers</div>
        </div>
        <div className="job-seeker-explore-items">
            {
                jobitem.map((elem)=>{return(

          <div className="job-seeker-item">
            <div className="job-seeker-item-part1">
              <div className="job-seeker-item-inner-part1">
                <div className="job-seeker-item-img1"></div>
                <div className="job-seeker-item-text-sec">
                  <div className="job-seeker-text3">{elem.text1}</div>
                  <div className="job-seeker-text4">{elem.text2}</div>
                </div>
              </div>
                <div className="job-seeker-item-inner-part2">
                  <div className="job-seeker-item-img2"></div>
                </div>
            </div>
              <div className="job-seeker-item-part2">
                <div className="job-seeker-text5">
                  {
                    elem.text3
                  }
                </div>
              </div>
          </div>
        )})}
        </div>
      </div>
    </>
  );
}
