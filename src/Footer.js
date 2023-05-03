import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/jphill4884" target="_blank" rel="noreferrer">
        <img
          src={require("./img/oktocat.png")}
          alt="github logo"
          className="footer-image"
        />
      </a>
      <a href="https://www.linkedin.com/in/jkylephillips/" target="_blank" rel="noreferrer">
        <img
          src={require("./img/linkedin_2.jpg")}
          alt="linkedin logo"
          className="footer-image"
        />
      </a>
      <a href="https://www.facebook.com/kyle.phillips.31/" target="_blank" rel="noreferrer">
        <img
          src={require("./img/facebook_2.jpg")}
          alt="facebook logo"
          className="footer-image"
        />
      </a>
    </div>
  );
}
