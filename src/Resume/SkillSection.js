import "./Main.css";

function SkillSection(props) {
    
  return (
    <div className="job">
      <div className="title">
        {props.props.fields.name}
      </div>
      <div className="date-row">
        <div className="date">
          {!props.props.fields.subBullet
            ? null
            : props.props.fields.subBullet}
        </div>
      </div>
    </div>
  );
}

export default SkillSection;