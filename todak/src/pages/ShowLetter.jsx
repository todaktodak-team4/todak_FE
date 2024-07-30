import styles from "../css/StyledShowLetter.module.css";

function ShowLetter() {
  const letterContent = `보고싶은 우리 언니,\n
벌써 언니가 떠난지 두 달이 지났네. 하루하루가 힘들고 외롭다. 언니의 따뜻한 미소와 포근한 품이 너무 보고 싶어.\n 
언니가 보내준 편지들을 다시 읽으면서 언니의 지혜와 용기에 힘을 얻고 있어. 언니가 지금도 옆에 있다면 뭐라고 말해줄지 상상해.\n
언니처럼 세상을 밝고 아름답게 만드는 사람이 되도록 노력할게. 언젠가 다시 만날 그날까지 건강하게 살아갈게.\n
나는 오늘 밖에 나가서 산책도 잠깐 하고, 우리가 자주 공부하러 갔던 카페에 가서 커피도 마셨는데 언니는 오늘 뭐했어?`;

  const title = letterContent.slice(0, 50);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.letterWp}>
            <img src="/img/letterPreview.png" alt="미리보기" />
            <div className={styles.content}>{letterContent}</div>
          </div>
          <div className={styles.letterInfo}>
            <img src="/img/profTemp.png" className={styles.profileImg}></img>
            <div className={styles.userInfo}>
              <div className={styles.user}>민경</div>
              <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.date}>20xx.xx.xx</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowLetter;
