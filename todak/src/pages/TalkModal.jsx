import styles from "../css/StyledTalkModal.module.css";
function TalkModal() {
  const question = "오늘 점심은 드셨나요? 맛있는 걸로 드셨나요?";
  function submitAnswer() {
    console.log("submit!");
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.quest}>{question}</div>
        <div className={styles.answerWp}>
          <input
            type="text"
            className={styles.answerBox}
            placeholder="질문에 대한 답을 입력해주세요."
          ></input>
          <div className={styles.submit}>
            <img src="/img/answerSubmit.png" alt="" onClick={submitAnswer} />
            {/*제출버튼 누르면 내가 보낸 것처럼 뜨고 placeholder 문구 변경 -> 연동 후에 해도 될 듯*/}
          </div>
        </div>
      </div>
    </>
  );
}
export default TalkModal;
