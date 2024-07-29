import React, { useState } from "react";
import styles from "../css/StyledWriteLetter.module.css";

function WriteLetter() {
  const [letter, setLetter] = useState("");

  const handleInput = (event) => {
    const maxLength = 56;
    const text = event.target.value;
    let lines = [];
    let currentLine = "";

    for (let i = 0; i < text.length; i++) {
      currentLine += text[i];
      if (currentLine.length === maxLength || text[i] === "\n") {
        lines.push(currentLine);
        currentLine = "";
      }
    }

    if (currentLine) {
      lines.push(currentLine);
    }

    setLetter(lines.join("\n"));
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
            rows="10"
            value={letter}
            onChange={handleInput}
            style={{
              backgroundImage: `url("/img/letter.png")`,
              backgroundRepeat: "no-repeat",
              width: "1200px",
              height: "1000px",
              backgroundColor: "transparent",
              border: "none",
              whiteSpace: "pre-wrap",
              overflowWrap: "break-word",
              boxSizing: "border-box",
            }}
          ></textarea>
        </div>
      </div>
      <div className={styles.envelope}></div>
    </div>
  );
}

export default WriteLetter;
