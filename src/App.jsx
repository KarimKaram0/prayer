import HeroSection from "./component/heroSection/heroSectn";
import kaabaImg from "./component/images/kaaba.jpg";
import "./App.css";

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
      
      <HeroSection />
    </div>
  );
}

export default App;
