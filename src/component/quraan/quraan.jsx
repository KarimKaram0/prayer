import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mushaf.css";

export default function Mushaf() {
  const [pages, setPages] = useState({});
  const [currentAudio, setCurrentAudio] = useState(null);

  // تشغيل الصوت
  const playAudio = async (ayahKey) => {
    try {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }

      const res = await fetch(
        `https://api.alquran.cloud/v1/ayah/${ayahKey}/ar.alafasy`
      );
      const data = await res.json();

      const audio = new Audio(data.data.audio);
      audio.play();
      setCurrentAudio(audio);
    } catch (err) {
      console.error("Audio error:", err);
    }
  };

  // تحميل صفحة واحدة
  const loadPage = async (pageNumber) => {
    if (pages[pageNumber]) return; // متحملتش قبل كده

    try {
      const res = await fetch(
        `https://api.alquran.cloud/v1/page/${pageNumber}/quran-uthmani`
      );
      const data = await res.json();

      setPages((prev) => ({
        ...prev,
        [pageNumber]: {
          number: pageNumber,
          ayahs: data.data.ayahs,
          juz: data.data.ayahs[0].juz,
          hizb: data.data.ayahs[0].hizbQuarter,
        },
      }));
    } catch (err) {
      console.error("Page load error:", err);
    }
  };

  // أول ما يفتح يحمل الصفحة الأولى
  useEffect(() => {
    loadPage(1);
  }, []);

  return (
    <div className="d-flex justify-content-center my-4">
      <Swiper
        spaceBetween={30}
        
        modules={[Pagination]}
        slidesPerView={1}
        initialSlide={0}
        onSlideChange={(swiper) => loadPage(swiper.activeIndex + 1)} // +1 عشان الصفحات تبدأ من 1
        className="mushaf-container shadow-lg"
      >
        {Array.from({ length: 604 }, (_, i) => i + 1).map((pageNumber) => (
          <SwiperSlide key={pageNumber}>
            {pages[pageNumber] ? (
              <div className="page d-flex flex-column justify-content-between">
                {/* الهيدر */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="juz-hizb">
                    جزء {pages[pageNumber].juz} - حزب {pages[pageNumber].hizb}
                  </span>
                  <h2 className="sura-name">
                    {pages[pageNumber].ayahs[0].surah.name}
                  </h2>
                  <span></span>
                </div>

                {/* الآيات */}
                <div className="ayahs text-end">
                  {pages[pageNumber].ayahs.map((ayah) => (
                    <span
                      key={ayah.number}
                      className="ayah"
                      onClick={() => playAudio(ayah.number)}
                    >
                      {ayah.text}{" "}
                      <span className="ayah-num">﴿{ayah.numberInSurah}﴾</span>
                    </span>
                  ))}
                </div>

                {/* رقم الصفحة */}
                <div className="page-number text-center">
                  {pages[pageNumber].number}
                </div>
              </div>
            ) : (
              <div className="page d-flex justify-content-center align-items-center">
                <span>... جاري التحميل</span>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
