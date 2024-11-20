import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Pakeges from "./components/Pakeges/Pakeges";

function App() {
  return (
    <>
      <div className="header">
        <div className="header-sections">
          <Navbar />
          <Banner />
        </div>
      </div>
      <Pakeges />
    </>
  );
}

export default App;
