/* eslint-disable react/prop-types */
const Category = ({ jobs, title }) => {
  return (
    <div>
      <div className="column column-1">{title}</div>
      {jobs.map((job) => {
        return (
          <div key={job.jobId}>
            <div>{job.title}</div>
            <div>{job.location}</div>
            <div>Added: {job.lastStatusChange}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
