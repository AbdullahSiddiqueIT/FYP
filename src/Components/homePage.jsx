import React from "react";
import HeaderPart from "./headerPart";
import CategoryPart from "./categoryPart";
import SocialMedia from "./socialMedia";
import ExploreLatestJobs from "./exploreLatestJobs";
import JobSeeker from "./jobSeeker";
import Footer from "./footer";
import "../CSS/HomePage.css";
export default function homePage() {
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
    {
      text1: "Nursing Assistant",
      text2: "4140 Parker Rd. Allentown, New Mexico 31134",
    },
    {
      text1: "Marketing Coordinator",
      text2: "2464 Royal Ln. Mesa, New Jersey 45463",
    },
    {
      text1: "President of Sales",
      text2: "8502 Preston Rd. Inglewood, Maine 98380",
    },
    {
      text1: "Web Designer",
      text2: "1901 Thornridge Cir. Shiloh, Hawaii 81063",
    },
  ];

  return (
    <>
      <div className="main_Container">
        <HeaderPart />
        <CategoryPart />
        <SocialMedia />
        <ExploreLatestJobs
          ExploreItem={ExploreItem}
          css_style={{
            gridTemplateColumns: "repeat(2,1fr)",
          }}
        />
        <JobSeeker />
        <Footer />
      </div>
    </>
  );
}
