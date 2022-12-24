import React from "react";

const Lienhe = () => {
  return (
    <>
      <div className="layout-lien-he" id="lien-he">
        <div className="column" style={{paddingLeft:'10px'}}>
          <div className="content">
            <i
              className="fa-solid fa-phone icon-phone"
              style={{ marginRight: "10px" }}
            ></i>{" "}
            SĐT:{" "}
            <span className="text-strong">0909.556.027 - 0342.530.863</span>
            (Quốc Bình)
          </div>
          <div className="content">
            <i
              className="fa-solid fa-envelope icon-email"
              style={{ marginRight: "10px" }}
            ></i>
            Email:
            <span className="text-strong">buiquocbinh01021993@gmail.com</span>
          </div>
          <a href="https://www.facebook.com/quocbinh.chianhhieuanh" className="content">
            <i
              className="fa-brands fa-facebook icon-face"
              style={{ marginRight: "10px" }}
            ></i>
            FaceBook: <span className="text-strong">www.facebook.com/quocbinh.chianhhieuanh</span>
          </a>
        </div>
        <div className="column" style={{borderLeft:'1px solid black', paddingLeft: "10px"}}>
          <div className="content">
            <i
              className="fa-solid fa-phone icon-phone"
              style={{ marginRight: "10px" }}
            ></i>
            SĐT: <span className="text-strong">0909.856.027</span>
            (Lưu Niệm)
          </div>
          <div className="content">
            <i
              className="fa-solid fa-envelope icon-email"
              style={{ marginRight: "10px" }}
            ></i>
            Email: <span className="text-strong">hluniem93@gmail.com</span>
          </div>
          <a href="https://www.facebook.com/luu.niem.1" className="content">
            <i
              className="fa-brands fa-facebook icon-face"
              style={{ marginRight: "10px" }}
            ></i>
            FaceBook: <span className="text-strong">www.facebook.com/luu.niem.1</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Lienhe;
