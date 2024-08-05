import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
import Nav from "./pages/Nav";
import ModifyInfo from "./pages/ModifyInfo";
import LaySuccessModal from "./pages/LaySuccessModal";
import WreathList from "./pages/WreathList";
import WrittenMessage from "./pages/WrittenMessage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const accessToken = localStorage.getItem("access_token");
  const refreshToken = localStorage.getItem("refresh_token");
  useEffect(() => {
    setIsLoggedIn(!!accessToken && !!refreshToken);
  }, []);

  const handleLogout = async () => {
    const token = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");

    try {
      const response = await fetch("http://127.0.0.1:8000/accounts/logout/", {
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
        setIsLoggedIn(false); // 로그인 상태 업데이트
        alert("로그아웃 성공");
        window.location.reload();
      } else {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        alert("토큰이 완료되어 자동 로그아웃 되었습니다. 다시 로그인해주세요.");
        setIsLoggedIn(false);

        console.error("로그아웃 실패:", response.statusText);
      }
    } catch (error) {
      console.error("로그아웃 중 문제가 발생했습니다:", error);
    }
  };
  useEffect(() => {
    // 컴포넌트가 마운트되면 상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <A.Header>
        <A.Logo>
          <Link to="/">
            <img
              id="Logo"
              src={`${process.env.PUBLIC_URL}/img/TodakLogo2.svg`}
              alt="Logo"
            />
          </Link>
          <Link to="/">
            <img
              id="LogoMessage"
              src={`${process.env.PUBLIC_URL}/img/LogoMessage.svg`}
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
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup1" element={<Signup1 />} />
        <Route path="/signup2" element={<Signup2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plantTreeStepOne" element={<PlantTreeStepOne />} />
        <Route path="/plantTreeStepTwo" element={<PlantTreeStepTwo />} />
        <Route path="/completeModal" element={<PlantCompleteModal />} />
        <Route path="/growCompleteModal" element={<GrowCompleteModal />} />
        <Route path="/rememberTree" element={<RememberTree />} />
        <Route path="/deliveryInfo" element={<DeliveryInfo />} />
        <Route path="/deliveryProduct" element={<DeliveryProduct />} />
        <Route path="/uploadImg" element={<UploadImg />} />
        <Route path="/writeLetter" element={<WriteLetter />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessModal />} />
        <Route path="/memorialHall/:postId?" element={<MemorialHall />} />
        <Route path="/memorialHallList" element={<MemorialHallList />} />
        <Route
          path="memorialHall/:postId/access"
          element={<LockedMemorialHall />}
        />
        <Route path="layCheckout" element={<LayCheckout />} />
        <Route path="/memorialHallSignup" element={<MemorialHallSignup />} />
        <Route path="/layFlower" element={<LayFlower />} />
        <Route path="/sentComplete" element={<SentComplete />} />
        <Route path="/mypage" element={<Mypage />} />{" "}
        <Route path="/talkModal" element={<TalkModal />} />
        <Route path="/modifyInfo" element={<ModifyInfo />} />
        <Route path="/wreathList" element={<WreathList />} />
        <Route path="/writtenMessage" element={<WrittenMessage />} />
        <Route path="/laysuccess" element={<LaySuccessModal />} />
        <Route path="/letterDetail" element={<LetterDetail />}></Route>
      </Routes>

      <A.Footer>
        <A.Footer1>
          <img
            id="Logo"
            src={`${process.env.PUBLIC_URL}/img/TodakLogo3.svg`}
            alt="Logo"
          />
          <img
            id="LogoMessage"
            src={`${process.env.PUBLIC_URL}/img/LogoMessage2.svg`}
            alt="LogoMessage"
          />
          <p id="ment11">
            <img id="img" src={`${process.env.PUBLIC_URL}/img/footer1.svg`} />
            서울특별시 성북구 화랑로13길 60
            <br />
            60 Hwarang-ro 13-gil, Seongbuk-gu, Seoul
          </p>
          <p id="ment13">
            <img id="img" src={`${process.env.PUBLIC_URL}/img/footer2.svg`} />
            멋쟁이사자처럼 동덕여자대학교 12기 팀 우리사이
          </p>
        </A.Footer1>
        <A.Footer2>
          <p id="ment21">당장 도움이 필요하신가요?</p>
          <p id="ment22">
            삶을 포기하고 싶다는 생각이 반복적으로 들거나 정신건강 질환의
            <br />
            고통이 심할 경우 즉각적으로 전문기관에 도움을 요청하세요.
          </p>
          <p id="ment23">
            보건복지부 자살 예방 상담 전화: 109
            <br />
            정신건강 위기 상담 전화: 1577-0199
          </p>
        </A.Footer2>
      </A.Footer>
    </BrowserRouter>
  );
}

export default App;
