import "./Pakeges.css";
import Arrow from "../../assets/icon arrow-next.png";
import Vector2 from "../../assets/Vector3.png";
import Vector3 from "../../assets/Vector2.png";
const Pakeges = () => {
  return (
    <div className="pakeges">
      <div>
        <div className="line-1"></div>
        <h2 className="pakeges-title">Approdable Pakeges</h2>
        <p className="pakeges-description">
          Problem trying to resolve the conflict between <br /> the two major
          realms of Classical physics <br /> Newtonian mechanics
        </p>
        <button className="pakeges-btn">
          Learn More <img src={Arrow} alt="" />
        </button>
      </div>
      <div className="cards">
        <div className="card">
          <img src={Vector2} alt="edgegsdr" />
          <h3>Certified teacher</h3>
          <div className="line-2"></div>
          <p>
            The gradual <br /> accumulation of <br /> information about
          </p>
        </div>
        <div className="card">
          <img src={Vector3} alt="edgegsdr" />
          <h3>Expart instructions</h3>
          <div className="line-2"></div>
          <p>
            The gradual <br /> accumulation of <br /> information about
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pakeges;
