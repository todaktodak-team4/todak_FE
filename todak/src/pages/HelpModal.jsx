import React from "react";
import styles from "../css/StyledHelpModal.module.css";

function HelpModal({ onClose }) {
  return (
    <div className={styles.container}>
      <div className={styles.modalContent}>
        <div className={styles.closeButton} onClick={onClose}>
          <img src="/img/whiteHelp.png" alt="close" />
        </div>
        <div className={styles.plantTree}>
          {/* <span className={styles.noticeTitle}>
            <img
              src="/img/plantTreeArrow.png"
              alt="plantTreeArrow"
              className={styles.plantTreeArrow}
            />
            기억 나무 심기
          </span>
          <br /> 기억 나무는 최대 <br /> 3개까지 등록 가능해요. */}
        </div>
        <div className={styles.help}>
          <img
            src="/img/helpArrow.png"
            alt="plantTreeArrow"
            className={styles.helpArrow}
          />
          누르면 이 도움말을 다시
          <br /> 볼 수 있어요.
        </div>
        {/* <div className={styles.moveTree}>화살표로 기억 나무 이동</div> */}
        {/*이 부분 나무 더 있을 때에는 화살표 양쪽, 인당 기억나무 번호 123 정해서 그 이상이면 못 만들고 첫번째,세번째 나무 일 때는 화살표 한 방향 씩만 표시, 없으면 다른 방향으로만 갈 수 있도록 추후 수정*/}
        <div className={styles.delivery}>
          <span className={styles.noticeTitle}>
            <img
              src="/img/whiteAdd.png"
              alt="add img"
              className={styles.whiteAdd}
            />
            기억 나무 배송 안내
          </span>{" "}
          <br />
          처음 설정한 나무의 성장 시기가 지나면
          <br /> 나무의 배송 유무를 선택하는 메일이 발송됩니다. <br />내 곁에
          기억 나무를 두고 오랫동안 기억해주세요.
        </div>
        <div className={styles.talkToTree}>
          <span className={styles.noticeTitle}>
            <img
              src="/img/talkArrow.png"
              alt="talk arrow"
              className={styles.talkArrow}
            />
            나무와 대화하기
          </span>
          <br /> 애도의 과정에서 슬픔에 매몰되지 않는 건 중요합니다. <br />
          나무의 질문에 답하며 상실의 슬픔을 치유해요. <br />
          질문에 꾸준히 답하면 나무가 점점 성장해요.
        </div>
        <div className={styles.post}>
          <span className={styles.noticeTitle}>
            <img
              src="/img/postBoxArrow.png"
              alt="Arrow"
              className={styles.postBoxArrow}
            />
            마음 우체통
          </span>{" "}
          <br />
          기억하고 싶은 상대에게 <br />
          편지를 보내고 확인할 수 있어요.
        </div>
        <div className={styles.album}>
          <span className={styles.noticeTitle}>
            <img
              src="/img/albumArrow.png"
              alt="arrow"
              className={styles.albumArrow}
            />
            추억 책장
          </span>{" "}
          <br />
          기억하고 싶은 순간들을 사진과 <br />
          코멘트를 달아 기록할 수 있어요.
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default HelpModal;
