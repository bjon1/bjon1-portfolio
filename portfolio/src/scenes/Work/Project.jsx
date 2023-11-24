

const Project = ({ name, description, image, skillsUsed }) => {

    return (
        <div className="project">
            <div className="project-image">
                <img src={image} alt={name} />
            </div>
            <div className="project-name">
                <h2>{name}</h2>
            </div>
            <div className="project-description">
                <p>{description}</p>
                <p>{skillsUsed}</p>
            </div>
        </div>
    )

}

export default Project