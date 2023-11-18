import Internships from "./assets/data/internship.json";
import Card from "./components/Card";
import Projects from "./assets/data/project.json";
import ProjectCard from "./components/ProjectCard";
import Education from "./assets/data/Education.json";
import "./App.css";

const App = () => {
  const blackText = "black-text";

  return (
    <>
      <div className={blackText}>
        <h1>
          <center>
            Hi there, this is very much still a work in progress, check back
            again soon!
          </center>
        </h1>
      </div>
      <div className={blackText}>
        <h1>
          <center>Education</center>
        </h1>
        <h3>
          {Education.School} {Education.Period}
        </h3>
        <p>{Education.Major}</p>
        <ul>
          {Education.Remarks.map((remark) => {
            return <li>{remark}</li>;
          })}
        </ul>
        <>
          {Education.Activity.map((activity) => {
            return (
              <div className={blackText}>
                <p>
                  {activity.ActivityName} {activity.ActivityDuration}
                </p>
                <ul>
                  {activity.ActivityRemarks.map((acitivtyRemark) => {
                    return <li>{acitivtyRemark}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </>
      </div>
      <div>
        <div className={blackText}>
          <h1>
            <center>Internship Experience</center>
          </h1>
        </div>
        {Internships &&
          Internships.map((row) => {
            return (
              <Card
                Title={row.Title}
                Period={row.Date}
                Details={row.Details}
                ImagePath={row.ImagePath}
                Skills={row.Skills}
              />
            );
          })}
      </div>
      <div className={blackText}>
        <h1>
          <center>Extra Curricular Activities</center>
        </h1>
      </div>
      {Projects &&
        Projects.map((entry) => {
          return (
            <ProjectCard
              Title={entry.Title}
              Period={entry.Date}
              Details={entry.Details}
              Skills={entry.Skills}
            />
          );
        })}
    </>
  );
};

export default App;
