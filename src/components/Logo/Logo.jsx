import Tilt from "react-parallax-tilt";

import brain from "./icons8-brain-100.png";
import "./Logo.styles.css";

const Logo = () => {
  return(
    <div className="logo">
      <Tilt className="tilt" trackOnWindow={false}>
        <div className="tilt-inner">
          <img className="tilt-image" alt="logo" src={brain} />
          <p>
            <a target="_blank" href="https://icons8.com/icon/48369/brain" rel="noreferrer">Brain</a> icon by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a>
          </p>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;