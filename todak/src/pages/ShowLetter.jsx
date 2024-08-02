import React, { useEffect, useState, useRef } from "react";
import styles from "../css/StyledShowLetter.module.css";
import LetterDetail from "./LetterDetail";

function ShowLetter({ onClose, treeId }) {
  const [letters, setLetters] = useState([]);
  const [selectedLetterId, setSelectedLetterId] = useState(null);
  const token = localStorage.getItem("token");
  const containerRef = useRef(null);
  const detailRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/rememberTree/${treeId}/letters/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Token ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        (!detailRef.current || !detailRef.current.contains(event.target))
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleLetterClick = (letterId) => {
    setSelectedLetterId(letterId);
  };

  const handleDetailClose = () => {
    setSelectedLetterId(null);
  };

  return (
    <div className={styles.overlay}>
      <img
        src="/img/letterClose.png"
        className={styles.closeButton}
        onClick={onClose}
      />
      <div className={styles.container} ref={containerRef}>
        {letters.map((letter, index) => (
          <div
            key={index}
            className={styles.innerContainer}
            onClick={() => handleLetterClick(letter.id)}
          >
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
      {selectedLetterId && (
        <div ref={detailRef}>
          <LetterDetail
            treeId={treeId}
            letterId={selectedLetterId}
            onClose={handleDetailClose}
          />
        </div>
      )}
    </div>
  );
}

export default ShowLetter;
