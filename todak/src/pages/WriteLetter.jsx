import React, { useState } from "react";
import styles from "../css/StyledWriteLetter.module.css";

function WriteLetter() {
  const [letter, setLetter] = useState("");

  const handleInput = (event) => {
    const maxLength = 70;
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
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.letterWp}>
        <div className={styles.treeIcon}>
          <img src="" alt="" />
        </div>
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
              backgroundImage: `url("/img/letter.png")`,
              backgroundRepeat: "no-repeat",
              width: "1200px",
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
      </div>
      <div className={styles.envelope}></div>
    </div>
  );
}

export default WriteLetter;
