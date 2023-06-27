/* eslint-disable react/prop-types */

const Category = ({ jobs, title, setJobDetails }) => {
  const handleClick = (job) => {
    setJobDetails(job);
  };

  return (
    <div className="column column-1">
      <h3>{title}</h3>
      {jobs.map((job) => {
        return (
          <div
            key={job.jobId}
            className="job-card"
            onClick={() => handleClick(job)}
          >
            <h4>{job.title}</h4>
            <span className="location">{job.location}</span>
            <span className="date">{job.lastStatusChange}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
