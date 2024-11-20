import "./Banner.css";
import CoverImage from "../../assets/hero-cover-1.png";

const Banner = () => {
  return (
    <div className="banner">
      <div>
        <p className="greeting">Welcome</p>
        <h2 className="banner-title">
          Best Learning <br /> Opportunites
        </h2>
        <p className="banner-description">
          Our goal is to make online <br /> education work for everyone
        </p>
        <div className="btns">
          <button className="btn-1">Join Us</button>
          <button className="btn-2">Learn More</button>
        </div>
      </div>
      <div className="banner-img">
        <img src={CoverImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
