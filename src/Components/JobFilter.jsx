import React from "react";
import HeaderPart from "./headerPart";
import Footer from "./footer";
import "../CSS/FilterJob.css";

export default function JobFilter() {
  return (
    <>
      <HeaderPart />
      <div className="main-filter-container">
        <div className="filter-content">
          <div className="filter-content-part1">
            <div className="filter-text1">
              Type of Employment <button className="filter-arrow"></button>
            </div>
            <div className="checkbox-container">
              <input type="checkbox" name="filter" id="filter" />
              <label for="filter">Full-time (3)</label>
            </div>
          </div>
          <div className="filter-content-part2">
            <div className="filter-tools-bar">
              <div className="filter-tool-right">
                <div className="filter-text2">All Jobs</div>
                <div className="filter-text3">Showing 75 result</div>
              </div>
              <div className="filter-tool-left">
                <div className="filter-text4">
                  <span>
                    <b>Sort by :</b>
                  </span>{" "}
                  Most relevent
                </div>
                <div className="flter-tool-btns">
                  <button className="filter-arrow"></button>
                  <span></span>
                  <button className="filter-grid-col-view"></button>
                  <button className="filter-grid-row-view"></button>
                </div>
              </div>
            </div>
            <div className="filteritems-section">
              <div className="filter-item-section">
                <div className="filter-item-sec-part1">
                  <div>
                    <div className="filter-item-img"></div>
                    <div className="item-filter-text-sec">
                      <div className="filter-text3">Nursing Assistant</div>
                      <div className="filter-text4">2715 Ash Dr. San Jose, South Dakota 83475</div>
                    </div>
                  </div>
                  <div className="Latest-Jobs-item-part2">
                    <div className="Latest-Jobs-item-text3">Full Time</div>
                    <span></span>
                    <div className="Latest-Jobs-item-text4">Marketing</div>
                    <div className="Latest-Jobs-item-text5">Desgin</div>
                  </div>
                </div>
                <div className="filter-item-sec-part2">
                  <button className="filter-apply-btn">Apply</button>
                  <div className="filter-range-sec">
                    <div class="filter-range">
                      <div class="filter-range-inner"></div>
                    </div>
                    <div className="filter-text6">5 applied of 10 capacity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
