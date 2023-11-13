import React from "react";
import ExploreItemJobs from "./exploreItemJobs"

export default function exploreLatestJobs(props) {
    const ExploreItem=props.ExploreItem;
    
  return (
    <div className="main-Latest-Jobs">
      <div className="Latest-Jobs-text-sec">
        <div className="Latest-Jobs-text1">Explore the</div>
        <div className="Latest-Jobs-text2">Latest Jobs</div>
      </div>
      <ExploreItemJobs ExploreItem={ExploreItem} css_style={props.css_style}/>
    </div>
    
  );
}
