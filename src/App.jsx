import HeroSection from "./component/heroSection/heroSectn";
import kaabaImg from "./component/images/kaaba.jpg";
import "./App.css";
import HomePageSections from "../src/component/homePageSections/homePageSections";
import NavBar from "./component/navBar/navBar";
import { Route, Routes } from "react-router-dom";
import Counter from "./component/counter/counter";

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
      </Routes>
    </div>
  );
}

export default App;
