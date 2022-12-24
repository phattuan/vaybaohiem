/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import TitleHead from "../../components/titlehead/TitleHead";
import Carousel from "react-bootstrap/Carousel";
//======== import router dom ======
import { Link } from "react-router-dom";

//* ======= import img banner ======

import imgBg1 from "../../assets/images/imgbaohiem-bg.svg";
import imgBg2 from "../../assets/images/imgbaohiem-bg2.png";
import imgBg3 from "../../assets/images/imgbaohiem-bg3.png";
import imgBaoHiemVt from "../../assets/images/img-baohiem-br.jpg";

const HomeBaoHiem = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className="layout-home-bao-hiem" id="bao-hiem">
        {/* <div className="border-title-bao-hiem">
          <p className="title-bao-hiem">bảo hiểm</p>
        </div> */}
        <TitleHead titleHeader="bảo hiểm" />

        {/* //* ========= bg bao hiem ========  */}
        <div className="content-animate-bg-1">
          <img src={imgBg1} alt="" className="bg-baohiem-1" />
        </div>
        <img src={imgBg2} alt="" className="bg-baohiem-2" />
        <img src={imgBg3} alt="" className="bg-baohiem-3" />

        <div className="container-content-bao-hiem">
          <div className="img-baohiem">
            <img src={imgBaoHiemVt} alt="" className="img-baohiem-vector" />
          </div>
          <div className="item-content item-le">
            <div className="content-item-baohiem">
              Tiền phải tạo ra nhiều dòng tiền để gia tăng nhiều nguồn thu
              (không nên bỏ trứng vào 1 rổ)
              <br></br>
              Khi có nhiều dòng tiền, có tiền thì cần phải bảo vệ tiền (nếu
              kiếm tiền mà không có công cụ hay cách bảo vệ thì việc kiếm tiền
              sẽ không có ý nghĩa. Cho nên yếu tố này là quan trọng nhất trong
              chu trình trở nên giàu có)
              <br></br>
              Khi đã có tiền và bảo vệ thì yếu tố tiếp theo cần có là tiết
              kiệm (đó là yếu tố mà hồi xưa ông bà ta hay sử dụng)
              <br></br>
              Sau khi đã tập hợp đủ các yếu tố tiền, bảo vệ và tiết kiệm thì
              điều cuối cùng để gia tăng tài sản chính là đầu tư
            </div>

            <Link to="/detailbaohiem">
              <div id="butt-read-more">read more</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBaoHiem;
