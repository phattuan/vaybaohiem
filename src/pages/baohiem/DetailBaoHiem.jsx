import React from "react";
import imgThapMaslow from "../../assets/images/thap-maslow.png";
// import imgBg1 from "../../assets/images/bg-detail-bh-1.svg";

const DetailBaoHiem = () => {
  return (
    <>
      <div className="detail-bao-hiem">
        {/* <div className="border-bg-1">
          <img src={imgBg1} alt="" className="bg-1" />
        </div> */}
        <div className="border-img-thap-maslow">
          <img
            src={imgThapMaslow}
            alt="img thap maslow"
            className="img-thap-maslow"
          />
        </div>
        <div className="container-content-detail-bh">
          <div className="content-detail-bh">
            <p
              style={{ color: "green", fontWeight: "bold", fontSize: "1.2rem" }}
            >
              Một ví dụ thật tế về sự rất quan trọng của việc phải bảo vệ tiền
              mình đã tạo ra:
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Bảo vệ tiền chính là Bảo vệ sức khỏe vì
              sức khỏe là quan trọng nhất
              <span style={{ color: "red" , fontWeight: "bold" }}>
                {" "}
                Bạn có đồng ý với tôi về điều này???
              </span>
            </p>{" "}
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Vì chỉ có sức khỏe mới làm ta mất đi tiền
              bạc một cách nhanh nhất, tốn kém nhất và không hề tiếc tiền cho dù
              phải bán đi các tài sản đã vất vả gầy dựng hoặc tài sản mồ hôi
              nước mắt của Ông Bà để lại để chi trả cho việc điều trị sức khỏe
              cho bạn và người thân yêu.
            </p>{" "}
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Vậy để Bảo vệ sức khỏe bạn đã có công cụ
              nào để phục vụ bạn tốt nhất ở hạng dịch vụ chưa? Hay bạn đang sở
              hữu BHXH của công ty, của cá nhân gia đình mà ở đó chỉ phục vụ ở
              mức hỗ trợ tối thiểu của nhà nước và việc chi trả giới hạn rất nhỏ
              cho các bệnh lý nghiêm trọng hay tai nạn nghiêm trọng mà cần tới
              thiết bị thuốc điều trị cao cấp.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Và việc Bảo vệ sức khỏe là rất quan trọng
              nhưng những Ba Mẹ đã có con nhỏ thì việc đảm bảo học vấn cho con
              tới lúc ra trường thậm chí con quan trọng hơn (mình không khặng
              định sức khỏe và việc học tương lai của con mình cái nào quan
              trọng hơn cái nào nhưng chắc chắn cả hai đều rất quan trọng)
            </p>{" "}
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Vì nếu bạn không có sức khỏe hay nếu bạn
              đang ngồi đọc và thử nghỉ nếu hôm qua bạn đi làm mà lỡ may bạn
              không trở về được nữa thì điều bạn lo lắng nhất là gì???. Và tất
              cả bạn làm kiếm tiền cũng vì tương lai cho con mình được hơn minh.
              Vì vậy hai vấn đề quan trọng giải quyết trong một{" "}
              <span style={{ color: "purple", fontWeight: "bold" }}>
                "kế hoạch quỹ dự phòng"
              </span>
            </p>{" "}
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;Thật ra để Bảo vệ tiền hiện nay có rất
              nhiều công cụ: Bỏ ngân hàng, mua vàng, chơi hụi… đó là bạn đang để
              dành và tạo ra một quỹ dự phòng đó ạ, nhưng quỹ dự phòng này đã đủ
              lơn chưa? và công cụ này chỉ cho bạn về lợi nhuận đó là lãi. Và
              nếu bạn muốn có quý dự phòng 1 tỷ trong ngân hang hay mua vàng thì
              bạn sẽ để dành trong bao lâu ( Bạn hay ngồi tính nhé !)
            </p>{" "}
            <p style={{ color: "#a52a2a", fontWeight: "bold" }}>
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp;Nhưng quỹ dự phòng thông qua công cụ Bảo
              Hiểm thì bạn thử tính nhé:<br></br> &nbsp;&nbsp;&nbsp;&nbsp;Bạn bỏ
              1 triệu/ tháng = 12tr/năm, Bạn có ngay quỹ dự phòng về sức khỏe
              hay quỹ học vấn cho con 1 tỷ 2, Nhân ngay 100 lần được pháp luật
              Bảo vệ ạ. Và 12 triệu/năm còn được hoàn lại gốc lãi sau này với
              lãi kép rất cao.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailBaoHiem;
