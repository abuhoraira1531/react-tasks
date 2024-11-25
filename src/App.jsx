import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Pakeges from "./components/Pakeges/Pakeges";
import Teams from "./components/Teams/Teams";

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
      <Teams></Teams>
    </>
  );
}

export default App;
