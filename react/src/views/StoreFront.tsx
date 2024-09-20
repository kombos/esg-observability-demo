/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { QRCodeSVG } from "qrcode.react";
import { Suspense } from "react";
import { useNavigate } from "react-router-dom";

export default function StoreFront() {
  const navigate = useNavigate();

  return (
    <div className="am-esg-storefront">
      <img src="/media/qr_bg.png" alt="dummy" />
      <Suspense fallback={"Loading..."}>
        <div className="qr-code" role="button" onClick={() => navigate("/productQR")}>
          <QRCodeSVG width="100%" height="100%" value={"/productQR"} />
        </div>
      </Suspense>
    </div>
  );
}
