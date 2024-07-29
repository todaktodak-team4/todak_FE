import React, { useEffect, useState } from "react";
import { loadTossPayments } from "@tosspayments/tosspayments-sdk";
import styles from "../css/StyledCheckoutPage.module.css";

const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm"; // Replace with your client key
const customerKey = "VQMfaA0KTAWJ8hFAOE9PL"; // Replace with your customer key

const CheckoutPage = ({
  amount: initialAmount = { currency: "KRW", value: 1 }, // 기본값 설정
  orderName,
  onClose,
  customerName,
  customerMobilePhone,
  postalAddress,
  detailAddress,
}) => {
  const [amount, setAmount] = useState(initialAmount);
  const [ready, setReady] = useState(false);
  const [widgets, setWidgets] = useState(null);
  const [agreementChecked, setAgreementChecked] = useState(false);
  console.log(
    amount, // 기본값 설정
    orderName,
    onClose,
    customerName,
    customerMobilePhone,
    postalAddress,
    detailAddress
  );
  useEffect(() => {
    async function fetchPaymentWidgets() {
      try {
        const tossPayments = await loadTossPayments(clientKey);
        const widgets = tossPayments.widgets({ customerKey });
        setWidgets(widgets);
      } catch (error) {
        console.error("Failed to initialize Toss Payments:", error);
      }
    }

    fetchPaymentWidgets();
  }, [clientKey, customerKey]);

  useEffect(() => {
    async function renderPaymentWidgets() {
      if (!widgets) return;

      try {
        // Ensure amount is a valid positive value
        const validAmount = {
          currency: amount.currency || "KRW",
          value: Math.max(Number(amount.value), 1), // Ensure the value is at least 1
        };

        await widgets.setAmount(validAmount);

        await Promise.all([
          widgets.renderPaymentMethods({
            selector: "#payment-method",
            variantKey: "DEFAULT",
          }),
          widgets.renderAgreement({
            selector: "#agreement",
            variantKey: "AGREEMENT",
          }),
        ]);

        setReady(true);
      } catch (error) {
        console.error("Failed to render payment widgets:", error);
      }
    }

    renderPaymentWidgets();
  }, [widgets, amount]);

  useEffect(() => {
    if (widgets) {
      const validAmount = {
        currency: amount.currency || "KRW",
        value: Math.max(Number(amount.value), 1), // Ensure the value is at least 1
      };
      widgets.setAmount(validAmount);
    }
  }, [widgets, amount]);

  const handleAgreementChange = (event) => {
    setAgreementChecked(event.target.checked);
  };

  const handleCouponChange = (event) => {
    const couponApplied = event.target.checked;
    const newAmountValue = couponApplied
      ? Math.max(initialAmount.value - 5000, 1) // Ensure the value is at least 1
      : initialAmount.value;
    setAmount({ currency: initialAmount.currency, value: newAmountValue });
  };

  const handlePayment = async () => {
    if (!widgets) return;
    try {
      await widgets.requestPayment({
        orderId: `order_${Date.now()}`,
        orderName,
        successUrl: window.location.origin + "/success",
        failUrl: window.location.origin + "/fail",
        customerName,
        customerMobilePhone,
        postalAddress,
        detailAddress,
      });
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  return (
    <div className={styles.checkoutModal}>
      <div className={styles.checkoutModalContent}>
        <span className={styles.closeBtn} onClick={onClose}>
          <img src="/img/closeBtn.png" alt="Close" />
        </span>
        <h2>결제 정보</h2>
        <div className={styles.infoSection}>
          <h3>주문 정보</h3>
          <p className={styles.info}>
            <strong>상품명:</strong> {orderName}
          </p>
          <p className={styles.info}>
            <strong>금액:</strong>{" "}
            {amount.value ? amount.value.toLocaleString() : "정보 없음"} 원
          </p>
        </div>
        <div className={styles.infoSection}>
          <h3>주문자 정보</h3>
          <p className={styles.info}>
            <strong>주문자:</strong> {customerName}
          </p>
          <p className={styles.info}>
            <strong>전화번호:</strong> {customerMobilePhone}
          </p>
        </div>
        <div className={styles.infoSection}>
          <h3>배송지</h3>
          <p className={styles.info}>
            {postalAddress} {detailAddress}
          </p>
        </div>
        <div id="payment-method" className={styles.paymentMethod}></div>
        <div id="agreement" className={styles.agreement}></div>
        <div className={styles.agreementSection}>
          <label htmlFor="agreement-checkbox">
            <input
              id="agreement-checkbox"
              type="checkbox"
              checked={agreementChecked}
              onChange={handleAgreementChange}
            />
            <span>약관에 동의합니다.</span>
          </label>
        </div>
        <div className={styles.couponSection}>
          <label htmlFor="coupon-box">
            <input
              id="coupon-box"
              type="checkbox"
              disabled={!ready}
              onChange={handleCouponChange}
            />
            <span>5,000원 쿠폰 적용</span>
          </label>
        </div>
        <button
          className={`${styles.payBtn} ${styles.button}`}
          disabled={!ready}
          onClick={async () => {
            try {
              // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
              // 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
              // 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.
              await widgets.requestPayment({
                orderId: "VjzlnSxOGeEygywPKHwmD",
                orderName: "토스 티셔츠 외 2건",
                successUrl: window.location.origin + "/success",
                failUrl: window.location.origin + "/fail",
                customerEmail: "customer123@gmail.com",
                customerName: "김토스",
                customerMobilePhone: "01012341234",
              });
            } catch (error) {
              // 에러 처리하기
              console.error(error);
              console.log(
                amount,
                orderName,
                onClose,
                customerName,
                customerMobilePhone,
                postalAddress,
                detailAddress
              );
            }
          }}
        >
          결제하기
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
