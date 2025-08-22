import "./App.css";
import HomePageSections from "./component/homePageSections/homePageSections";
import NavBar from "./component/navBar/navBar";
import { Route, Routes, Navigate } from "react-router-dom";
import Counter from "./component/counter/counter";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePageSections />} />
        
        <Route path="/counter" element={<Counter />} />
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
