import React from "react";
import HeaderJobPart from "./applyJobhedear";
import Footer from "./footer";
import ExploreItemJobs from "./exploreItemJobs";
import "../CSS/CompanyDetail.css";

export default function companyDetail() {
  const header_text = {
    text1: "Company Detail",
    text2: "Elevating Careers: Discover the Story and Opportunities",
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
    text1:"Dog Trainer",
    text2:"3891 Ranchview Dr. Richardson, California 62639",  
    }    
  ];

  return (
    <>
      <div className="main_conteiner">
        <HeaderJobPart {...header_text} />
        <div className="main-company-container">
          <div className="company-content-container">
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
                  sagittis quam sit. Pellentesque tempus nunc mauris adipiscing
                  ullamcorper sed sed. Consectetur elementum elementum dignissim
                  eget nulla aliquet facilisis pellentesque non. Lectus feugiat
                  varius pellentesque ut aliquet in. Nam purus amet nibh
                  facilisis sed porttitor orci risus dictum. Nullam elit at
                  semper id turpis scelerisque. In aliquet tempor tincidunt
                  velit. Elit urna tempus purus vitae varius. Rhoncus a vitae
                  risus tellus ipsum enim facilisi nunc. Ante magna in luctus
                  semper diam est nec consequat. A nisl feugiat sit risus sit
                  sed ut semper convallis.
                </div>
              </div>
              <div className="company-location">
                <div className="company-head-text">Location</div>
                <div className="company-lower-text">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                </div>
              </div>
              <div className="company-Contact">
                <div className="company-head-text">Contact Information</div>
                <div className="company-lower-text">(480) 555-0103</div>
                <div className="company-lower-text">
                  deanna.curtis@example.com
                </div>
              </div>
              <div className="company-benefits">
                <div className="company-head-text">Company Benefits</div>
                <div className="company-icon-set company-lower-text">
                  <div className="company-icon-text ">Medical</div>
                  <div className="company-icon-text ">Apartment</div>
                  <div className="company-icon-text ">Car</div>
                  <div className="company-icon-text ">Bonus</div>
                </div>
              </div>
            </div>

            <div className="conpany-part2">
              <div className="company-text4" >Job Listings</div>
              <ExploreItemJobs ExploreItem={ExploreItem} css_style={{
                gridTemplateColumns:"repeat(1,1fr)",
                width:"100%",
              }}/>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
