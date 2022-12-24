/* eslint-disable no-unreachable */
import React from "react";

const SeeMoreSanPham = (props) => {
  let { bgSanPham, imgSanPham, detaiSeeMoreSanPham } = props;
  
  return (
    <>
      <div
        className="layout-see-more-san-pham"
        style={{ backgroundImage: `url(${bgSanPham})` }}
      >
        <div className="mark-bg"></div>
        <div className="border-img-detail-san-pham">
          {/* <img src={imgSanPham1} alt="" className="img-detail-san-pham" /> */}
          <img src={imgSanPham} alt="" className="img-detail-san-pham" />
        </div>
        <div className="container-content-san-pham">
          {detaiSeeMoreSanPham.map((content, index) => {
            return (
              <div key={index}>
                <div className="item-content-detail-san-pham" >
                  <i className="fa-solid fa-pen list-style-pen"></i>
                  {content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SeeMoreSanPham;
