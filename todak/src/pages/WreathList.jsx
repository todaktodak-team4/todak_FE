import styles from "../css/StyledWreathList.module.css";

function WreathList() {
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
          <img src="/img/wreathList.png" alt="마이페이지 로고" />
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.latest}>최신순</div>
          <div className={styles.wreathList}>
            <div className={styles.wreathList}>
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
              <div className={styles.priceWp}>
                <img
                  src="/img/Wflo.png"
                  alt="헌화 이미지"
                  className={styles.fImg}
                  style={{
                    position: "relative",
                    top: "12px",
                    marginRight: "10px",
                  }}
                />
                <div className={styles.price}>1,000원 헌화</div>
              </div>
              <div className={styles.dateWp}>
                <div className={styles.date}>2024.07.13</div>
                <div className={styles.time}>12:09</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WreathList;
