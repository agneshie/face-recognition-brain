 import './Navigation.styles.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
  if (isSignedIn) {
    return(
      <nav className="nav">
        <p className="nav-link" onClick={() => onRouteChange("signin")}>Sign Out</p>
      </nav>
    );
  } else {
    return(
      <nav className="nav">
        <p className="nav-link" onClick={() => onRouteChange("signin")}>Sign In</p>
        <p className="nav-link" onClick={() => onRouteChange("register")}>Register</p>
      </nav>
    );
  }
}

export default Navigation;