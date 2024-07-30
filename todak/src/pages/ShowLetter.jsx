import React, { useEffect, useState } from "react";
import styles from "../css/StyledShowLetter.module.css";

function ShowLetter() {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    fetch("/api/letters")
      .then((response) => response.json())
      .then((data) => setLetters(data))
      .catch((error) => console.error("Error fetching letters:", error));
  }, []);

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
