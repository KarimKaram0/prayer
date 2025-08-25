import HeroSection from "../heroSection/heroSectn";
import kaabaImg from "../images/kaaba.jpg";
import Quraan from "../quraan/quraan";

export default function HomePageSections() {
  return (
    
    <div style={{backgroundImage: `url(${kaabaImg})`,backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", 
        width: "100%",
        display: "flex",
        flexDirection: "column",}}>
    <HeroSection/>
    
    </div>
  )
}
