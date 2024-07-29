import styles from "../css/StyledShowAlbum.module.css";

function ShowAlbum() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.album}>
          <img src="/img/mainAlbum.png" alt="album" />
        </div>
      </div>
    </>
  );
}

export default ShowAlbum;
