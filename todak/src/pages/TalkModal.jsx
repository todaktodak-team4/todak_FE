import { useState, useEffect, useRef } from "react";
import styles from "../css/StyledTalkModal.module.css";

function TalkModal({ onClose }) {
  const [getAnswer, setAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedAnswer, setSubmittedAnswer] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastTimer, setToastTimer] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hideAnswerWp, setHideAnswerWp] = useState(false);
  const [closeTimer, setCloseTimer] = useState(null);

  const question = "오늘 점심은 드셨나요? 맛있는 걸로 드셨나요?";
  const questRef = useRef(null);
  const answerWpRef = useRef(null);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    const lastSubmissionDate = sessionStorage.getItem("lastSubmissionDate");
    const today = new Date().toISOString().split("T")[0];

    if (lastSubmissionDate === today) {
      setIsSubmitted(true);
      setHideAnswerWp(true);

      const storedAnswer = sessionStorage.getItem("submitAns");
      if (storedAnswer) {
        setSubmittedAnswer(storedAnswer);
      }

      handleShowToast("5초 뒤에 대화가 닫힙니다.", 5000);
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      setCloseTimer(timer);
    }
  }, [onClose]);

  function submitAnswer() {
    if (!isSubmitted && getAnswer.trim() !== "") {
      const today = new Date().toISOString().split("T")[0];
      sessionStorage.setItem("lastSubmissionDate", today);
      sessionStorage.setItem("submitAns", getAnswer);
      setSubmittedAnswer(getAnswer);
      setIsSubmitted(true);
      setAnswer("");
      handleShowToast("배경을 클릭하면 5초 후 대화가 닫힙니다.", 3000);
    } else if (isSubmitted) {
      handleShowToast("내일 다시 방문해주세요.", 3000);
    }
  }

  function handleShowToast(message, duration) {
    if (toastTimer) clearTimeout(toastTimer);
    setToastMessage(message);
    const timer = setTimeout(() => setToastMessage(""), duration);
    setToastTimer(timer);
  }

  useEffect(() => {
    if (questRef.current) {
      const questElement = questRef.current;
      setIsExpanded(questElement.scrollHeight > questElement.clientHeight);
    }
  }, [isSubmitted]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        answerWpRef.current &&
        !answerWpRef.current.contains(event.target) &&
        chatBoxRef.current &&
        !chatBoxRef.current.contains(event.target) &&
        questRef.current &&
        !questRef.current.contains(event.target)
      ) {
        if (isSubmitted) {
          if (closeTimer) clearTimeout(closeTimer);
          handleShowToast("5초 뒤에 대화가 닫힙니다.", 5000);
          const timer = setTimeout(() => {
            onClose();
          }, 5000);
          setCloseTimer(timer);
        } else {
          onClose();
        }
      } else {
        if (closeTimer) clearTimeout(closeTimer);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSubmitted, onClose, closeTimer]);

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
          <div className={styles.chatBox} ref={chatBoxRef}>
            <div className={styles.answer}>{submittedAnswer}</div>
          </div>
        )}
        {!hideAnswerWp && (
          <div className={styles.answerWp} ref={answerWpRef}>
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
              onClick={() => {
                if (isSubmitted) {
                  handleShowToast(
                    "내일 다시 방문해주세요. 배경을 클릭하면 5초 후 대화가 닫힙니다.",
                    3000
                  );
                }
              }}
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
        )}
      </div>
      {toastMessage && <div className={styles.toast}>{toastMessage}</div>}{" "}
    </>
  );
}

export default TalkModal;
