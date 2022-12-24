
//======== import router ======== 
// import Router from './routes/Routers.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//====== import pages =======
import Home from './pages/Home'
import VayTinChap from './pages/vaytinchap/VayTinChap.jsx';
import dataVayTheChap from './data/datavaythechap.json';
import dataDetailSanPham from './data/dataseemoresanpham.json'


// ====== import scss =========== 
import './assets/scss/router.scss'
import './css/app.css'
import VayTheChap from './pages/vaythechap/VayTheChap.jsx';
import ContentItemVayTheChap from './pages/vaythechap/ContentItemVayTheChap';
import { useState } from 'react';

// ======== import router images =======
import { RouterImVayTheChap, RouterImgDetailSanPham } from './routes/RouterImage.jsx'
import HomeBaoHiem from './pages/baohiem/HomeBaoHiem';

// ============== test detail bao hiem =========
import DetailBaoHiem from './pages/baohiem/DetailBaoHiem'
import SanPham from './pages/sanpham/SanPham';
import SeeMoreSanPham from './pages/sanpham/SeeMoreSanPham';
import VeChungToi from './pages/vechungtoi/VeChungToi';
import Lienhe from './pages/lienhe/Lienhe';



function App() {
  const [dataVTC, setDataVTC] = useState(dataVayTheChap);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <VayTinChap />
              <VayTheChap />
              <HomeBaoHiem />
              <SanPham />
              <VeChungToi />
              <Lienhe/>
            </>
          }  >

          </Route>
          <Route
            path="/vaythechapsodosohong"
            element={<ContentItemVayTheChap titleItem='Vay thế chấp sổ đỏ - sổ hồng' contentItem={dataVTC.vayTheChapSoDoSoHong}
              imageItem={RouterImVayTheChap.vayTheChapSoDoSoHong}
            />}
          ></Route>
          <Route
            path="/vaythechapmuanha"
            element={<ContentItemVayTheChap titleItem='Vay thế chấp mua nhà' contentItem={dataVTC.vayTheChapMuaNha}
              imageItem={RouterImVayTheChap.vayTheChapMuaNha}
            />}
          ></Route>
          <Route
            path="/vaythechapmuaxeoto"
            element={<ContentItemVayTheChap titleItem='Vay thế mua xe ô tô' contentItem={dataVTC.vayTheChapMuaOTo}
              imageItem={RouterImVayTheChap.vayTheChapMuaOTo}
            />}
          ></Route>
          <Route
            path="/vaymuacanhochungcu"
            element={<ContentItemVayTheChap titleItem='Vay mua căn hộ chung cư' contentItem={dataVTC.vayMuaCanHoChungCu}
              imageItem={RouterImVayTheChap.vayMuaCanHoChungCu}
            />}
          ></Route>
          <Route
            path="/vayxaydungsuachuanha"
            element={<ContentItemVayTheChap titleItem='Vay xây dựng sửa chữa nhà' contentItem={dataVTC.vayXayDungSuaChuaNha}
              imageItem={RouterImVayTheChap.vayXayDungSuaChuaNha}
            />}
          ></Route>
          <Route
            path="/vayvonkinhdoanh"
            element={<ContentItemVayTheChap titleItem='Vay vốn kinh doanh' contentItem={dataVTC.vayVonKinhDoanh}
              imageItem={RouterImVayTheChap.vayVonKinhDoanh}
            />}
          ></Route>
          <Route
            path="/detailbaohiem"
            element={<DetailBaoHiem />}
          ></Route>
          <Route path='/chitietsanphamthaisan' element={<SeeMoreSanPham bgSanPham={RouterImgDetailSanPham.bgThaiSan} imgSanPham={RouterImgDetailSanPham.detailThaiSan2} detaiSeeMoreSanPham={dataDetailSanPham.detailThaiSan} />}
          >
          </Route>
          <Route path='/chitietsanphamtreem' element={<SeeMoreSanPham bgSanPham={RouterImgDetailSanPham.bgTreEm} imgSanPham={RouterImgDetailSanPham.detailTreEm1} detaiSeeMoreSanPham={dataDetailSanPham.detailTreEm} />}
          >
          </Route>
          <Route path='/chitietsanphamgiadinh' element={<SeeMoreSanPham bgSanPham={RouterImgDetailSanPham.bgGiaDinh} imgSanPham={RouterImgDetailSanPham.detailGiaDinh2} detaiSeeMoreSanPham={dataDetailSanPham.detailGiaDinh} />}
          >
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Home />
      <VayTinChap /> */}
      {/* <VayTheChap /> */}

    </div>
  );
}

export default App;
