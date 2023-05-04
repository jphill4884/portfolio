import "./Main.css";
import { format, parseISO } from "date-fns";

function Job(props) {

  
return (
    <div className="job">
      <div className="company">{props.props.fields.jobName}</div>
      <div className="title">{props.props.fields.jobTitle} | {props.props.fields.location}</div>
      <div className="date-row">
      <div className="date">{format(parseISO(props.props.fields.startDate), "MMMM yyyy")}</div>
      <div className="date">through</div>
      <div className="date">{!props.props.fields.endDate ? "present": format(parseISO(props.props.fields.endDate), "MMMM yyyy")}</div>
      </div>
      <div className="responsibilities">
        <ul>
          <li>{props.props.fields.responsibility1}</li>
          <li>{props.props.fields.responsibility2}</li>
          <li>{props.props.fields.responsibility3}</li>
          <li>{props.props.fields.responsibility4}</li>
        </ul>
      </div>
    </div>
  );
}

export default Job;