import "./Card.css";

interface ProjectDetails {
  Title: string;
  Period: string;
  Details: string[];
  Skills: string[];
}

function ProjectCard({ Title, Period, Details, Skills }: ProjectDetails) {
  return (
    <>
      <section className="light">
        <div className="container py-4">
          <article className="postcard dark green">
            <div className="postcard__text">
              <h1 className="postcard__title green">
                <a href="#">{Title}</a>
              </h1>
              <div className="postcard__subtitle small">
                <i className="fas fa-calendar-alt mr-2"></i>
                {Period}
              </div>
              <div className="postcard__bar"></div>
              <div className="postcard__preview-txt">
                <ul>{Details && Details.map((entry) => <li>{entry}</li>)}</ul>
              </div>
              <ul className="postcard__tagbox">
                {Skills &&
                  Skills.map((skill) => (
                    <li className="tag__item play green">
                      <i className="fas fa-tag mr-2"></i>
                      {skill}
                    </li>
                  ))}
              </ul>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

export default ProjectCard;
