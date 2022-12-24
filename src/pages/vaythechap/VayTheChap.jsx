/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo } from "react";

// ============= import title head =====
import TitleHead from "../../components/titlehead/TitleHead";

//======== import router dom ======
import { Link } from "react-router-dom";

// ====== import img =======
import img1 from "../../assets/images/undraw_country_side_re_0dou.svg";
import img2 from "../../assets/images/undraw_with_love_re_1q3m.svg";
import img3 from "../../assets/images/Ellipse 49.svg";

import iconBook from "../../assets/images/book.png";
import iconHouse from "../../assets/images/house.png";
import iconCar from "../../assets/images/car.png";
import iconBuild from "../../assets/images/architect.png";
import iconChungCu from "../../assets/images/apartment.png";
import iconHoptac from "../../assets/images/cooperation.png";

// ======= import item components ======
import ItemVayTheChap from "../../components/itemvaythechap/ItemVayTheChap";

const VayTheChap = () => {
  return (
    <>
      <div className="layout-vay-the-chap" id="vay-the-chap">
        <TitleHead titleHeader="vay thế chấp" />
        <div className="layout-content">
          <div className="img-1">
            <img src={img1} alt="img 1" className="img" />
          </div>
          <div className="img-2">
            <img src={img2} alt="img 2" className="img" />
          </div>
          <div className="img-3">
            <img src={img3} alt="img 3" className="img" />
          </div>

          <div className="container-item">
            <div className="row">
              <Link to="/vaythechapsodosohong">
                <ItemVayTheChap
                  icon={iconBook}
                  titleItem="Vay thế chấp sổ đỏ-sổ hồng"
                />
              </Link>
              <Link to="/vaythechapmuanha">
                <ItemVayTheChap
                  icon={iconHouse}
                  titleItem="Vay thế chấp mua nhà"
                />
              </Link>
              <Link to="/vaythechapmuaxeoto">
                <ItemVayTheChap
                  icon={iconCar}
                  titleItem="Vay thế chấp mua xe ô tô"
                />
              </Link>
            </div>
            <div className="row">
              <Link to="/vaymuacanhochungcu">
                <ItemVayTheChap
                  icon={iconBuild}
                  titleItem="Vay mua căn hộ chung cư"
                />
              </Link>
              <Link to="/vayxaydungsuachuanha">
                <ItemVayTheChap
                  icon={iconChungCu}
                  titleItem="Vay xây dựng sửa chữa nhà"
                />
              </Link>
              <Link to="/vayvonkinhdoanh">
                <ItemVayTheChap
                  icon={iconHoptac}
                  titleItem="Vay vốn kinh doanh"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VayTheChap;
