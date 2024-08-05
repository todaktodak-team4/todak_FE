import ReactDom from "react-dom";

const BACKEND_URL = "http://127.0.0.1:8000" || "http://3.38.125.151";

const PopupDom = ({ children }) => {
  const el = document.getElementById("popupDom");
  return ReactDom.createPortal(children, el);
};

export default PopupDom;
