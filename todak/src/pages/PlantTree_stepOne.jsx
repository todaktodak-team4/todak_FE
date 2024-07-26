import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/StyledPlantTree.module.css";

function PlantTreeStepOne() {
  const navigate = useNavigate();
  const [treeName, setTreeName] = useState("");
  const [callName, setCallName] = useState("");
  const token = localStorage.getItem("token");

  async function GoToNext() {
    console.log("clicked!");
    const payload = {
      treeName: treeName,
      myName: callName,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/rememberTree/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
          //토큰값 추가완료
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        navigate("/plantTreeStepTwo");
      } else {
        console.error("데이터 전송 실패");
      }
    } catch (error) {
      console.error("An error occurred", error);
    }
  }

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url("/img/plantTree-bg.png")`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.plantTreeWp}>
        <div className={styles.ptTitle}>기억 나무 심기</div>
        <img
          className={styles.ptImg}
          src="/img/tree-icon.png"
          alt="tree icon"
        />
        <div className={styles.step}>STEP 1</div>
        <img src="/img/line.png" alt="line" className={styles.line} />
        <div className={styles.treeNameWp}>
          <img src="/img/step1_1.png" alt="1" className={styles.stepOne1} />
          <div className={styles.treeTitle}>기억 나무 이름</div>
          <input
            name="treename"
            type="text"
            placeholder="나무의 이름을 정해주세요."
            className={styles.treeNameInput}
            value={treeName}
            onChange={(e) => setTreeName(e.target.value)}
          />
        </div>
        <div className={styles.callNameWp}>
          <img src="/img/step1_2.png" alt="1" className={styles.stepOne2} />
          <div className={styles.callTitle}>나의 호칭</div>
          <input
            name="callname"
            type="text"
            placeholder="나무가 부를 나의 호칭을 적어주세요."
            className={styles.callNameInput}
            value={callName}
            onChange={(e) => setCallName(e.target.value)}
          />
        </div>
      </div>
      <div
        className={styles.nextBtn}
        style={{ zIndex: "100" }}
        onClick={GoToNext}
      >
        다음 단계로
      </div>
    </div>
  );
}

export default PlantTreeStepOne;
