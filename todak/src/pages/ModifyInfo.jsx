import { useState } from "react";
import styles from "../css/StyledModifyInfo.module.css";

function ModifyInfo() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [tel, setTel] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      id,
      password,
      email,
      nickname,
      tel,
      postalCode,
      address,
      detailAddress,
    };

    try {
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
            value={id}
            onChange={(e) => setId(e.target.value)}
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
            type="tel"
            className={styles.tel}
            placeholder="010-0000-0000"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
        </div>
        <div className={`${styles.addressWp} ${styles.wp}`}>
          <div className={`${styles.title} ${styles.addtitle}`}>배송 주소</div>
          <span className={styles.choice}>*선택사항</span>
          <div className={styles.addr}>
            <div className={styles.zoneCodeBtn}>우편번호 찾기</div>
            <input
              type="text"
              className={styles.zoneCode}
              placeholder="우편번호"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
            <input
              type="text"
              className={styles.postalAddress}
              placeholder="도로명 주소"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              className={styles.datailAddress}
              placeholder="상세 주소 입력"
              value={detailAddress}
              onChange={(e) => setDetailAddress(e.target.value)}
            />
          </div>
          <div type="submit" className={styles.saveBtn}>
            변경 사항 저장
          </div>
        </div>
      </form>
    </div>
  );
}

export default ModifyInfo;
