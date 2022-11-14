import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Project({ projects }) {
  return (
    <CardGroup>
      <div className="cardContainer">
        {projects.map((project) => (
          <Card className="cardBody flex-row">
            <Card.Img
              className="card-img-left"
              src={process.env.PUBLIC_URL + project.image}
            />
            <Card.Body>
              <Card.Title className="cardTitle">
                <a href={project.githubRepo} target="_blank" rel="noreferrer">
                  {project.title}
                </a>
              </Card.Title>
              <Card.Text>{project.summary}</Card.Text>
              <Card.Text>
                Programming Languages Used:
                {project.programmingLanguages}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </CardGroup>
  );
}

export default Project;
