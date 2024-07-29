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
          <Link to="/main">
            <img
              id="LogoMessage"
              src={`${process.env.PUBLIC_URL}/img/LogoMessage.svg`}
              alt="LogoMessage"
            />
          </Link>
        </A.Logo>
        <A.Privacy>
          <Link to="/main">MY</Link>
          <Link to="/signup1">회원가입</Link>
          <Link to="/login">로그인</Link>
        </A.Privacy>
      </A.Header>

      <Routes>
        <Route path="/main" element={<Main />} />
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
      </Routes>

      <A.Footer></A.Footer>
    </BrowserRouter>
  );
}

export default App;
