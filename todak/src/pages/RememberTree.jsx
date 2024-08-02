import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Nav from "./Nav";
import styles from "../css/StyledRememberTree.module.css";
import HelpModal from "../pages/HelpModal";
import TalkModal from "../pages/TalkModal";
import UploadImg from "../pages/UploadImg";
import ShowAlbum from "../pages/ShowAlbum";
import WriteLetter from "../pages/WriteLetter";
import ShowLetter from "../pages/ShowLetter";

function RememberTree() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTalkModalOpen, setIsTalkModalOpen] = useState(false);
  const [isPostBoxHovered, setIsPostBoxHovered] = useState(false);
  const [isAlbumHovered, setIsAlbumHovered] = useState(false);
  const [isPostBoxClicked, setIsPostBoxClicked] = useState(false);
  const [isAlbumClicked, setIsAlbumClicked] = useState(false);
  const [isUploadImgOpen, setIsUploadImgOpen] = useState(false);
  const [isShowAlbumOpen, setIsShowAlbumOpen] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isWriteLetterOpen, setIsWriteLetterOpen] = useState(false);
  const [isShowLetterOpen, setIsShowLetterOpen] = useState(false);
  const [treeName, setTreeName] = useState("");
  const [treeId, setTreeId] = useState(null);
  const [userId, setUserId] = useState(null);
  const [username, setUserName] = useState("");
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token")
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refresh_token")
  );
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");

  const refreshAccessToken = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/accounts/token/refresh/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refresh: refreshToken }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setAccessToken(data.access);
        localStorage.setItem("access_token", data.access);
        return data.access;
      } else {
        // Handle refresh token errors
        console.error("Failed to refresh token");
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        navigate("/login"); // Redirect to login if refresh fails
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
    }
  };

  useEffect(() => {
    const lastSubmissionDate = sessionStorage.getItem("lastSubmissionDate");
    const today = new Date().toISOString().split("T")[0];
    if (lastSubmissionDate === today) {
      setHasSubmitted(true);
    }

    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/rememberTree/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.status === 401) {
          // Access token이 만료되면 새로운 토큰 재발급
          const newAccessToken = await refreshAccessToken();
          if (newAccessToken) {
            // Retry fetch with new access token
            const retryResponse = await fetch(
              "http://127.0.0.1:8000/rememberTree/",
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${newAccessToken}`,
                },
              }
            );
            if (retryResponse.ok) {
              const data = await retryResponse.json();
              console.log("data[0].myName:", data[0].myName);
              setTreeName(data[0].treeName);
              setTreeId(data[0].id);
              setUserName(data[0].myName);
            } else {
              console.error("Failed to fetch data after refreshing token");
            }
          }
        } else if (response.ok) {
          const data = await response.json();
          console.log("data[0].myName:", data[0].myName);
          setTreeName(data[0].treeName);
          setTreeId(data[0].id);
          setUserName(data[0].myName);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("An error occurred", error);
      }
    };

    const fetchUserId = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/accounts/api/get-user-id-from-token/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.status === 401) {
          const newAccessToken = await refreshAccessToken();
          if (newAccessToken) {
            const retryResponse = await fetch(
              "http://127.0.0.1:8000/accounts/api/get-user-id-from-token/",
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${newAccessToken}`,
                },
              }
            );
            if (retryResponse.ok) {
              const data = await retryResponse.json();
              setUserId(data.userId);
            } else {
              console.error("Failed to fetch user ID after refreshing token");
            }
          }
        } else if (response.ok) {
          const data = await response.json();
          setUserId(data.userId);
        } else {
          console.error("Failed to fetch user ID");
        }
      } catch (error) {
        console.error("An error occurred", error);
      }
    };

    fetchData();
    fetchUserId();
  }, [accessToken]);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const toggleTalkModal = () => {
    setIsTalkModalOpen((prev) => !prev);
  };

  const handleAlbumClick = () => {
    setIsAlbumClicked((prev) => !prev);
    if (!isAlbumClicked) {
      setIsPostBoxClicked(false);
    }
  };

  const handlePostBoxClick = () => {
    setIsPostBoxClicked((prev) => !prev);
    if (!isPostBoxClicked) {
      setIsAlbumClicked(false);
    }
  };

  const toggleUploadImgModal = () => {
    setIsUploadImgOpen((prev) => !prev);
  };

  const toggleShowAlbumModal = () => {
    setIsShowAlbumOpen((prev) => !prev);
  };

  const toggleWriteLetterModal = () => {
    setIsWriteLetterOpen((prev) => !prev);
  };

  const toggleShowLetterModal = () => {
    console.log("Toggling ShowLetter Modal");
    setIsShowLetterOpen((prev) => !prev);
  };

  const handleShowAlbum = () => {
    setIsUploadImgOpen(false);
    setIsShowAlbumOpen(true);
  };

  return (
    <>
      <div className={styles.container}>
        <img
          src="/img/plantTree-bg.png"
          alt="bgimg"
          className={styles.container}
        />
        <div className={styles.treeName}>{treeName}</div>
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
          <img
            src={`/img/${
              hasSubmitted ? "submitAnswerTree.png" : "rememberTree.png"
            }`}
            alt="기억 나무"
          />
          <div
            className={styles.albumContainer}
            onMouseEnter={() => setIsAlbumHovered(true)}
            onMouseLeave={() => setIsAlbumHovered(false)}
            onClick={handleAlbumClick}
          >
            {isAlbumHovered && !isAlbumClicked && (
              <div className={styles.hoverAlbumText}>추억 책장</div>
            )}
            <img
              className={styles.album}
              src={isAlbumHovered ? "/img/hoverAlbum.png" : "/img/album.png"}
              alt="앨범"
            />
          </div>
          <div
            className={styles.postBoxContainer}
            onMouseEnter={() => setIsPostBoxHovered(true)}
            onMouseLeave={() => setIsPostBoxHovered(false)}
            onClick={handlePostBoxClick}
          >
            {isPostBoxHovered && !isPostBoxClicked && (
              <div className={styles.hoverPostText}>마음 우체통</div>
            )}
            <img
              className={styles.postBox}
              src={
                isPostBoxHovered ? "/img/hoverPostBox.png" : "/img/postBox.png"
              }
              alt="우체통"
            />
          </div>
        </div>
        {!isTalkModalOpen && (
          <div className={styles.talkBtn} onClick={toggleTalkModal}>
            나무와 대화하기
          </div>
        )}
        {isAlbumClicked && (
          <div className={styles.albumButtons}>
            <div className={styles.pbtns} onClick={toggleUploadImgModal}>
              사진 업로드
            </div>
            <div className={styles.abtns} onClick={toggleShowAlbumModal}>
              앨범 보기
            </div>
          </div>
        )}
        {isPostBoxClicked && (
          <div className={styles.postBoxButtons}>
            <div className={styles.btns} onClick={toggleWriteLetterModal}>
              편지 쓰기
            </div>
            <div className={styles.btns} onClick={toggleShowLetterModal}>
              편지 목록
            </div>
          </div>
        )}
      </div>
      {isModalOpen && <HelpModal onClose={toggleModal} />}
      {isTalkModalOpen && (
        <TalkModal onClose={toggleTalkModal} myname={username} />
      )}
      {isUploadImgOpen && (
        <UploadImg
          onClose={toggleUploadImgModal}
          treeId={treeId}
          onShowAlbum={handleShowAlbum}
        />
      )}
      {isShowAlbumOpen && (
        <ShowAlbum onClose={toggleShowAlbumModal} treeId={treeId} />
      )}
      {isWriteLetterOpen && (
        <WriteLetter
          onClose={toggleWriteLetterModal}
          treeId={treeId}
          userId={userId}
        />
      )}
      {isShowLetterOpen && (
        <ShowLetter
          onClose={toggleShowLetterModal}
          treeId={treeId}
          userId={userId}
        />
      )}
    </>
  );
}

export default RememberTree;
