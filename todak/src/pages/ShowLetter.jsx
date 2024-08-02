import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/StyledShowLetter.module.css";

function ShowLetter({ onClose, treeId }) {
  const [letters, setLetters] = useState([]);
  const token = localStorage.getItem("access_token");
  const containerRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/rememberTree/${treeId}/letters/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Response Data:", data);
          setLetters(data);
        } else if (response.status === 401) {
          // 토큰이 만료되었거나 유효하지 않음
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");
          alert("30분 동안 활동이 없어서 자동 로그아웃 되었습니다. 다시 로그인해주세요.");
          navigate("/login");
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("An error occurred", error);
        alert("네트워크 오류가 발생했습니다.");
      }
    };

    fetchData();
  }, [treeId, token, navigate]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay}>
      {" "}
      <img
        src="/img/letterClose.png"
        className={styles.closeButton}
        onClick={onClose}
      />
      <div className={styles.container} ref={containerRef}>
        {letters.map((letter, index) => (
          <div key={index} className={styles.innerContainer}>
            <div className={styles.letterWp}>
              <img src="/img/letterPreview.png" alt="미리보기" />
              <div className={styles.content}>{letter.content}</div>
            </div>
            <div className={styles.letterInfo}>
              <img
                src={letter.writer.profile || "/img/profTemp.png"}
                className={styles.profileImg}
                alt="프로필 이미지"
              />
              <div className={styles.userInfo}>
                <div className={styles.user}>{letter.writer.nickname}</div>
                <div className={styles.title}>
                  {letter.content.slice(0, 50)}
                </div>
              </div>
              <div className={styles.date}>
                {letter.uploadedAt.slice(0, 10)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowLetter;
