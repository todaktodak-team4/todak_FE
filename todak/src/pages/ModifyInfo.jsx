import { useState } from "react";
import styles from "../css/StyledModifyInfo.module.css";
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";

const emailRegEx =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

const passwordRegEx =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function ModifyInfo() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [postalAddress, setPostalAddress] = useState("");
  const [zoneCode, setZoneCode] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailSuccess, setEmailSuccess] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");

  const openPostCode = () => setIsPopupOpen(true);
  const closePostCode = () => setIsPopupOpen(false);

  const handlePostCodeSelection = (data) => {
    setPostalAddress(data.address);
    setZoneCode(data.zonecode);
    closePostCode();
  };

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{2,3})(\d{3,4})(\d{4})$/);
    return match ? `${match[1]}-${match[2]}-${match[3]}` : cleaned;
  };

  const handlePhoneNumberChange = (e) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedNumber);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!emailRegEx.test(value)) {
      setEmailError("올바른 이메일 형식으로 입력하세요");
      setEmailSuccess("");
    } else {
      setEmailError("");
      setEmailSuccess("유효한 이메일 형식입니다.");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!passwordRegEx.test(value)) {
      setPasswordError("유효하지 않은 비밀번호 조합입니다.");
      setPasswordSuccess("");
    } else {
      setPasswordError("");
      setPasswordSuccess("사용가능한 비밀번호 조합입니다.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (emailError || passwordError) {
      return;
    }

    const formData = {
      id,
      password,
      email,
      nickname,
      phoneNumber,
      postalCode: zoneCode,
      address: postalAddress,
      detailAddress,
    };

    try {
      console.log("formData: ", formData);
      const response = await fetch("/api/modify-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSaveClick = () => {
    document
      .getElementById("modifyForm")
      .dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
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
      <form id="modifyForm" onSubmit={handleSubmit} className={styles.infoWp}>
        <div className={`${styles.idWp} ${styles.wp}`}>
          <div className={styles.title}>아이디</div>
          <input
            type="text"
            className={styles.id}
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className={`${styles.pwWp} ${styles.wp}`}>
          <div className={styles.title}>변경 비밀번호</div>
          <input
            type="password"
            className={styles.pw}
            placeholder="비밀번호 (영어, 숫자, 특수문자 조합 8자 이상)"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && (
            <div className={styles.pwError}>{passwordError}</div>
          )}
          {passwordSuccess && !passwordError && (
            <div className={styles.pwSuccess}>{passwordSuccess}</div>
          )}
        </div>
        <div className={`${styles.emailWp} ${styles.wp}`}>
          <div className={styles.title}>이메일</div>
          <input
            type="email"
            className={styles.email}
            placeholder="이메일"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <div className={styles.emailError}>{emailError}</div>}
          {emailSuccess && !emailError && (
            <div className={styles.emailSuccess}>{emailSuccess}</div>
          )}
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
            type="tel"
            className={styles.tel}
            placeholder="010-0000-0000"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            maxLength="13"
          />
        </div>
        <div className={`${styles.addressWp} ${styles.wp}`}>
          <div className={`${styles.title} ${styles.addtitle}`}>배송 주소</div>
          <span className={styles.choice}>*선택사항</span>
          <div className={styles.addr}>
            <div className={styles.zoneCodeBtn} onClick={openPostCode}>
              우편번호 찾기
            </div>
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
              placeholder="우편번호"
              value={zoneCode}
              readOnly
            />
            <input
              type="text"
              className={styles.postalAddress}
              placeholder="도로명 주소"
              value={postalAddress}
              readOnly
            />
            <input
              type="text"
              className={styles.detailAddress}
              placeholder="상세 주소 입력"
              value={detailAddress}
              onChange={(e) => setDetailAddress(e.target.value)}
            />
          </div>
        </div>
        <div onClick={handleSaveClick} className={styles.saveBtn}>
          변경 사항 저장
        </div>
      </form>
    </div>
  );
}

export default ModifyInfo;
