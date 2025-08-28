import { Link } from "react-router-dom";
import Sabah from "../images/sabah.jpg";
import masaa from "../images/masaa.jpg";
import salah from "../images/salah.jpg";
import sleep from "../images/sleep.png";


import "../hadithsLinks/hadithsLinks.css"
export default function AzkarLinks() {
  return (
    <div  className="azkar-container">
      <Link to="/Hadiths" className="azkar-card">
        <img src={Sabah} alt="أذكار الصباح" />
        <div className="azkar-text">أذكار الصباح</div>
      </Link>

      <Link to="/AzkarElmasa" className="azkar-card">
        <img src={masaa} alt="أذكار المساء" />
        <div className="azkar-text">أذكار المساء</div>
      </Link>

      <Link to="/AzkarElSalah" className="azkar-card">
        <img src={salah} alt="أذكار بعد الصلاة" />
        <div className="azkar-text">أذكار بعد الصلاة</div>
      </Link>

      <Link to="/AzkarElNoom" className="azkar-card">
        <img src={sleep} alt="أذكار بعد الصلاة" />
        <div className="azkar-text">أذكار قبل النوم</div>
      </Link>
    </div>
  );
}
