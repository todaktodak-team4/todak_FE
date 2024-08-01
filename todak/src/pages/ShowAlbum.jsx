import styles from "../css/StyledShowAlbum.module.css";
import { useState, useEffect } from "react";

function ShowAlbum() {
  const [albumData, setAlbumData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    fetch("/api/albumData")
      .then((response) => response.json())
      .then((data) => setAlbumData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = albumData.slice(indexOfFirstItem, indexOfLastItem);

  const renderAlbumItem = (item, index) => {
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
              src={item.img}
              alt=""
              className={styles.defaultImg}
              style={{ width: "367px", height: "187px" }}
            />
            <div className={styles.rightB}></div>
            <div className={styles.leftB}></div>
            <div className={styles.comWp}>
              <div className={styles.com}>{item.com1}</div>
              <div className={styles.date}>{item.date}</div>
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
              src={item.img}
              alt=""
              className={styles.defaultImg}
              style={{ width: "253px", height: "245px" }}
            />
            <div className={styles.sticker}>
              <img src="/img/sticker.png" alt="" />
            </div>
            <div className={styles.comWp}>
              <div className={styles.com}>{item.com1}</div>
              <div className={styles.date}>{item.date}</div>
            </div>
            <div className={styles.mainComWp}>
              <img src="/img/comPaper.png" alt="코멘트 메모지" />
              <div className={styles.mainCom}>{item.mainCom}</div>
            </div>
          </div>
        );
      case 2:
        return (
          <div key={index} className={styles.img3}>
            <img src="/img/imgbg.png" alt="" className={styles.imgbg} />
            <img
              src={item.img}
              alt=""
              className={styles.defaultImg}
              style={{ width: "367px", height: "187px" }}
            />
            <div className={styles.clip}>
              <img src="/img/clip.png" alt="" />
            </div>
            <div className={styles.comWp}>
              <div className={styles.com}>{item.com1}</div>
              <div className={styles.date}>{item.date}</div>
            </div>
            <div className={styles.mainComWp}>
              <img src="/img/comPaper2.png" alt="" />
              <div className={styles.mainCom2}>{item.mainCom}</div>
            </div>
          </div>
        );
      case 3:
        return (
          <div key={index} className={styles.img4}>
            <img src="/img/imgbg.png" alt="" className={styles.imgbg} />
            <img
              src={item.img}
              alt=""
              className={styles.defaultImg}
              style={{ width: "367px", height: "187px" }}
            />
            <div className={styles.rightB}></div>
            <div className={styles.leftB}></div>
            <div className={styles.comWp}>
              <div className={styles.com}>{item.com1}</div>
              <div className={styles.date}>{item.date}</div>
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
