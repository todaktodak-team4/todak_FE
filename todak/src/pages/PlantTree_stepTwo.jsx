import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/StyledPlantTree.module.css";

function PlantTreeStepTwo() {
  const navigate = useNavigate();

  function submit() {
    navigate("/plantTreeStepTwo");
  }
  return (
    <div className={styles.container}>
      <img
        className={styles.container}
        src="/img/plantTree-bg.png"
        alt="plant tree background img"
      />
      <div className={styles.plantTreeWp}>
        <div className={styles.ptTitle}>기억 나무 심기</div>
        <img
          className={styles.ptImg}
          src="/img/tree-icon.png"
          alt="tree icon"
        />
        <div className={styles.step}>STEP 2</div>
        <img src="/img/line.png" alt="line" className={styles.line2} />
        <div className={styles.selectFlowerWp}>
          <img src="/img/step2_3.png" alt="1" className={styles.stepTwo3} />
          <div className={styles.flowerTitle}>꽃 종류 선택</div>
          <div className={styles.selectFlower}>
            <div className={styles.sFNotice}>
              <li>
                나무가 다 자라면 피울 꽃의 종류를 선택할 수 있어요.
                <br />
                꽃마다 각자 꽃말이 달라요.
              </li>
            </div>
            <div className={styles.flowerWp}>
              <img
                src="/img/flowerselectBtn.png"
                alt=""
                className={styles.flo}
              />
              <img
                src="/img/flowerselectBtn.png"
                alt=""
                className={styles.flo}
              />
              <img
                src="/img/flowerselectBtn.png"
                alt=""
                className={styles.flo}
              />
              <img
                src="/img/flowerselectBtn.png"
                alt=""
                className={styles.flo}
              />
              <img
                src="/img/flowerselectBtn.png"
                alt=""
                className={styles.flo}
              />
            </div>
          </div>
        </div>
        <div className={styles.growTimeWp}>
          <img src="/img/step2_4.png" alt="1" className={styles.stepTwo4} />
          <div className={styles.growTitle}>성장 기간 설정</div>

          <div className={styles.gTNotice}>
            <li>
              나무의 성장 기간은 기본 3개월이에요. 본인의 애도 기간에 따라
              설정할 수 있어요.{" "}
            </li>
            <li>
              이별 후 6개월~1년 간 힘든 감정을 느끼는 것은 지극히 정상적인
              애도의 과정입니다.{" "}
            </li>
            <li>성장 이후 기억 나무의 배송 유무 선택 알림이 발송됩니다.</li>
            <div className={styles.radioWp}>
              <input type="radio" id="3mon" name="period" />
              <label className={styles.radioBtn} htmlFor="3mon">
                <span className={styles.period}>3개월</span>
              </label>
              <input type="radio" id="userInput" name="period" />{" "}
              <label className={styles.radioBtn} htmlFor="userinput">
                <span className={styles.period}>직접 입력</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.nextBtn} onClick={submit}>
        등록하기
      </div>
    </div>
  );
}
export default PlantTreeStepTwo;
