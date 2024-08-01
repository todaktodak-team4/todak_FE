import styles from "../css/StyledSentComplete.module.css";

function SentComplete() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.modal}>
          <div className={styles.completeMessage}>
            소중한 편지가 전달되었어요{" "}
          </div>
          <img
            className={styles.growImg}
            src="/img/growComplete.png"
            alt="나무 이미지"
          />
          <div className={styles.completeContent}>
            소중한 마음을 담은 편지가 멀리멀리 날아가 하늘에까지 닿을 거예요.
            깊이 간직한 내 마음은 편지 목록에서 다시 확인할 수 있어요.
          </div>
          <div className={styles.goList} onClick={handleGoListClick}>
            편지 목록 보기
          </div>
        </div>
      </div>
      )}
    </>
  );
}
export default SentComplete;
