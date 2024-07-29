import { useState, useEffect, useRef } from "react";
import styles from "../css/StyledTalkModal.module.css";

import { useNavigate,useLocation  } from "react-router-dom";

function TalkModal({ onClose }) {
  const [getAnswer, setAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedAnswer, setSubmittedAnswer] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastTimer, setToastTimer] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hideAnswerWp, setHideAnswerWp] = useState(false);
  const [closeTimer, setCloseTimer] = useState(null);
  const location = useLocation();
  const [question, setQuestion] = useState("");
  // const question = "오늘 점심은 드셨나요? 맛있는 걸로 드셨나요?";
  const questRef = useRef(null);
  const answerWpRef = useRef(null);
  const chatBoxRef = useRef(null);
  const token = localStorage.getItem("token")
  const [questionId, setQuestionId] = useState(null);
  console.log("여부:",isSubmitted);


  //질문에 답을 한 적이 없으면 첫번째 연동문 실행
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/rememberTree/daily-question/", {
          method: "GET",
          headers: {
            "Authorization": `Token ${token}`,
          },
        });

        if (response.ok) {
          const jsonData = await response.json();
          console.log("데이터",jsonData);
          setQuestion(jsonData.questionText);
          setQuestionId(jsonData.id);
        } else {  //질문에 답을 한 적이 있으면 당일에 받은 질문과 답을 가져오는 연동문 실행
          const response = await fetch("http://127.0.0.1:8000/daily-question/today-answers/", {
            method: "GET",
            headers: {
              "Authorization": `Token ${token}`,
            },
          });
          if (response.ok) {
            const jsonData = await response.json();
            if (jsonData.length > 0) {
              const answerData = jsonData[0]; 
              console.log("데이터3", answerData.answerText);
              console.log("데이터4", answerData.question.questionText);
              setQuestion(answerData.question.questionText);
              setSubmittedAnswer(answerData.answerText);
              setIsSubmitted(true);
            }
          }
         
        }
      } catch (error) {
        console.error("An error occurred", error);
      }
    };

    fetchData();
  }, [token]);


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

  async function submitAnswer() {
    if (!isSubmitted && getAnswer.trim() !== "") {
      const today = new Date().toISOString().split("T")[0];
      const payload = {
        question_id: questionId,
        answer_text: getAnswer,
      };
      try {
        const response = await fetch("http://127.0.0.1:8000/rememberTree/daily-question/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${token}`,
          },
          body: JSON.stringify(payload),
        });
  
        if (response.ok) {
          const jsonData = await response.json();
          console.log("연동 완료");
          console.log("데이터:", jsonData.questionText);
        } else {
          console.error("Failed to submit data");
        }
      } catch (error) {
        console.error("An error occurred", error);
      }
  
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
