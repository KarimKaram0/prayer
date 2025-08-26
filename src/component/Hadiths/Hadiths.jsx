import { useState, useEffect, lazy } from "react";
import Counter from "../counter/counter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import "../Hadiths/hadiths.css"

export default function Hadiths() {
  const [azkar, setAzkar] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://ahegazy.github.io/muslimKit/json/azkar_sabah.json");
        const data = await res.json();
        setAzkar(data.content);
        setTitle(data.title);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };
    getData();
  }, []);

  return (
    <div   className="cards" >
      <h2 className="text-center mb-3">{title}</h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {azkar.map((zekr, index) => (
          <SwiperSlide  className="slid" key={index}>
            <div className="card text-center p-3">
              <div className="card-body">
                <h5 className="card-title">{zekr.zekr}</h5>
                {zekr.bless && <p className="card-text">{zekr.bless}</p>}
                <h3>التكرار: {zekr.repeat}</h3>
                <Counter />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
