import React, { useState, useEffect, useRef } from "react";
import styles from "../css/StyledWriteLetter.module.css";

function WriteLetter({ onClose, treeId, userId }) {
  const [letter, setLetter] = useState("");
  const [showToast, setShowToast] = useState(true);
  const [isWritten, setIsWritten] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const containerRef = useRef(null);
  const textAreaRef = useRef(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        if (isWritten) {
          if (
            window.confirm("편지가 저장되지 않았습니다. 우체통을 닫을까요?")
          ) {
            onClose();
          }
          return;
        }
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose, isWritten]);

  const handleInput = (event) => {
    const maxLength = 71;
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
    setIsWritten(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const cursorPosition = event.target.selectionStart;
      const lines = letter.split("\n");
      const newText =
        letter.substring(0, cursorPosition) +
        "\n" +
        letter.substring(cursorPosition);

      if (lines.length >= 12) {
        event.preventDefault();
        return;
      }

      setLetter(newText);
      setIsWritten(true);

      setTimeout(() => {
        textAreaRef.current.selectionStart = textAreaRef.current.selectionEnd =
          cursorPosition + 1;
      }, 0);
    }
  };

  const sendLetterToBackend = async () => {
    try {
      console.log(letter);
      const response = await fetch(
        `http://127.0.0.1:8000/rememberTree/${treeId}/letters/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({
            content: letter,
            writer: userId,
            rememberTree: treeId,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("data:", data);
        setIsSent(true);

        setTimeout(onClose, 2000);
      }
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  const handleSendClick = () => {
    if (isWritten) {
      if (window.confirm("편지를 보낼까요?")) {
        sendLetterToBackend();
      }
    } else {
      onClose();
    }
  };

  return (
    <div className={styles.container} ref={containerRef}>
      {showToast && (
        <div className={`${styles.toastStyle} ${styles.toastAnimation}`}>
          편지를 작성하신 후 편지봉투를 클릭하면 작성이 완료됩니다.
        </div>
      )}
      <div className={styles.letterWp}>
        <div
          className={`${styles.content} ${isSent ? styles.contentSent : ""}`}
        >
          <textarea
            className={styles.mainLetter}
            placeholder="편지 내용을 입력해주세요."
            name="letter"
            value={letter}
            ref={textAreaRef}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            style={{
              backgroundImage: `url("/img/letterPaper.png")`,
              backgroundRepeat: "no-repeat",
              width: "1160px",
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
          className={`${styles.envelopMain} ${
            showTooltip ? styles.hoverLetter : ""
          }`}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <img
            src={showTooltip ? "/img/hoverLetter.png" : "/img/envelopMain.png"}
            alt="봉투 메인"
            onClick={handleSendClick}
          />
          {showTooltip && (
            <div className={styles.tooltip}>편지를 저장하려면 클릭하세요.</div>
          )}
        </div>
      </div>
      <div className={styles.envelope}></div>
    </div>
  );
}

export default WriteLetter;
