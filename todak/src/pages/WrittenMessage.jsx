import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../css/StyledWrittenMessage.module.css";

function WrittenMessage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/message/my-messages/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        });
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className={styles.container}>
      <img
        src="/img/mypageBg.png"
        alt="bgimg"
        style={{ width: "100%", minHeight: "1000px", objectFit: "cover" }}
        className={styles.containerBg}
      />
      <div className={styles.logo}>
        <img src="/img/writtenMessage.png" alt="마이페이지 로고" />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.latest}>최신순</div>
        {messages.length === 0 ? (
          <p>추모글이 없습니다.</p>
        ) : (
          messages.map((message) => (
            <div key={message.id} className={styles.contentList}>
              <img
                src="/img/point.png"
                alt="점"
                style={{
                  width: "15px",
                  height: "15px",
                  position: "relative",
                  top: "20px",
                }}
              />
              <div className={styles.memorialHall}>{message.hallName}</div>
              <div className={styles.contentWp}>
                <div className={styles.content}>{message.content}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default WrittenMessage;
