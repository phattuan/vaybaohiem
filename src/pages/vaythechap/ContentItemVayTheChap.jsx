/* eslint-disable no-unreachable */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from "react";
// =============import image test ===========
// import imgContent from "../../assets/images/pexels-mihai-vlasceanu-10965034.jpg";
//*============== import data json =================
import dataVayTheChap from "../../data/datavaythechap.json";

const ContentItemVayTheChap = (props) => {
  let { titleItem, imageItem, contentItem } = props;

  const [dataContent, setDataContent] = useState(contentItem);
  // const [addContentEle, setAddContentEle] = useState(null);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    setTitle(titleItem);
    setDataContent(contentItem);
    // console.log(dataContent);
  }, []);
  let addContentEleLoiIch = dataContent.loiIch.map((contentItem, index) => {
    // console.log(contentItem);
    return (
      <span key={index}>
        <i className="fa-solid fa-check"></i>
        {contentItem}
      </span>
    );
  });

  let addContentEleDKVV = dataContent.dieuKienVayVon.map(
    (contentItem, index) => {
      return (
        <span key={index}>
          <i className="fa-solid fa-check"></i>
          {contentItem}
        </span>
      );
    }
  );
  let addContentEleHSVV = dataContent.hoSoVayVon.map((contentItem, index) => {
    return (
      <span key={index}>
        <i className="fa-solid fa-check"></i>
        {contentItem}
      </span>
    );
  });
  return (
    <>
      <div className="layout-content-item-vay-the-chap">
        <div className="container-header-item">
          {/* {titleItem} */}
          {title}
        </div>
        <div className="container-img">
          <img
            src={imageItem}
            alt="img vay the chap"
            className="img-content"
          />
        </div>
        <div className="container-content-layout">
          <div className="container-chill">
            <p className="loi-ich title-chill">Lợi ích</p>
            {addContentEleLoiIch}
          </div>
          <div className="container-chill">
            <p className="loi-ich title-chill">Đối tượng và điều kiện vay vốn</p>
            {addContentEleDKVV}
          </div>
          <div className="container-chill">
            <p className="loi-ich title-chill">Hồ sơ vay vốn</p>
            {addContentEleHSVV}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentItemVayTheChap;
