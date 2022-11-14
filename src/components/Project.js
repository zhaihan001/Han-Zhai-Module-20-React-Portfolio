import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Project({ projects }) {
  return (
    <CardGroup>
      <div className="cardContainer">
        {projects.map((project) => (
          <Card className="cardBody">
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + project.image}
            />
            <Card.Body>
              <Card.Title>
                <a href={project.githubRepo}>{project.title}</a>
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
