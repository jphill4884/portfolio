import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "./NavBar.css";

export default function NavBar() {

  return (
    <div className="navbar">
      <Link to={"/"} className="navbar-link" >Home</Link>
      <HashLink smooth to="/#projects" className="navbar-link">Projects</HashLink>
      <HashLink smooth to="/#about-me" className="navbar-link">About Me</HashLink>
      <Link className="navbar-link" to={'/resume'}>Resume</Link>
    </div>
  );
}
