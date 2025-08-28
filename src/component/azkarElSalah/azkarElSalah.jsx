import "../azkarElSalah/azkarElSalah.css"
import { useState, useEffect } from "react";
import Counter from "../counter/counter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function AzkarElSalah() {
  const [azkar, setAzkar] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://ahegazy.github.io/muslimKit/json/PostPrayer_azkar.json");
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
    <div className="azkar-container">
      <h2 className="azkar-title">{title}</h2>
      <Swiper
        grabCursor={true}
        slidesPerView={1}
        spaceBetween={20}
        className="mySwiper"
      >
        {azkar.map((zekr, index) => (
          <SwiperSlide className="slid" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{zekr.zekr}</h5>
                {zekr.bless && <p className="card-text">{zekr.bless}</p>}
                <p className="repeat">التكرار: {zekr.repeat}</p>
                <Counter />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
