import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mushaf.css";

export default function Mushaf() {
  const [pages, setPages] = useState([]);
  const [currentAudio, setCurrentAudio] = useState(null);

  // تشغيل الصوت
  const playAudio = async (ayahKey) => {
    try {
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }

      // API رسمي لصوتيات القرآن (العفاسي)
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

  // تحميل بيانات الصفحات
  useEffect(() => {
    const getData = async () => {
      let allPages = [];
      for (let i = 1; i <= 10; i++) {
        const res = await fetch(
          `https://api.alquran.cloud/v1/page/${i}/quran-uthmani`
        );
        const data = await res.json();
        allPages.push({
          number: i,
          ayahs: data.data.ayahs,
          juz: data.data.ayahs[0].juz,
          hizb: data.data.ayahs[0].hizbQuarter,
        });
      }
      setPages(allPages);
    };
    getData();
  }, []);

  return (
    <div className="d-flex justify-content-center my-4">
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        slidesPerView={1}
        className="mushaf-container shadow-lg"
      >
        {pages.map((page) => (
          <SwiperSlide key={page.number}>
            <div className="page d-flex flex-column justify-content-between">
              
              {/* الهيدر */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="juz-hizb">
                  جزء {page.juz} - حزب {page.hizb}
                </span>
                <h2 className="sura-name">{page.ayahs[0].surah.name}</h2>
                <span></span>
              </div>

              {/* الآيات */}
              <div className="ayahs text-end">
                {page.ayahs.map((ayah) => (
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
              <div className="page-number text-center">{page.number}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
