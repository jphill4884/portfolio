import "./Section.css";


export default function Section(props) {

console.log('https:' + props.props.fields.coverImage.fields.file.url)

  return (
    
        <div className="section-card">
          <img src={'https:' + props.props.fields.coverImage.fields.file.url} alt="screencap of project" />
          <div className="section-card-title">
          {props.props.fields.name}
          </div>  
          <div className="section-card-details">
          {props.props.fields.description}
          </div>
        </div>
    )
}