import styles from "../css/StyledShowLetter.module.css";

function ShowLetter() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.letterWp}>
            <img src="/img/letterPreview.png" alt="미리보기" />
            <div className={styles.content}></div>
          </div>
          <div className={styles.letterInfo}>
            <div className={styles.user}></div>
            <div className={styles.profile}></div>
            <div className={styles.title}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowLetter;
