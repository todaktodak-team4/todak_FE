import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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

function App() {
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
          <Link to="/">MY</Link>
          <Link to="/signup1">회원가입</Link>
          <Link to="/login">로그인</Link>
        </A.Privacy>
      </A.Header>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup1" element={<Signup1 />} />
        <Route path="/signup2" element={<Signup2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/plantTreeStepOne" element={<PlantTreeStepOne />} />
        <Route path="/plantTreeStepTwo" element={<PlantTreeStepTwo />} />
        <Route path="/completeModal" element={<PlantCompleteModal />} />
        <Route path="/growCompleteModal" element={<GrowCompleteModal />} />

        <Route path="/login" element={<Login />} />

        <Route path="/rememberTree" element={<RememberTree />} />
        <Route path="/deliveryInfo" element={<DeliveryInfo />} />
        <Route path="/deliveryProduct" element={<DeliveryProduct />} />
        <Route path="/uploadImg" element={<UploadImg />} />
        <Route path="/writeLetter" element={<WriteLetter />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessModal />} />
        <Route path="/memorialHall/:postId?" element={<MemorialHall />} />
        <Route path="/memorialHallList" element={<MemorialHallList />} />
        <Route path="/memorialHallSignup" element={<MemorialHallSignup />} />
        <Route path="/layFlower" element={<LayFlower />} />
      </Routes>

      <A.Footer></A.Footer>
    </BrowserRouter>
  );
}

export default App;
