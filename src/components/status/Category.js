import Card from "./Card";

/* eslint-disable react/prop-types */
const Category = ({ jobs, title, setJobDetails }) => {
  return (
    <div className="column column-1">
      <h3>{title}</h3>
      {jobs.map((job) => {
        return <Card key={job.jobId} job={job} setJobDetails={setJobDetails} />;
        // <div
        //   key={job.jobId}
        //   className="job-card"
        //   onClick={() => handleClick(job)}
        // >
        //   <h4>{job.title}</h4>
        //   <span className="location">{job.location}</span>
        //   <span className="date">{job.lastStatusChange}</span>
        // </div>
      })}
    </div>
  );
};

export default Category;
