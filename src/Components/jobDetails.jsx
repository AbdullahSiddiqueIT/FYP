import React from "react";
import HeaderJobPart from "./applyJobhedear";
import Footer from "./footer";
import "../CSS/JobDetails.css";
import ExploreItemJobs from "./exploreItemJobs";

export default function jobDetails() {
  const header_text = {
    text1: "Job Detail",
    text2:
      "Unveiling Opportunities: Explore the Details of Your Next Career Move",
  };
  const ExploreItem = [
    {
      text1: "Social Media Assistant",
      text2: "2118 Thornridge Cir. Syracuse, Connecticut 35624",
    },
    {
      text1: "President of Sales",
      text2: "4517 Washington Ave. Manchester, Kentucky 39495",
    },
    {
      text1: "Medical Assistant",
      text2: "2715 Ash Dr. San Jose, South Dakota 83475",
    },
    {
      text1: "Dog Trainer",
      text2: "3891 Ranchview Dr. Richardson, California 62639",
    },
  ];

  return (
    <>
      <div className="main_conteiner">
        <HeaderJobPart {...header_text} />
        <div className="job-detail-main">
          <div className="job-detail-container">
            <div className="job-detail-grid1">
              <div className="job-detail-grid1-part1">
                <div className="apply-sec-part1-second">
                  <div className="apply-mid">
                    <div className="apply-sec-text2">Job Details</div>
                    <div className="apply-sec-text3">Full Time</div>
                  </div>
                  <div className="apply-sec-text-part1">
                    <div className="apply-sec-text4">Graphic Designer</div>
                    <div className="apply-sec-text8">
                      The Walt Disney Company. <br />
                      2972 Westheimer Rd. Santa Ana, Illinois 85486.
                    </div>
                  </div>
                  <div className="apply-sec-text5">
                    <span>Posted Date:</span> <span>5/7/16</span>
                  </div>
                  <div className="job-detail-description">
                    <div className="job-detail-head-text">How to Apply</div>
                    <div className="job-detail-lower-text">
                      Lorem ipsum dolor sit amet consectetur. Purus urna donec
                      sagittis quam sit. Pellentesque tempus nunc mauris
                      adipiscing ullamcorper sed sed. Consectetur elementum
                      elementum dignissim eget nulla aliquet facilisis
                      pellentesque non. Lectus feugiat varius pellentesque ut
                      aliquet in. Nam purus amet nibh facilisis sed porttitor
                      orci risus dictum. Nullam elit at semper id turpis
                      scelerisque. In aliquet tempor tincidunt velit. Elit urna
                      tempus purus vitae varius. Rhoncus a vitae risus tellus
                      ipsum enim facilisi nunc. Ante magna in luctus semper diam
                      est nec consequat. A nisl feugiat sit risus sit sed ut
                      semper convallis. Ridiculus enim a mattis ut sit leo nec
                      dui. Pellentesque odio enim vel volutpat imperdiet ut.
                      Turpis pellentesque ut aliquam egestas cras ullamcorper
                      tellus urna ornare. Pulvinar varius proin nisl ornare
                      tortor. Nisi viverra congue ut euismod laoreet. Quis arcu
                      enim in fames convallis luctus diam consequat sit. Quis
                      vivamus posuere amet et dictum non non venenatis ornare.
                      Eget facilisis diam venenatis amet nascetur hac magnis
                      amet vel. Habitant volutpat cum purus dignissim morbi
                      volutpat volutpat.
                    </div>
                  </div>
                </div>
                <div className="company-Contact">
                  <div className="company-head-text">Contact Information</div>
                  <div className="company-lower-text">(480) 555-0103</div>
                  <div className="company-lower-text">
                    deanna.curtis@example.com
                  </div>
                </div>
              </div>
              <div className="job-detail-grid1-part2">
                <div className="apply-sec-text2">Job Description</div>
                <div className="job-detail-des">
                  <dev className="job-detail-text-head">Detail Description</dev>
                  <div className="job-detail-text-para">
                    Ridiculus enim a mattis ut sit leo nec dui. Pellentesque
                    odio enim vel volutpat imperdiet ut. Turpis pellentesque ut
                    aliquam egestas cras ullamcorper tellus urna ornare.
                    Pulvinar varius proin nisl ornare tortor. Nisi viverra
                    congue ut euismod laoreet. Quis arcu enim in fames convallis
                    luctus diam consequat sit. Quis vivamus posuere amet et
                    dictum non non venenatis ornare. Eget facilisis diam
                    venenatis amet nascetur hac magnis amet vel. Habitant
                    volutpat cum purus dignissim morbi volutpat volutpat.
                  </div>
                </div>
                <div className="job-detail-requirement">
                  <dev className="job-detail-text-head">Detail Description</dev>
                  <div className="job-detail-text-para">
                    Ridiculus enim a mattis ut sit leo nec dui. Pellentesque
                    odio enim vel volutpat imperdiet ut. Turpis pellentesque ut
                    aliquam egestas cras ullamcorper tellus urna ornare.
                    Pulvinar varius proin nisl ornare tortor. Nisi viverra
                    congue ut euismod laoreet. Quis arcu enim in fames convallis
                    luctus diam consequat sit. Quis vivamus posuere amet et
                    dictum non non venenatis ornare. Eget facilisis diam
                    venenatis amet nascetur hac magnis amet vel. Habitant
                    volutpat cum purus dignissim morbi volutpat volutpat.
                  </div>
                </div>
                <div className="company-benefits">
                  <div className="company-head-text">Benefits</div>
                  <div className="company-icon-set company-lower-text">
                    <div className="company-icon-text ">Medical</div>
                    <div className="company-icon-text ">Apartment</div>
                    <div className="company-icon-text ">Car</div>
                    <div className="company-icon-text ">Bonus</div>
                  </div>
                </div>
                <div className="job-detail-btn">Apply Now</div>
              </div>
            </div>

            <div className="job-detail-grid2">
              <div className="job-detail-grid2-part1">
                <div className="company-part1">
                  <div className="company-text1">Company Information</div>
                  <div className="company-name-info">
                    <div className="company-img"></div>
                    <div className="company-text2">Mitsubishi</div>
                  </div>
                  <div className="company-description">
                    <div className="company-head-text">Company Description</div>
                    <div className="company-lower-text">
                      Lorem ipsum dolor sit amet consectetur. Purus urna donec
                      sagittis quam sit. Pellentesque tempus nunc mauris
                      adipiscing ullamcorper sed sed. Consectetur elementum
                      elementum dignissim eget nulla aliquet facilisis
                      pellentesque non. Lectus feugiat varius pellentesque ut
                      aliquet in. Nam purus amet nibh facilisis sed porttitor
                      orci risus dictum. Nullam elit at semper id turpis
                      scelerisque. In aliquet tempor tincidunt velit. Elit urna
                      tempus purus vitae varius. Rhoncus a vitae risus tellus
                      ipsum enim facilisi nunc. Ante magna in luctus semper diam
                      est nec consequat. A nisl feugiat sit risus sit sed ut
                      semper convallis.
                    </div>
                  </div>
                </div>
              </div>
              <div className="job-detail-grid2-part2">
                <div className="conpany-part2">
                  <div className="company-text4">Similar Jobs</div>
               <ExploreItemJobs
                    ExploreItem={ExploreItem}
                    css_style={{
                      gridTemplateColumns: "repeat(2,1fr)",
                      width: "100%",
                     
                    }}
                  />
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
