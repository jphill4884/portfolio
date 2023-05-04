import "./Sidebar.css";
import Skillbar from "./Skillbar";

function Skill(props) {
  
return (
    <div className="skill">
      <div className="skill-name">{props.props.fields.skillName}</div>
      <div className="scale">{[...Array(props.props.fields.skillLevel)].map((e, i) => {return <Skillbar key={i} />})}</div>
    </div>
  );
}

export default Skill;