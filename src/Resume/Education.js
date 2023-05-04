import "./Main.css";
import { format, parseISO } from "date-fns";

function Education(props) {
  return (
    <div className="education">
      <div className="company">{props.props.fields.educationName}</div>
      <div className="title">{props.props.fields.courseType}</div>
      <div className="date-row">
        <div className="date">
          {format(parseISO(props.props.fields.startDate), "MMMM yyyy")}
        </div>
        <div className="date">through</div>
        <div className="date">
          {!props.props.fields.endDate
            ? "present"
            : format(parseISO(props.props.fields.endDate), "MMMM yyyy")}
        </div>
      </div>
    </div>
  );
}

export default Education;
