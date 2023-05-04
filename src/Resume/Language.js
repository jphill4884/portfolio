import React from "react";
import "./Sidebar.css";

function Language(props) {
  
return (
    <tr>
      <td className="col-one">{props.props.fields.languageName}</td>
      <td>|</td>
      <td>{props.props.fields.languageLevel}</td>
    </tr>
  );
}

export default Language;