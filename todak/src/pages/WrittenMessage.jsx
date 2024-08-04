import styles from "../css/StyledWrittenMessage.module.css";

function WrittenMessage() {
  return (
    <>
      <div className={styles.container}>
        <img
          src="/img/mypageBg.png"
          alt="bgimg"
          style={{ width: "100%", minHeight: "1000px", objectFit: "cover" }}
          className={styles.containerBg}
        />
        <div className={styles.logo}>
          <img src="/img/writtenMessage.png" alt="마이페이지 로고" />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.latest}>최신순</div>
          <div className={styles.contentList}>
            <img
              src="/img/point.png"
              alt="점"
              style={{
                width: "15px",
                height: "15px",
                position: "relative",
                top: "20px",
              }}
            />
            <div className={styles.memorialHall}>세월호 참사 추모관</div>
            <div className={styles.contentWp}>
              <div className={styles.content}>
                친구여, 너무나 일찍 떠나보내 정말 슬픕니다. 우리가 함께 나누었던
                추억들을 어쩌구
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WrittenMessage;
