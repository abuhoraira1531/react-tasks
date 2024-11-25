import "./Teams.css";
import CoverImg1 from "../../assets/user-cover-1.png";
import CoverImg2 from "../../assets/user-cover-2.png";
import CoverImg3 from "../../assets/user-cover-3.png";
import CoverImg4 from "../../assets/user-cover-4.png";
import Team from "../Team/Team";

const Teams = () => {
  return (
    <div>
      <div className="teams-description">
        <h2>Team</h2>
        <p>
          Problems trying to resolve the conflict between <br /> the two major
          realms to classical physics.
        </p>
      </div>
      <div className="teams">
        <Team
          img={CoverImg1}
          name="Julian James"
          profession="Content Creator"
        ></Team>
        <Team
          img={CoverImg2}
          name="Henry Otamn"
          profession="Web Developer"
        ></Team>
        <Team
          img={CoverImg3}
          name="William Selena"
          profession="Digital Marketer"
        ></Team>
        <Team
          img={CoverImg4}
          name="Osker Hope"
          profession="Social Worker"
        ></Team>
      </div>
    </div>
  );
};

export default Teams;
