import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import * as A from "./css/StyledApp";

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
      </Routes>
      <A.Footer></A.Footer>
    </BrowserRouter>
  );
}
export default App;
