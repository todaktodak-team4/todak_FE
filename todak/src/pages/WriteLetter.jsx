import React, { useState, useEffect, useRef } from "react";
import styles from "../css/StyledWriteLetter.module.css";

function WriteLetter({ onClose }) {
  const [letter, setLetter] = useState("");
  const [showToast, setShowToast] = useState(true);
  const [isDirty, setIsDirty] = useState(false);
  const [imageSrc, setImageSrc] = useState("/img/envelopMain.png");
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showSendModal, setShowSendModal] = useState(false);
  const [showUnsavedModal, setShowUnsavedModal] = useState(false);
  const [showSaveConfirmationModal, setShowSaveConfirmationModal] =
    useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        if (isDirty) {
          setShowUnsavedModal(true);
          return;
        }
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose, isDirty]);

  const handleInput = (event) => {
    const maxLength = 78;
    const text = event.target.value;

    const lines = text.split("\n");
    if (lines.length > 12) {
      event.preventDefault();
      return;
    }

    let formattedText = "";
    let currentLine = "";

    for (let i = 0; i < text.length; i++) {
      if (text[i] === "\n" || currentLine.length === maxLength) {
        formattedText += currentLine + "\n";
        currentLine = text[i] === "\n" ? "" : text[i];
      } else {
        currentLine += text[i];
      }
    }

    formattedText += currentLine;
    setLetter(formattedText);
    setIsDirty(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const lines = letter.split("\n");

      if (lines.length >= 12) {
        event.preventDefault();
        return;
      }

      event.preventDefault();
      const cursorPosition = event.target.selectionStart;
      const beforeCursor = letter.substring(0, cursorPosition);
      const afterCursor = letter.substring(cursorPosition);
      const newText = beforeCursor + "\n" + afterCursor;
      setLetter(newText);
      setIsDirty(true);
    }
  };

  const handleSendClick = () => {
    if (isDirty) {
      setShowSaveConfirmationModal(true);
    } else {
      onClose();
    }
  };

  const handleSaveConfirmationModalClose = (confirmed) => {
    if (confirmed) {
      onClose();
    }
    setShowSaveConfirmationModal(false);
  };

  const handleSendModalClose = (confirmed) => {
    if (confirmed) {
      onClose();
    }
    setShowSendModal(false);
  };

  const handleUnsavedModalClose = (confirmed) => {
    if (confirmed) {
      onClose();
    }
    setShowUnsavedModal(false);
  };

  return (
    <div className={styles.container} ref={containerRef}>
      {showToast && (
        <div className={styles.toastStyle}>
          편지를 작성하신 후 편지봉투를 클릭하면 작성이 완료됩니다.
        </div>
      )}
      <div className={styles.letterWp}>
        <div className={styles.content}>
          <textarea
            className={styles.mainLetter}
            placeholder="편지 내용을 입력해주세요."
            name="letter"
            value={letter}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            style={{
              position: "fixed",
              backgroundImage: `url("/img/letterPaper.png")`,
              backgroundRepeat: "no-repeat",
              width: "1220px",
              height: "1073px",
              backgroundColor: "transparent",
              border: "none",
              whiteSpace: "pre-wrap",
              overflowWrap: "break-word",
              wordBreak: "break-all",
              boxSizing: "border-box",
              outline: "none",
              lineHeight: "2.05",
            }}
          ></textarea>
        </div>
        <div className={styles.letterTop}>
          <img src="/img/letterTop.png" alt="봉투 뚜껑" />
        </div>
        <div
          className={styles.envelopMain}
          onMouseEnter={() => {
            setImageSrc("/img/hoverLetter.png");
            setIsHovered(true);
            setShowTooltip(true);
          }}
          onMouseLeave={() => {
            setImageSrc("/img/envelopMain.png");
            setIsHovered(false);
            setShowTooltip(false);
          }}
        >
          <img
            src={imageSrc}
            alt="봉투 메인"
            style={{
              position: "fixed",
              top: isHovered ? "77.5%" : "77.8%",
            }}
            onClick={handleSendClick}
          />
          {showTooltip && (
            <div className={styles.tooltip}>편지를 저장하려면 클릭하세요.</div>
          )}
        </div>
      </div>
      <div className={styles.envelope}></div>

      {showSaveConfirmationModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <p>편지를 저장하시겠습니까?</p>
            <button onClick={() => handleSaveConfirmationModalClose(true)}>
              네
            </button>
            <button onClick={() => handleSaveConfirmationModalClose(false)}>
              아니요
            </button>
          </div>
        </div>
      )}

      {showSendModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <p>편지를 보내시겠습니까?</p>
            <button onClick={() => handleSendModalClose(true)}>네</button>
            <button onClick={() => handleSendModalClose(false)}>아니요</button>
          </div>
        </div>
      )}

      {showUnsavedModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <p>
              편지가 저장되지 않았습니다. <br /> 우체통을 닫으시겠습니까?
            </p>
            <button onClick={() => handleUnsavedModalClose(true)}>네</button>
            <button onClick={() => handleUnsavedModalClose(false)}>
              아니요
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default WriteLetter;
