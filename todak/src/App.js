// App.js
import React from "react";
import { HashRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Main from "./pages/Main";
import * as A from "./css/StyledApp";
import PlantTreeStepOne from "./pages/PlantTree_stepOne";
import PlantTreeStepTwo from "./pages/PlantTree_stepTwo";
import PlantCompleteModal from "./pages/PlantCompleteModal";
import GrowCompleteModal from "./pages/GrowCompleteModal";
import RememberTree from "./pages/RememberTree";
import DeliveryInfo from "./pages/DeliveryInfo";
import DeliveryProduct from "./pages/DeliveryProduct";
import Signup1 from "./pages/Signup1";
import Signup2 from "./pages/Signup2";
import Login from "./pages/Login";
import UploadImg from "./pages/UploadImg";
import WriteLetter from "./pages/WriteLetter";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessModal from "./pages/SuccessModal";
import MemorialHall from "./pages/MemorialHall";
import MemorialHallList from "./pages/MemorialHallList";
import MemorialHallSignup from "./pages/MemorialHallSignup";
import LayFlower from "./pages/LayFlower";
import SentComplete from "./pages/SentComplete";
import LetterDetail from "./pages/LetterDetail";
import LockedMemorialHall from "./pages/LockedMemorialHall";
import LayCheckout from "./pages/LayCheckout";
import Mypage from "./pages/Mypage";
import TalkModal from "./pages/TalkModal";
import ModifyInfo from "./pages/ModifyInfo";
import DonationModal from "./pages/DonationCertificate";
import LaySuccessModal from "./pages/LaySuccessModal";
import WreathList from "./pages/WreathList";
import WrittenMessage from "./pages/WrittenMessage";
import HelpModal from "./pages/HelpModal";

// Nav import 추가
import Nav from "./pages/Nav";

const BACKEND_URL = "http://3.38.125.151";

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(!!accessToken && !!refreshToken);
  }, [accessToken, refreshToken]);

  const handleLogout = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/accounts/logout/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          refresh_token: refreshToken,
        }),
      });

      if (response.ok) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        setIsLoggedIn(false);
        alert("로그아웃 되었습니다.");
        navigate("/");
      } else {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        alert("로그인한지 30분이 지나 자동 로그아웃 되었습니다. 다시 로그인해주세요.");
        setIsLoggedIn(false);
        navigate("/login");
      }
    } catch (error) {
      console.error("로그아웃 중 문제가 발생했습니다:", error);
    }
  };

  return (
    <div>
      <A.Header>
        <A.Logo>
          <Link to="/">
            <img
              id="Logo"
              src={`${process.env.PUBLIC_URL}/static/img/TodakLogo2.svg`}
              alt="Logo"
            />
          </Link>
          <Link to="/">
            <img
              id="LogoMessage"
              src={`${process.env.PUBLIC_URL}/static/img/LogoMessage.svg`}
              alt="LogoMessage"
            />
          </Link>
        </A.Logo>
        <A.Privacy>
          {isLoggedIn ? (
            <>
              <div onClick={handleLogout} style={{ cursor: "pointer" }}>
                로그아웃
              </div>
              <Link to="/mypage">마이페이지</Link>
            </>
          ) : (
            <>
              <Link to="/signup1">회원가입</Link>
              <Link to="/login">로그인</Link>
            </>
          )}
        </A.Privacy>
      </A.Header>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup1" element={<Signup1 />} />
        <Route path="/signup2" element={<Signup2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plantTreeStepOne" element={<PlantTreeStepOne />} />
        <Route path="/plantTreeStepTwo" element={<PlantTreeStepTwo />} />
        <Route path="/plantComplete" element={<PlantCompleteModal />} />
        <Route path="/growComplete" element={<GrowCompleteModal />} />
        <Route path="/rememberTree" element={<RememberTree />} />
        <Route path="/deliveryInfo" element={<DeliveryInfo />} />
        <Route path="/deliveryProduct" element={<DeliveryProduct />} />
        <Route path="/uploadImg" element={<UploadImg />} />
        <Route path="/writeLetter" element={<WriteLetter />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessModal />} />
        <Route path="/memorialHall" element={<MemorialHall />} />
        <Route path="/memorialHallList" element={<MemorialHallList />} />
        <Route path="/memorialHallSignup" element={<MemorialHallSignup />} />
        <Route path="/layFlower" element={<LayFlower />} />
        <Route path="/sentComplete" element={<SentComplete />} />
        <Route path="/letterDetail" element={<LetterDetail />} />
        <Route path="/lockedMemorialHall" element={<LockedMemorialHall />} />
        <Route path="/layCheckout" element={<LayCheckout />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/talk" element={<TalkModal />} />
        <Route path="/modifyInfo" element={<ModifyInfo />} />
        <Route path="/donation" element={<DonationModal />} />
        <Route path="/laySuccess" element={<LaySuccessModal />} />
        <Route path="/wreathList" element={<WreathList />} />
        <Route path="/writtenMessage" element={<WrittenMessage />} />
        <Route path="/help" element={<HelpModal />} />
      </Routes>
    </div>
  );
}

export default App;
