import "./Section.css";


export default function Section(props) {

  return (
    
        <div className="section-card">
        <div className="section-card-image-container">
          <img src={'https:' + props.props.fields.coverImage.fields.file.url} alt="screencap of project" className="section-card-image"/>
          </div>
          <div className="section-card-title">
          {props.props.fields.name}
          </div>  
          <hr/>
          <div className="section-card-details">
          {props.props.fields.slug}
          </div>
        </div>
    )
}