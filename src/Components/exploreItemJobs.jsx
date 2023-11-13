import React from 'react'

export default function exploreItemJobs(props) {
    const ExploreItem=props.ExploreItem;
    
   
  return (
    <>
    <div className="Latest-Jobs-item-sec" style={props.css_style}>
      {ExploreItem.map((elem) => {
        return(<div className="Latest-Jobs-item">
          <div className="Latest-Jobs-item-part1">
            <div className="Latest-Jobs-item-img"></div>
            <div className="Latest-Jobs-item-text-sec">
              <div className="Latest-Jobs-item-text1">
               { elem.text1 }
              </div>
              <div className="Latest-Jobs-item-text2">
              { elem.text2 }
              </div>
            </div>
          </div>
          <div className="Latest-Jobs-item-part2">
            <div className="Latest-Jobs-item-text3">Full Time</div>
            <span></span>
            <div className="Latest-Jobs-item-text4">Marketing</div>
            <div className="Latest-Jobs-item-text5">Desgin</div>
          </div>
        </div>
      )})
      }
      </div></>
  )
}
