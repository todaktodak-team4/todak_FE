import React, { useEffect, useState } from "react";
import styles from "../css/StyledShowLetter.module.css";
import { useNavigate, useLocation } from "react-router-dom";

function ShowLetter({ onClose, treeId }) {
  const [letters, setLetters] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/rememberTree/${treeId}/letters/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          }
        });
  
        if (response.ok) {
          const data = await response.json();
          console.log("Response Data:", data);
          setLetters(data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("An error occurred", error);
      }
    };
  
    fetchData();
  }, [treeId, token]); 
  

  return (
    <div className={styles.container}>
      {letters.map((letter, index) => (
        <div key={index} className={styles.innerContainer}>
          <div className={styles.letterWp}>
            <img src="/img/letterPreview.png" alt="미리보기" />
            <div className={styles.content}>{letter.content}</div>
          </div>
          <div className={styles.letterInfo}>
            <img
              src={letter.profileImg || "/img/profTemp.png"}
              className={styles.profileImg}
              alt="프로필 이미지"
            />
            <div className={styles.userInfo}>
              <div className={styles.user}>{letter.user}</div>
              <div className={styles.title}>{letter.content.slice(0, 50)}</div>
            </div>
            <div className={styles.date}>{letter.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowLetter;
