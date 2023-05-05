

function ProjectImage(props){

    return (
        <div className="project-image-card">
        <img src={"https:" + props.props.fields.file.url} alt="screencap of project" className="project-image-sm"/>
        <div className="project-image-description" >{props.props.fields.description}</div>
        </div>
    )
}

export default ProjectImage;