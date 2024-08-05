import React, { useState } from "react";
import styles from "../css/StyledSentComplete.module.css";
import ShowLetter from "../pages/ShowLetter.jsx";

function SentComplete({ onClose, treeId }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleGoListClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleClickInside = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <div className={styles.container} onClick={handleClickInside}>
        <div className={styles.modal}>
          <div className={styles.closeBtn} onClick={onClose}>
            <img src="/img/closeBtn2.png" alt="Close" />
          </div>
          <div className={styles.completeMessage}>
            소중한 편지가 전달되었어요{" "}
          </div>
          <img
            className={styles.airImg}
            src="/img/airplane.gif"
            alt="나무 이미지"
            style={{ width: "400px", height: "300px" }}
          />
          <div className={styles.completeContent}>
            소중한 마음을 담은 편지가 멀리멀리 날아가 하늘에까지 닿을 거예요.
            <br />
            깊이 간직한 내 마음은 편지 목록에서 다시 확인할 수 있어요.
          </div>
          <div className={styles.goList} onClick={handleGoListClick}>
            편지 목록 보기
          </div>
        </div>
      </div>

      {isModalVisible && (
        <ShowLetter onClose={handleCloseModal} treeId={treeId} />
      )}
    </>
  );
}

export default SentComplete;
