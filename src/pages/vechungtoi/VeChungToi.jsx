import React from "react";
import TitleHead from "../../components/titlehead/TitleHead";

//note ========= import img bg ve chung toi start ========== 
import imgBgVeChungToi1 from '../../assets/images/img-bg-ve-chung-toi-1.svg'
import imgBgVeChungToi2 from '../../assets/images/img-bg-ve-chung-toi-2.svg'
//note ========= import img bg ve chung toi end ========== 

import 'animate.css';

const VeChungToi = () => {
  return (
    <>
      <div className="layout-ve-chung-toi" id="ve-chung-toi">
        <TitleHead titleHeader="về chúng tôi" />
        <div className="border-bg-ve-chung-toi-1">
          <img src={imgBgVeChungToi1} alt="" className="bg-ve-chung-toi-1" />
        </div>
        <div className="container-ve-chung-toi">
          <div className="container-ve-chung-toi-child-1">
            <div className="content-ve-chung-toi">
              <i className="fa-solid fa-check list-style-check"></i>Uy tín được xây dựng dựa trên{" "}
              <span className="strong-content">thương hiệu</span>
            </div>
            <div className="content-ve-chung-toi">
              <i className="fa-solid fa-check list-style-check"></i> Luôn lấy giá trị khách hàng và
              trọng tâm, Quyền lợi của khách hàng lên trên hàng đầu
            </div>
            <div className="content-ve-chung-toi">
              <i className="fa-solid fa-check list-style-check"></i>Luôn hỗ trợ khách hàng trong mọi
              tình huống khó khăn hay thuận lợi nhất
            </div>
            <div className="content-ve-chung-toi">
              <i className="fa-solid fa-check list-style-check"></i>Có một giải pháp tài chính tốt
              nhất dành cho khách hàng
            </div>
            <div className="content-ve-chung-toi">
              <i className="fa-solid fa-check list-style-check"></i>Từ đó giúp người dân Việt Nam có
              cuộc sống tốt hơn, an tâm hơn
            </div>
            <div className="content-ve-chung-toi">
              <i className="fa-solid fa-check list-style-check"></i>Giúp những đứa trẻ sinh ra ở Việt
              Nam đều có tương lai tốt hơn ba mẹ mình
            </div>
          </div>
          <div className="container-ve-chung-toi-child-2">
            <div className="container-child-left container-child">
              <div className="content">
                Tự hào với kinh nghiệm tài chính hơn 7 năm
              </div>
              <div className="content">Đảm nhiệm viều vị trí: <span className="text-strong" style={{color:'red'}}>Sales, Quản lý, Quản lý cấp cao</span></div>
              <div className="content">Với kinh ngiệm dày dặn chúng tôi tự tin xử lý và và hỗ trợ được tốt nhất cho tất cả các khách hàng thỏa điều kiện</div>
              <div className="content">Luôn lấy <span className="text-strong" style={{color:'orange'}}>uy tín - thương hiệu</span> làm kim chỉ nam hàng đầu <span className="text-strong" style={{color:'green'}}>"Hài lòng của khách chính là thương hiệu của chúng tôi"</span></div>
              <div className="content"></div>
            </div>
            <div className="container-child-right container-child">
              <div className="content">Với kiến thức về tài chính cũng như kiến thức được học ở <span className="text-strong" style={{color:'green'}}>Manulife</span>. Chúng tôi tự tin sẽ giúp tất cả các khách hàng có được một kế hoạch tài chính cá nhân <span className="text-strong" style={{color:'red'}}>An toàn-Toàn Vẹn</span> nhất cho người trụ cột và cả gia đình thương yêu</div>
              <div className="content" style={{color: 'green', fontSize:'1.2rem', fontWeight:'bold', fontStyle:'italic'}}>Gieo một hạt giống - vẽ một tương lai</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VeChungToi;
