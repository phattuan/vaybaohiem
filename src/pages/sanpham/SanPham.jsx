import React, { useState, useEffect, useMemo } from "react";

import {Link} from 'react-router-dom'
import TitleHead from "../../components/titlehead/TitleHead";
import bgSanPham1 from "../../assets/images/bg-san-pham-1.jpg";
import bgSanPham2 from "../../assets/images/bg-san-pham-2.png";
import bgSanPham3 from "../../assets/images/bg-san-pham-3.png";

const SanPham = () => {
  useEffect(() => {
    let itemSp = document.querySelectorAll(".item-sp");
    let vsbMark = document.querySelectorAll(".mark-bg");

    itemSp.forEach((item) => {
      item.addEventListener("mouseenter", showItem);
      item.addEventListener("mouseleave", hiddenItem);
    });
    function showItem(event) {
      // console.log("htp");
      vsbMark.forEach((item) => {
        if (event.target.getAttribute("data-name") === item.getAttribute("data-name")) {
          item.style.visibility = "visible";
          // let buttSeeMore = document.querySelectorAll('.butt-see-more')

          // buttSeeMore.forEach(item=>{
          //   item.addEventListener('click',showSeemore)
          // })

          // function showSeemore(){
            
          // }
        }
      });
    }
    function hiddenItem(event) {
      vsbMark.forEach((item) => {
        if (event.target.getAttribute("data-name") === item.getAttribute('data-name')) {
          item.style.visibility = "hidden";
        }
      });
    }

    return () => {
      itemSp.forEach((item) => {
        item.removeEventListener("mouseenter", showItem);
        item.removeEventListener("mouseleave", hiddenItem);
      });
    };
  }, []);
  return (
    <>
      <div className="layout-san-pham" id="san-pham">
        <TitleHead titleHeader="sản phẩm" />
        <div className="container-san-pham">
          <div className="item-sp item-sp-1" data-name="item-1">
            <div className="border-img-bg">
              <img src={bgSanPham1} alt="" className="img-bg-san-pham" />
            </div>
            <div className="mark-bg" data-name='item-1'>
              <div className="butt-see-more" id="">

                <Link to='/chitietsanphamthaisan'>Chi Tiết</Link>
              </div>
            </div>
            <div className="title-sp">Thai sản</div>
          </div>
          <div className="item-sp item-sp-2" data-name="item-2">
            <div className="border-img-bg">
              <img src={bgSanPham2} alt="" className="img-bg-san-pham" />
            </div>
            <div className="mark-bg" data-name='item-2'>
              <div className="butt-see-more">
                <Link to='/chitietsanphamtreem'>Chi Tiết</Link>
              </div>
            </div>
            <div className="title-sp">
              Đảm bảo tương lai cho bé và bảo vệ toàn diện
            </div>
          </div>
          <div className="item-sp item-sp-3" data-name="item-3">
            <div className="border-img-bg">
              <img src={bgSanPham3} alt="" className="img-bg-san-pham" />
            </div>
            <div className="mark-bg" data-name='item-3'>
              <div className="butt-see-more">
                <Link to='/chitietsanphamgiadinh'>Chi Tiết</Link>
              </div>
            </div>
            <div className="title-sp">
              Đầu tư tiết kiệm và bảo vệ toàn diện cho trụ cột, người thân
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SanPham;
