import HeroSection from "./component/heroSection/heroSectn";
import kaabaImg from "./component/images/kaaba.jpg";
import "./App.css";
import HomePageSections from "../src/component/homePageSections/homePageSections";
import NavBar from "./component/navBar/navBar";
import { Route, Routes } from "react-router-dom";
import Counter from "./component/counter/counter";
import Mushaf from "./component/quraan/quraan";
import AzkarElSalah from "./component/azkarElSalah/azkarElSalah";
import AzkarElmasa from "./component/azkarElmasa/azkarElmasa";
import Hadiths from "./component/Hadiths/Hadiths";
import AzkarLinks from "./component/hadithsLinks/hadithsLinks";
import AzkarElNoom from "./component/azkarElNoom/azkarElNoom";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${kaabaImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePageSections />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/Mushaf" element={<Mushaf />} />
        <Route path="/AzkarElSalah" element={<AzkarElSalah />} />
        <Route path="/AzkarElmasa" element={<AzkarElmasa />} />
        <Route path="/Hadiths" element={<Hadiths />} />
        <Route path="/AzkarElNoom" element={<AzkarElNoom />} />
        <Route path="/AzkarLinks" element={<AzkarLinks />} />



      </Routes>
    </div>
  );
}

export default App;
