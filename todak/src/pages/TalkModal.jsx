import { useState, useEffect, useRef } from "react";
import styles from "../css/StyledTalkModal.module.css";

function TalkModal() {
  const [getAnswer, setAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedAnswer, setSubmittedAnswer] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const question = "오늘 점심은 드셨나요? 맛있는 걸로 드셨나요?";
  const questRef = useRef(null);

  function submitAnswer() {
    if (!isSubmitted && getAnswer.trim() !== "") {
      setSubmittedAnswer(getAnswer);
      setIsSubmitted(true);
      setShowToast(false);
      setAnswer("");
    } else if (isSubmitted) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  }

  function handleShowToast() {
    if (isSubmitted) {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  }

  useEffect(() => {
    if (questRef.current) {
      const questElement = questRef.current;
      // Check if the content overflows
      setIsExpanded(questElement.scrollHeight > questElement.clientHeight);
    }
  }, [isSubmitted]);

  return (
    <>
      <div className={styles.container}>
        <div
          className={`${styles.quest} ${isSubmitted ? styles.questShift : ""} ${
            isExpanded ? styles.expanded : ""
          }`}
          ref={questRef}
        >
          {question}
        </div>
        {isSubmitted && (
          <div className={styles.chatBox}>
            <div className={styles.answer}>{submittedAnswer}</div>
          </div>
        )}
        <div className={styles.answerWp}>
          <input
            name="answer"
            type="text"
            className={`${styles.answerBox} ${
              isSubmitted ? styles.submitted : ""
            }`}
            placeholder={
              isSubmitted
                ? "나무의 질문은 하루에 하나 전송돼요. 내일 다시 당신의 이야기를 들려주세요."
                : "질문에 대한 답을 입력해주세요."
            }
            value={getAnswer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={isSubmitted}
            onClick={handleShowToast} // Handle input click
          />
          <div className={styles.submit}>
            <img
              src="/img/answerSubmit.png"
              alt="submit button"
              onClick={submitAnswer}
              style={{
                cursor: isSubmitted ? "not-allowed" : "pointer",
                filter: isSubmitted ? "grayscale(100%)" : "none",
              }}
            />
          </div>
        </div>
      </div>
      {showToast && <div className={styles.toast}>내일 다시 방문해주세요.</div>}
    </>
  );
}

export default TalkModal;
