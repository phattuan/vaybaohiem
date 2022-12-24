/* eslint-disable no-useless-concat */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo, useLayoutEffect } from "react";
import TitleHead from "../../components/titlehead/TitleHead";

// //note =========== import img ==============
import bgCenterBg from "../../assets/images/undraw_statistic_chart_re_w0pk.svg";
import bg_1 from "../../assets/images/undraw_air_support_re_nybl.svg";
import bg_2 from "../../assets/images/undraw_dreamer_re_9tua.svg";
import ContentItem from "./ContentItem";

//* =======import data vay tin chap =======
import dataVayTinChap from "../../data/datavaytinchap.json";
import AOS from "aos";
import "aos/dist/aos.css";

const VayTinChap = () => {
  const [hidden, setHidden] = useState(true);
  const [showContentItem, setShowContentItem] = useState("hidden-cnt-item");
  const [position, setPosition] = useState({
    x: null,
    y: null,
  });
  const [addContentItem, setAddContentItem] = useState(null);
  const [dataContentItem, setDataContentItem] = useState(dataVayTinChap);
  const [aosAnimation, setAosAnimation] = useState("fade-right");
  // note ======= data position item start ======
  const dataPosition = {
    "vay-theo-luong-2-thang": { x: "30vw", y: "0" },
    "vay-theo-bao-hiem-nhan-tho": { x: "30vw", y: "10%" },
    "vay-theo-HD-tin-dung-cu": { x: "30vw", y: "22%" },
    "vay-theo-sim-dien-thoai-chinh-chu": { x: "30vw", y: "32%" },
    "vay-theo-so-hong-hd-vay-tin-chap": { x: "30vw", y: "42%" },
    "vay-theo-tai-khoan-ngan-hang-co-giao-dich-so-du-lon": {
      x: "30vw",
      y: "55%",
    },
    "vay-theo-don-dien-nuoc-nguoi-than-trong-gia-dinh": { x: "30vw", y: "67%" },
    "ho-tro-no-xau": { x: "30vw", y: "88%" },
  };

  useEffect(() => {
    let containerLeft = document.querySelectorAll(".box");
    containerLeft.forEach(function (item) {
      item.addEventListener("click", showContentItem);
    });
    function postPositionContentItem(item) {
      switch (item) {
        case "vay-theo-luong-2-thang":
          setPosition({
            x: dataPosition["vay-theo-luong-2-thang"].x,
            y: dataPosition["vay-theo-luong-2-thang"].y,
          });
          break;
        case "vay-theo-bao-hiem-nhan-tho":
          setPosition({
            x: dataPosition["vay-theo-bao-hiem-nhan-tho"].x,
            y: dataPosition["vay-theo-bao-hiem-nhan-tho"].y,
          });
          break;
        case "vay-theo-HD-tin-dung-cu":
          setPosition({
            x: dataPosition["vay-theo-HD-tin-dung-cu"].x,
            y: dataPosition["vay-theo-HD-tin-dung-cu"].y,
          });
          break;
        case "vay-theo-sim-dien-thoai-chinh-chu":
          setPosition({
            x: dataPosition["vay-theo-sim-dien-thoai-chinh-chu"].x,
            y: dataPosition["vay-theo-sim-dien-thoai-chinh-chu"].y,
          });
          break;
        case "vay-theo-so-hong-hd-vay-tin-chap":
          setPosition({
            x: dataPosition["vay-theo-so-hong-hd-vay-tin-chap"].x,
            y: dataPosition["vay-theo-so-hong-hd-vay-tin-chap"].y,
          });
          break;
        case "vay-theo-tai-khoan-ngan-hang-co-giao-dich-so-du-lon":
          setPosition({
            x: dataPosition[
              "vay-theo-tai-khoan-ngan-hang-co-giao-dich-so-du-lon"
            ].x,
            y: dataPosition[
              "vay-theo-tai-khoan-ngan-hang-co-giao-dich-so-du-lon"
            ].y,
          });
          break;
        case "vay-theo-don-dien-nuoc-nguoi-than-trong-gia-dinh":
          setPosition({
            x: dataPosition["vay-theo-don-dien-nuoc-nguoi-than-trong-gia-dinh"]
              .x,
            y: dataPosition["vay-theo-don-dien-nuoc-nguoi-than-trong-gia-dinh"]
              .y,
          });
          break;
        case "ho-tro-no-xau":
          setPosition({
            x: dataPosition["ho-tro-no-xau"].x,
            y: dataPosition["ho-tro-no-xau"].y,
          });
          break;
        default:
          break;
      }
    }
    function postDataItem(event, itemContent, itemDataContent) {
      setHidden(true);
      setShowContentItem("visible-cnt-item");
      setHidden(false);
      postPositionContentItem(itemContent);
      document
        .querySelector(
          `.box[data-name=${event.target.getAttribute("data-name")}]`
        )
        .setAttribute("class", "border-h-shadow box styleClickSelectItem");

      setAddContentItem(
        <ContentItem
          x={dataPosition[itemContent].x}
          y={dataPosition[itemContent].y}
          data={itemDataContent}
          close={closeContentItem}
        />
      );
    }

    function showContentItem(event) {
      document.querySelectorAll(".box").forEach((item) => {
        item.setAttribute("class", "border-h-shadow box");
      });

      if (hidden) {
        switch (event.target.getAttribute("data-name")) {
          case "vay-theo-luong-2-thang":
            postDataItem(
              event,
              "vay-theo-luong-2-thang",
              dataContentItem.vayTheoLuong2Thang
            );
            break;
          case "vay-theo-bao-hiem-nhan-tho":
            postDataItem(
              event,
              "vay-theo-bao-hiem-nhan-tho",
              dataContentItem.vayTheoBaoHiemNhanTho
            );
            break;
          case "vay-theo-HD-tin-dung-cu":
            postDataItem(
              event,
              "vay-theo-HD-tin-dung-cu",
              dataContentItem.vayTheoHDTinDungCu
            );
            break;
          case "vay-theo-sim-dien-thoai-chinh-chu":
            postDataItem(
              event,
              "vay-theo-sim-dien-thoai-chinh-chu",
              dataContentItem.vayTheoSimDienThoaiChinhChu
            );
            break;
          case "vay-theo-so-hong-hd-vay-tin-chap":
            postDataItem(
              event,
              "vay-theo-so-hong-hd-vay-tin-chap",
              dataContentItem.vayTheoSoHongHDVayTinChap
            );
            break;
          case "vay-theo-tai-khoan-ngan-hang-co-giao-dich-so-du-lon":
            postDataItem(
              event,
              "vay-theo-tai-khoan-ngan-hang-co-giao-dich-so-du-lon",
              dataContentItem.vayTheoTaiKhoanNganHangCoGiaoDichSoDuLon
            );
            break;
          case "vay-theo-don-dien-nuoc-nguoi-than-trong-gia-dinh":
            postDataItem(
              event,
              "vay-theo-don-dien-nuoc-nguoi-than-trong-gia-dinh",
              dataContentItem.vayTheoDonDienNuocNguoiThanTrongGiaDinh
            );
            break;
          case "ho-tro-no-xau":
            postDataItem(event, "ho-tro-no-xau", dataContentItem.hoTroNoXau);
            break;
          default:
            postDataItem(event, null, null);
            break;
        }
      } else {
        setShowContentItem("hidden-cnt-item");
        setHidden(true);
      }
    }

    return () => {
      containerLeft.forEach(function (item) {
        item.removeEventListener("click", showContentItem);
      });
    };
  }, []);

  function closeContentItem() {
    setShowContentItem("hidden-cnt-item");
    setHidden(true);
    document.querySelectorAll(".box").forEach((item) => {
      item.setAttribute("class", "border-h-shadow box");
    });
  }
  useEffect(() => {
    // AOS.refresh();
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="layout-vay-tin-chap" id="vay-tin-chap">
        <TitleHead titleHeader="vay tín chấp" />
        <div className="layout-content">
          {/* //note======== img bg ========  */}
          <div className="container-img-bg-center">
            <img src={bgCenterBg} alt="" className="img-bg-center" />
          </div>
          <div className="container-img-bg-1">
            <img src={bg_1} alt="" className="img-bg-1" />
          </div>
          <div className="container-img-bg-2">
            <img src={bg_2} alt="" className="img-bg-2" />
          </div>
          {/* //note ========== content ========= */}
          <div className="container-title-vay-tin-chap">
            {/* //note======== container left start ========  */}
            <div className="container-left container-item">
              <div
                className="border-h-shadow box"
                data-name="vay-theo-luong-2-thang"
                // data-aos={aosAnimation}
              >
                <p
                  className="title fontSize-Lobster"
                  data-name="vay-theo-luong-2-thang"
                >
                  Vay theo lương 2 tháng
                </p>
              </div>
              <div
                className="border-h-shadow box"
                data-name="vay-theo-bao-hiem-nhan-tho"
                // data-aos={aosAnimation}
              >
                <p
                  className="title fontSize-Lobster"
                  data-name="vay-theo-bao-hiem-nhan-tho"
                >
                  Vay theo bảo hiểm nhân thọ
                </p>
              </div>
              <div
                className="border-h-shadow box "
                data-name="vay-theo-HD-tin-dung-cu"
                // data-aos={aosAnimation}
              >
                <p
                  className="title fontSize-Lobster"
                  data-name="vay-theo-HD-tin-dung-cu"
                >
                  Vay theo HD tín dụng cũ
                </p>
              </div>
              <div
                className="border-h-shadow box"
                data-name="vay-theo-sim-dien-thoai-chinh-chu"
                // data-aos={aosAnimation}
              >
                <p
                  className="title fontSize-Lobster"
                  data-name="vay-theo-sim-dien-thoai-chinh-chu"
                >
                  Vay theo sim điện thoại chính chủ
                </p>
              </div>
            </div>
            {/* //note ======= container left end =========  */}
            {/* //note ======= container right start ======= */}
            <div className="container-right container-item">
              <div
                className="border-h-shadow box"
                data-name="vay-theo-so-hong-hd-vay-tin-chap"
                // data-aos="fade-left"
              >
                <p
                  className="title fontSize-Lobster"
                  data-name="vay-theo-so-hong-hd-vay-tin-chap"
                >
                  Vay theo sổ hồng, HD vay tín chấp
                </p>
              </div>
              <div
                className="border-h-shadow box"
                data-name="vay-theo-tai-khoan-ngan-hang-co-giao-dich-so-du-lon"
                // data-aos="fade-left"
              >
                <p
                  className="title fontSize-Lobster"
                  data-name="vay-theo-tai-khoan-ngan-hang-co-giao-dich-so-du-lon"
                >
                  Vay theo tài khoản ngân hàng có giao dịch số dư lớn
                </p>
              </div>
              <div
                className="border-h-shadow box"
                data-name="vay-theo-don-dien-nuoc-nguoi-than-trong-gia-dinh"
                // data-aos="fade-left"
              >
                <p
                  className="title fontSize-Lobster"
                  data-name="vay-theo-don-dien-nuoc-nguoi-than-trong-gia-dinh"
                >
                  Vay theo hóa đơn điện nước người thân trong gia đình
                </p>
              </div>
              <div
                className="border-h-shadow box"
                data-name="ho-tro-no-xau"
                // data-aos={aosAnimation}
              >
                <p className="title fontSize-Lobster" data-name="ho-tro-no-xau">
                  Hỗ trợ nợ xấu
                </p>
              </div>
            </div>
            {/* //note ======= container right end =========  */}
          </div>

          <div className={showContentItem + " " + `container-content-item-all`}>
            {addContentItem}
          </div>
        </div>
      </div>
    </>
  );
};

export default VayTinChap;
