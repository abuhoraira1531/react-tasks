import "./Navbar.css";
import Vector from "../../assets/Vector.png";

const Navbar = () => {
  return (
    <nav>
      <ul className="items">
        <li className="brand">
          <a href="#">Brandname</a>
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div>
        <ul className="items">
          <li className="login">
            <a href="#">Login</a>
          </li>
          <li className="join">
            <a href="#">
              JOIN US <img src={Vector} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
