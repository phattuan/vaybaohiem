/* eslint-disable array-callback-return */
import React, { useState, useEffect, useCallback, useMemo, useLayoutEffect } from "react";

const ContentItem = (props) => {
  const stylesPosition = {
    position: "absolute",
    top: props.y,
    left: props.x,
  };


  useEffect(()=>{
    let buttCloseContentItem = document.querySelector('#close-data-item');
    buttCloseContentItem.addEventListener('click', props.close);

   

    return ()=>{
      buttCloseContentItem.removeEventListener('click', props.close);
    }
  },[])

  return (
    <>
      {/* ==== container content item ====== */}
      <div className="container-content-item" style={stylesPosition}>
        <i className="fa-solid fa-xmark " id="close-data-item"></i>
        {props.data.map((item, index) => {
          // console.log(index);
          return (
            <div key={index}>
              <p className="content-item">{item}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ContentItem;
