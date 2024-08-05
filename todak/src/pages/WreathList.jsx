import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../css/StyledWreathList.module.css";

function WreathList() {
  const [wreaths, setWreaths] = useState([]);
  useEffect(() => {
    // 컴포넌트가 마운트되면 상단으로 스크롤
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const fetchWreaths = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/wreath/my-wreaths/",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        setWreaths(response.data);
      } catch (error) {
        console.error("Error fetching wreaths:", error);
      }
    };

    fetchWreaths();
  }, []);

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}.${month}.${day} ${hours}:${minutes}`;
  };

  return (
    <div className={styles.container}>
      <img
        src="/img/mypageBg.png"
        alt="bgimg"
        style={{ width: "100%", minHeight: "1000px", objectFit: "cover" }}
        className={styles.containerBg}
      />
      <div className={styles.logo}>
        <img src="/img/wreathList.png" alt="마이페이지 로고" />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.latest}>최신순</div>
        <div className={styles.wreathList}>
          {wreaths.length === 0 ? (
            <p>헌화 내역이 없습니다.</p>
          ) : (
            wreaths.map((wreath) => {
              const formattedDateTime = formatDateTime(wreath.createdAt);
              return (
                <div key={wreath.id} className={styles.wreathItem}>
                  <img src="/img/point.png" alt="점" className={styles.point} />
                  <div className={styles.memorialHall}>{wreath.hallName}</div>
                  <div className={styles.priceWp}>
                    <img
                      src="/img/Wflo.png"
                      alt="헌화 이미지"
                      className={styles.fImg}
                    />
                    <div className={styles.price}>
                      {wreath.donation.toLocaleString()}원 헌화
                    </div>
                  </div>
                  <div className={styles.dateWp}>
                    <div className={styles.date}>{formattedDateTime}</div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default WreathList;
