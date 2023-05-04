import "./Main.css";

function Mission(props) {

    return (
        <div className="mission-resume">
          {props.props.fields.missionStatement}
        </div>
      );
    }
    
    export default Mission;