import { FC } from "react";
import "./style.css";

const Footer: FC = () => {
  return (
    <>
      <div className="footer">
        <div className="contactBlock">
          <p>Mirjam Kroon-Hoekendijk </p>
          <p>Trainer en (team-)coach </p>
          <p>KvK 23083220 </p>
          <p>BTW NL 001192641B33</p>
        </div>
        <div className="contactBlock">
          <p>mirjam@kroontrainingadvies.com</p>
          <p>tel:06-53507815</p>
          <p>Adres: Dorpsweg 71 4223 ND Hoornaar (ZH)</p>
        </div>
        <div className="contactBlock">
          <p>LinkedIN</p>
          <p>linkeding</p>
        </div>
      </div>
      <div className="credentials">
        <p>Kibbeling Media</p>
      </div>
    </>
  );
};

export default Footer;
