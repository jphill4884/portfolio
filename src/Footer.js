import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <img src={require("./img/oktocat.png")} alt="github logo" className="footer-image"/>
      <img src={require("./img/linkedin_2.jpg")} alt="linkedin logo" className="footer-image"/>
      <img src={require("./img/facebook_2.jpg")} alt="facebook logo" className="footer-image"/>
    </div>
  );
}