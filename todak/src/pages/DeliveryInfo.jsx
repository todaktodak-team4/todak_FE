import styles from "../css/StyledDeliveryInfo.module.css";
import { useState } from "react";
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";
import { useNavigate } from "react-router-dom";

function DeliveryInfo() {
  const navigate = useNavigate();
  function GoToNext() {
    console.log("clicked!");
  }
  function GoBack() {
    navigate(-1);
  }

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [postalAddress, setPostalAddress] = useState("");
  const [zoneCode, setZoneCode] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  const handlePostCodeSelection = (data) => {
    setPostalAddress(data.address);
    setZoneCode(data.zonecode);
    closePostCode();
  };

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, "");

    const match = cleaned.match(/^(\d{2,3})(\d{3,4})(\d{4})$/);

    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }

    return cleaned;
  };

  const handlePhoneNumberChange = (e) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedNumber);
  };

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url("/img/plantTree-bg.png")`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.deliWp}>
        <div className={styles.top}>
          <div className={styles.boxImg}>
            <img src="/img/deliBox.png" alt="tree icon" />
          </div>
          <div className={styles.deliTitle}>기억 나무 배송</div>
        </div>

        <div className={styles.orderWp}>
          <img src="/img/d_1.png" alt="1" />
          <div className={`${styles.orderer} ${styles.title}`}>주문자</div>
          <input
            type="text"
            className={styles.inputBox}
            placeholder="주문자 성함"
          />
        </div>
        <div className={styles.recipientWp}>
          <img src="/img/d_2.png" alt="2" />
          <div className={`${styles.recipient} ${styles.title}`}>수령인</div>
          <input
            type="text"
            className={styles.inputBox}
            placeholder="수령인 성함"
          />
        </div>
        <div className={styles.telWp}>
          <img src="/img/d_3.png" alt="3" />
          <div className={`${styles.tel} ${styles.title}`}>전화번호</div>
          <input
            type="text"
            className={styles.inputBox}
            placeholder="010-0000-0000"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            maxLength="13"
          />
        </div>
        <div className={styles.addressWp}>
          <img src="/img/d_4.png" alt="4" />
          <div className={`${styles.address} ${styles.title}`}>배송 주소</div>
          <div className={styles.addressInputWp}>
            <div className={styles.row}>
              <input
                type="text"
                className={`${styles.inputBox} ${styles.zonecode}`}
                placeholder="우편번호"
                value={zoneCode}
                readOnly
              />
              <div className={styles.postalCodeBtn} onClick={openPostCode}>
                우편번호 찾기
              </div>
              <div id="popupDom">
                {isPopupOpen && (
                  <PopupDom>
                    <PopupPostCode
                      onClose={closePostCode}
                      onSelect={handlePostCodeSelection}
                    />
                  </PopupDom>
                )}
              </div>
            </div>
            <div className={styles.row}>
              <input
                type="text"
                className={`${styles.inputBox} ${styles.postalAddress}`}
                placeholder="주소"
                value={postalAddress}
                readOnly
              />
            </div>
            <div className={styles.row}>
              <input
                type="text"
                className={styles.inputBox}
                placeholder="상세 주소 입력"
                value={detailAddress}
                onChange={(e) => setDetailAddress(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={styles.accountWp}>
          <img src="/img/d_5.png" alt="5" />
          <div className={`${styles.refundAccount} ${styles.title}`}>
            환불 계좌
          </div>
          <input type="text" className={styles.bank} placeholder="은행명" />
          <input
            type="text"
            className={styles.account}
            placeholder="계좌번호"
          />
          <input type="text" className={styles.owner} placeholder="예금주" />
        </div>
      </div>{" "}
      <div
        className={styles.backBtn}
        style={{ zIndex: "100" }}
        onClick={GoBack}
      >
        이전
      </div>
      <div
        className={styles.deliBtn}
        style={{ zIndex: "100" }}
        onClick={GoToNext}
      >
        결제 및 배송 신청
      </div>
    </div>
  );
}

export default DeliveryInfo;
