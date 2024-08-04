import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "../css/StyledModifyInfo.module.css";
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode"
function ModifyInfo() {
  const [username, setUsername] = useState(""); // id를 username으로 변경
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const [postalAddress, setPostalAddress] = useState("");
  const [address, setAddress] = useState("");
  const [zoneCode, setZoneCode] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
// http://127.0.0.1:8000/accounts/api/get-user-info-from-token/

const navigate = useNavigate();
const token = localStorage.getItem('access_token');
const openPostCode = () => setIsPopupOpen(true);
const closePostCode = () => setIsPopupOpen(false);

const handlePostCodeSelection = (data) => {
  setPostalAddress(data.address);
  setZoneCode(data.zonecode);
  closePostCode();
};

useEffect(() => {
  console.log("Token:", token); // Token 확인
  const fetchUserInfo = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/accounts/api/get-user-info-from-token/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Response status:", response.status);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      if (response.status === 200) {
        const data = await response.json();
        console.log("User Data:", data); // Debug log to check API response
        setUsername(data.username);
        setEmail(data.email);
        setNickname(data.nickname);
        setPhone(data.phone);
        setPostalAddress(data.postalAddress);
        setAddress(data.address);
        setZoneCode(data.zoneCode);
      }
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  if (token) {
    fetchUserInfo();
  }
}, [token]);

//http://localhost:8000/accounts/profile/update/


const handleSubmit = async (event) => {
  event.preventDefault();

  const formData = {
    new_username: username,
    password,
    email,
    nickname,
    phone,
    postalAddress,  // Assuming postalAddress is the correct field name in the API
    address,
    zoneCode,   // Assuming zoneCode is the correct field name in the API
  };

  try {
    const response = await fetch("http://localhost:8000/accounts/profile/update/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`, // 토큰을 헤더에 추가
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      // You can also log the response status or text for debugging
      const errorText = await response.text();
      console.error("Network response was not ok:", errorText);
      throw new Error("Network response was not ok");
    }

    if(response.ok){
      const result = await response.json();
      console.log("Success:", result);
      alert("정보변경 성공");
      navigate('/mypage');
    }

  } catch (error) {
    console.error("Error:", error);
  }
};

  return (
    <div className={styles.container}>
      <img
        src="/img/mypageBg.png"
        alt="bgimg"
        style={{ width: "100%", minHeight: "1000px", objectFit: "cover" }}
        className={styles.containerBg}
      />
      <div className={styles.logo}>
        <img src="/img/modifyInfoLogo.png" alt="로고" />
      </div>
      <form onSubmit={handleSubmit} className={styles.infoWp}>
        <div className={`${styles.idWp} ${styles.wp}`}>
          <div className={styles.title}>아이디</div>
          <input
            type="text"
            className={styles.id}
            placeholder="아이디"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={`${styles.pwWp} ${styles.wp}`}>
          <div className={styles.title}>변경 비밀번호</div>
          <input
            type="password"
            className={styles.pw}
            placeholder="비밀번호 (영어, 숫자, 특수문자 조합 12자 이상)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={`${styles.emailWp} ${styles.wp}`}>
          <div className={styles.title}>이메일</div>
          <input
            type="email"
            className={styles.email}
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={`${styles.nicknameWp} ${styles.wp}`}>
          <div className={styles.title}>닉네임</div>
          <input
            type="text"
            className={styles.nickname}
            placeholder="닉네임 (익명 보장)"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className={`${styles.telWp} ${styles.wp}`}>
          <div className={styles.title}>전화번호</div>
          <span className={styles.choice}>*선택사항</span>
          <input
            type="text"
            className={styles.tel}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={`${styles.addressWp} ${styles.wp}`}>
          <div className={`${styles.title} ${styles.addtitle}`}>배송 주소</div>
          <span className={styles.choice}>*선택사항</span>
          <div className={styles.addr}>
            <div className={styles.zoneCodeBtn} onClick={openPostCode}>우편번호 찾기</div>
            <div id="popupDom">
              {isPopupOpen && (
                <PopupDom>
                  <PopupPostCode
                    onClose={closePostCode}
                    onSelect={handlePostCodeSelection}
                  />
                </PopupDom>
              )}
            </div>
            <input
              type="text"
              className={styles.zoneCode}
              value={zoneCode}
              onChange={(e) => setZoneCode(e.target.value)}
            />
            <input
              type="text"
              className={styles.postalAddress}
              value={postalAddress}
              onChange={(e) => setPostalAddress(e.target.value)}
            />
            <input
              type="text"
              className={styles.datailAddress}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div onClick={handleSubmit} className={styles.saveBtn}>
            변경 사항 저장
          </div>
        </div>
      </form>
    </div>
  );
}

export default ModifyInfo;
