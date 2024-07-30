import styles from "../css/StyledShowAlbum.module.css";

function ShowAlbum() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.albumWp}>
          <div className={styles.album}>
            <img
              className={styles.albumBg}
              src="/img/albumBg.png"
              alt="album"
            />
            <div className={styles.img1}>
              <img src="/img/imgbg.png" alt="" className={styles.imgbg} />
              <img
                src="/img/defaultImg.png"
                alt=""
                className={styles.defaultImg}
              />
              <div className={styles.rightB}></div>
              <div className={styles.leftB}></div>
              <div className={styles.comWp}>
                <div className={styles.com}>언니랑 같이 바다 여행 갔을 때</div>
                <div className={styles.date}>20xx.xx.xx</div>
              </div>
              <div className={styles.mainComWp}>
                <img src="/img/comBg.png" alt="" />
                <div className={styles.mainCom}>
                  언니랑 같이 튜브 타면서 놀았었는데... 선크림을 발라도 온 몸이
                  다 탔었던 무지 더웠던 여름날
                </div>
              </div>
            </div>
            <div className={styles.img2}>
              <img src="/img/imgbg.png" alt="" className={styles.imgbg} />
              <img
                src="/img/defaultImg.png"
                alt=""
                className={styles.defaultImg}
              />
              <div className={styles.rightB}></div>
              <div className={styles.leftB}></div>
              <div className={styles.comWp}>
                <div className={styles.com}>언니랑 같이 바다 여행 갔을 때</div>
                <div className={styles.date}>20xx.xx.xx</div>
              </div>
              <div className={styles.mainComWp}>
                <img src="/img/comBg.png" alt="" />
              </div>
            </div>
            <div className={styles.img3}></div>
            <div className={styles.img4}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowAlbum;
