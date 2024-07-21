import React, { useState } from "react";
import styles from "../css/StyledRememberTree.module.css";
import HelpModal from "../pages/HelpModal";

function RememberTree() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const setTreeName = "보고 싶은 우리 언니";

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className={styles.container}>
        <img
          src="/img/plantTree-bg.png"
          alt="bgimg"
          className={styles.container}
        />
        <div className={styles.treeName}>{setTreeName}</div>
        <div className={styles.nextTreeBtn}>
          <img src="/img/nextBtn.png" alt="다음 나무" />
        </div>
        <div className={styles.addTreeBtn}>
          <img src="/img/addTree.png" alt="나무 추가" />
        </div>
        <div className={styles.helpBtn} onClick={toggleModal}>
          <img src="/img/help.png" alt="도움말" />
        </div>
        <div className={styles.rememberTree}>
          <img src="/img/rememberTree.png" alt="기억 나무" />
          <img className={styles.album} src="/img/album.png" alt="앨범" />
          <img className={styles.postBox} src="/img/postBox.png" alt="우체통" />
        </div>
        <div className={styles.talkBtn}>나무와 대화하기</div>
      </div>
      {isModalOpen && <HelpModal onClose={toggleModal} />}
    </>
  );
}

export default RememberTree;
