import styles from "../css/StyledMypage.module.css";
import { useNavigate } from "react-router-dom";

function Mypage() {
  const navigate = useNavigate();
  function GoModifyInfo() {
    navigate("/modifyInfo");
  }
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
          <img src="/img/logo.png" alt="마이페이지 로고" />
        </div>
        <div className={styles.innerContainer}>
          <div className={styles.profile}>
            <div className={styles.flex}>
              <div className={styles.profImg}>
                <img src="/img/mypageProfile.png" alt="프로필 사진" />
                <img
                  src="/img/imgModifyBtn.png"
                  alt="이미지 수정 버튼"
                  className={styles.profileImgModifyBtn}
                />
              </div>
            </div>
            <div className={styles.stateProfileFlex}>
              <div className={styles.userDetail}>
                <div className={styles.user}>김가루 님</div>
                <div className={styles.days}>함께한지 nn일째</div>
                <div className={styles.answerState}>
                  오늘 기억 나무의 질문에 답을 하지 않았어요!
                </div>
              </div>
              <div className={styles.state}>
                <div className={styles.treeState}>새싹</div>
                <span className={styles.line}>|</span>
                <div className={styles.flowerState}>수련</div>
                <span className={styles.line}>|</span>
                <div className={styles.plantDateState}>30일 째</div>
              </div>
            </div>
          </div>
          <div className={styles.modifyBtn} onClick={GoModifyInfo}>
            회원 정보 수정
          </div>
          <div className={styles.list}>
            <div className={styles.write}>
              <img src="/img/mypageWrite.png" alt="내가 남긴 추모글" />
              내가 남긴 추모글
            </div>
            <div className={styles.flower}>
              <img src="/img/mypageFlower.png" alt="헌화 내역" />
              헌화 내역
            </div>
            <div className={styles.rememberTree}>
              <img src="/img/mypageTree.png" alt="기억 나무" />
              기억 나무
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mypage;
