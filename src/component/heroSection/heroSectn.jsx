import { useState, useEffect } from "react";
import "../heroSection/heroSection.css";
import Counter from "../counter/counter";
import { lazy } from "react";

// دالة تحويل 24→12
function formatTime24to12(time24) {
  if (!time24 || typeof time24 !== "string") return "-";
  let [hour, minute] = time24.split(":").map(Number);
  if (Number.isNaN(hour)) return "-";
  let suffix = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${(minute ?? 0).toString().padStart(2, "0")} ${suffix}`;
}

export default function HeroSection() {
  const [time, setTime] = useState(null);
  const [city, setCity] = useState("Cairo");
  const [date, setDate] = useState("");

  useEffect(() => {
    const getTime = async () => {
      const res = await fetch(
        `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Egypt&method=5`
      );
      const data = await res.json();
      setTime(data?.data?.timings || null);
    };

    getTime();
  }, [city]);

  useEffect(() => {
    const getDate = async () => {
      const res = await fetch(
        `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Egypt&method=5`
      );
      const data = await res.json();
      setDate(data.data.date);
    };
    getDate();
  }, [city]);

  return (
    <div onLoad={lazy} className="container mt-5 d-flex flex-column align-items-center">

      <div className="card w-50 mb-4 shadow-sm">
        <div className="card-body">
          <div className="input-group">
            <label className="input-group-text fw-bold">المدينة</label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="form-select border-primary shadow-sm"
            >
              <option value="Cairo">القاهرة</option>
              <option value="Alexandria">الإسكندرية</option>
              <option value="Giza">الجيزة</option>
              <option value="Aswan">أسوان</option>
            </select>
          </div>
        </div>
      </div>

      {/* جدول مواقيت الصلاة */}
      {!time ? (
        <div className="alert alert-info w-50 text-center shadow">جاري التحميل...</div>
      ) : (
        <div className="card w-75 shadow-lg border-0">
          <div className="card-header bg-success text-white text-center fw-bold fs-4">
            🕌 مواقيت الصلاة
          </div>

          <div className="card-body text-center">
            {/* التاريخ */}
            <h5 className="mb-4">
              {date ? (
                <>
                  <span className="badge bg-primary me-2">
                    {date.readable}
                  </span>
                  <span className="badge bg-warning text-dark">
                    {date.hijri?.date} هـ
                  </span>
                </>
              ) : (
                <span className="text-muted">جاري تحميل التاريخ...</span>
              )}
            </h5>

            {/* أوقات الصلاة */}
            <div className="row g-2 justify-content-center">
              <div className="col-6 col-md-2">
                <div className="p-2 bg-light rounded shadow-sm text-center">
                  <small className="fw-bold">الفجر</small> <br />
                  <span className="badge bg-info">
                    {formatTime24to12(time.Fajr)}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-2">
                <div className="p-2 bg-light rounded shadow-sm text-center">
                  <small className="fw-bold">الظهر</small> <br />
                  <span className="badge bg-info">
                    {formatTime24to12(time.Dhuhr)}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-2">
                <div className="p-2 bg-light rounded shadow-sm text-center">
                  <small className="fw-bold">العصر</small> <br />
                  <span className="badge bg-info">
                    {formatTime24to12(time.Asr)}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-2">
                <div className="p-2 bg-light rounded shadow-sm text-center">
                  <small className="fw-bold">المغرب</small> <br />
                  <span className="badge bg-info">
                    {formatTime24to12(time.Maghrib)}
                  </span>
                </div>
              </div>
              <div className="col-6 col-md-2">
                <div className="p-2 bg-light rounded shadow-sm text-center">
                  <small className="fw-bold">العشاء</small> <br />
                  <span className="badge bg-info">
                    {formatTime24to12(time.Isha)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
