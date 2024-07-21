import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import * as A from "./css/StyledApp";
import PlantTreeStepOne from "./pages/PlantTree_stepOne";
import PlantTreeStepTwo from "./pages/PlantTree_stepTwo";
import PlantCompleteModal from "./pages/PlantCompleteModal";
import RemeberTree from "./pages/RememberTree";
import Signup1 from "./pages/Signup1";
import Signup2 from "./pages/Signup2";
import GrowCompleteModal from "./pages/GrowCompleteModal";

function App() {
  return (
    <BrowserRouter>
      <A.Header>
        <A.Logo>
          <a href="#">
            <img
              id="Logo"
              src={`${process.env.PUBLIC_URL}/img/TodakLogo2.svg`}
              alt="Logo"
            />
          </a>
          <a href="#">
            <p>토닥토닥</p>
          </a>
        </A.Logo>
        <A.Privacy>
          <div>MY</div>
          <div>회원가입</div>
          <div>로그인</div>
        </A.Privacy>
      </A.Header>

      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/signup1" element={<Signup1 />} />
        <Route path="/signup2" element={<Signup2 />} />
        <Route path="/plantTreeStepOne" element={<PlantTreeStepOne />} />
        <Route path="/plantTreeStepTwo" element={<PlantTreeStepTwo />} />
        <Route path="/completeModal" element={<PlantCompleteModal />} />
        <Route path="/rememberTree" element={<RemeberTree />} />
        <Route path="/growCompleteModal" element={<GrowCompleteModal />} />
      </Routes>
      <A.Footer></A.Footer>
    </BrowserRouter>
  );
}
export default App;
