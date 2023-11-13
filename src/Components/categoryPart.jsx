import React from "react";



export default function categoryPart() {
  var cotegorylist=[
    {
    imgpath:"../CSS/Imgs/categories-imgs/pen-img.png",
    text1:"Design",
    text2:"256 Jobs available"

  },
    {
    imgpath:"../CSS/Imgs/categories-imgs/Sales.png",
    text1:"Sales",
    text2:"256 Jobs available"

  },
    {
    imgpath:"FYP/fyp/src/Components/btn-serch-icon.png",
    text1:"Marketing",
    text2:"256 Jobs available"

  },
    {
    imgpath:"FYP/fyp/src/CSS/Imgs/categories-imgs/Bussiness.png",
    text1:"Finance",
    text2:"256 Jobs available"

  },
    {
    imgpath:"../CSS/Imgs/categories-imgs/Technology.png",
    text1:"Technology",
    text2:"256 Jobs available"

  },
    {
    imgpath:"../CSS/Imgs/categories-imgs/Engineering.png",
    text1:"Engineering",
    text2:"256 Jobs available"

  },
    {
    imgpath:"FYP/fyp/src/CSS/Imgs/categories-imgs/pen-img.png",
    text1:"Business",
    text2:"256 Jobs available"

  },
    {
    imgpath:"../CSS/Imgs/categories-imgs/Human.png",
    text1:"Human Resource",
    text2:"256 Jobs available"

  },
];
  return (
    <>
      <div className="main-category-sec">
        <div className="cotegory-text-sec">
          <div className="cotegory-text1">Explore by</div>
          <div className="cotegory-text2">Categories</div>
        </div>
        <div className="cotegory-explore-sec">
          {
            cotegorylist.map((elem)=>{
               
             
            return(
          <div className="cotegory-item">
            <div className="cotegory-img"  ></div>
            <div>
            <div className="cotegory-text3" >{elem.text1}</div>
            <div className="cotegory-text4" >{elem.text2}  <span></span> </div>
            </div>
          </div>
  )})
          }
        </div>
        <div className="cotegory-text5"> See All <span></span> </div>
      </div>

    </>
  );
}
