import { useState, useEffect } from "react";
import "../heroSection/heroSection.css"

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

  return (
    <div className="container mt-5 d-flex flex-column align-items-end">

      {/* اختيار المدينة */}
      <div className="card w-50 mb-4 shadow-sm">
        <div className="card-header text-center fw-bold">
          اختر <span className="text-primary">المدينة</span>
        </div>
        <div className="card-body">
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="form-select"
          >
            <option value="Cairo">القاهرة</option>
            <option value="Alexandria">الإسكندرية</option>
            <option value="Giza">الجيزة</option>
            <option value="Aswan">أسوان</option>
          </select>
        </div>
      </div>

      {/* جدول مواقيت الصلاة */}
      {!time ? (
        <div className="alert alert-info w-50 text-center shadow">جاري التحميل...</div>
      ) : (
        <div className="card w-50 shadow">
          <div className="card-header text-center fw-bold">
            مواقيت الصلاة
          </div>
          <div className="card-body p-0">
            <table className="table table-hover text-center mb-0">
              <thead className="table-light">
                <tr>
                  <th>الصلاة</th>
                  <th>الوقت</th>
                </tr>
              </thead>
              <tbody>
                <tr className="back">
                  <td>الفجر</td>
                  <td>{formatTime24to12(time.Fajr)}</td>
                </tr>
                <tr className="table-active duhr">
                  <td>الظهر</td>
                  <td>{formatTime24to12(time.Dhuhr)}</td>
                </tr>
                <tr className="duhr">
                  <td>العصر</td>
                  <td>{formatTime24to12(time.Asr)}</td>
                </tr>
                <tr className="maghrib">
                  <td>المغرب</td>
                  <td>{formatTime24to12(time.Maghrib)}</td>
                </tr>
                <tr className="night">
                  <td>العشاء</td>
                  <td>{formatTime24to12(time.Isha)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
