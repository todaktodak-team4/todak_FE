import styles from "../css/StyledShowAlbum.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ShowAlbum({ onClose, treeId }) {
  const [albumData, setAlbumData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const navigate = useNavigate();
  const token = localStorage.getItem('access_token');

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/rememberTree/${treeId}/photos/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Fetched data:", data);
        setAlbumData(data);
      } else if (response.status === 401) {
        // Token expired handling
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        alert("30분 동안 활동이 없어서 자동 로그아웃 되었습니다. 다시 로그인해주세요.");
        navigate("/login");
      } else {
        console.error("Failed to fetch images:", response.statusText);
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = albumData.slice(indexOfFirstItem, indexOfLastItem);

  const renderAlbumItem = (item, index) => {
    // Ensure URL is properly formed
    const imageUrl = item.rememberPhoto ? `http://127.0.0.1:8000${item.rememberPhoto}` : "/img/default.png";

    switch (index % 4) {
      case 0:
        return (
          <div key={index} className={styles.img1}>
            <img
              className={styles.albumBg}
              src="/img/albumBg.png"
              alt="album"
            />
            <img
              src={imageUrl}
              alt=""
              className={styles.defaultImg}
              style={{ width: "367px", height: "187px" }}
            />
            <div className={styles.rightB}></div>
            <div className={styles.leftB}></div>
            <div className={styles.comWp}>
              <div className={styles.com}>{item.description}</div>
              <div className={styles.date}>{item.rememberDate}</div>
            </div>
          </div>
        );
      case 1:
        return (
          <div key={index} className={styles.img2}>
            <img
              src="/img/polaBg.png"
              alt="폴라로이드 이미지"
              className={styles.imgbg}
            />
            <img
              src={imageUrl}
              alt=""
              className={styles.defaultImg}
              style={{ width: "253px", height: "245px" }}
            />
            <div className={styles.sticker}>
              <img src="/img/sticker.png" alt="" />
            </div>
            <div className={styles.comWp}>
              <div className={styles.com}>{item.description}</div>
              <div className={styles.date}>{item.rememberDate}</div>
            </div>
            <div className={styles.mainComWp}>
              <img src="/img/comPaper.png" alt="코멘트 메모지" />
              <div className={styles.mainCom}>{item.comment}</div>
            </div>
          </div>
        );
      case 2:
        return (
          <div key={index} className={styles.img3}>
            <img src="/img/imgbg.png" alt="" className={styles.imgbg} />
            <img
              src={imageUrl}
              alt=""
              className={styles.defaultImg}
              style={{ width: "367px", height: "187px" }}
            />
            <div className={styles.clip}>
              <img src="/img/clip.png" alt="" />
            </div>
            <div className={styles.comWp}>
              <div className={styles.com}>{item.description}</div>
              <div className={styles.date}>{item.rememberDate}</div>
            </div>
            <div className={styles.mainComWp}>
              <img src="/img/comPaper2.png" alt="" />
              <div className={styles.mainCom2}>{item.comment}</div>
            </div>
          </div>
        );
      case 3:
        return (
          <div key={index} className={styles.img4}>
            <img src="/img/imgbg.png" alt="" className={styles.imgbg} />
            <img
              src={imageUrl}
              alt=""
              className={styles.defaultImg}
              style={{ width: "367px", height: "187px" }}
            />
            <div className={styles.rightB}></div>
            <div className={styles.leftB}></div>
            <div className={styles.comWp}>
              <div className={styles.com}>{item.description}</div>
              <div className={styles.date}>{item.rememberDate}</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const totalPages = Math.ceil(albumData.length / itemsPerPage);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.albumWp}>
          <div className={styles.album}>
            {currentItems.map((item, index) => renderAlbumItem(item, index))}
          </div>
        </div>
        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            이전
          </button>
          <span>
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            다음
          </button>
        </div>
      </div>
    </>
  );
}

export default ShowAlbum;
