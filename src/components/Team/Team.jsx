import "./Team.css";

const Team = (props) => {
  const { img, name, profession, fbIcon } = props;
  return (
    <div className="team">
      {<img src={img} alt="" />}
      <h3>{name}</h3>
      <p>{profession}</p>
      <img src={fbIcon} alt="" />
    </div>
  );
};

export default Team;
