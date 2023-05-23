/* eslint-disable react/prop-types */
const Interested = ({ jobs }) => {
  return (
    <div>
      <div className="column column-1">Interested</div>
      {jobs.map((job) => {
        return (
          <div key={job.jobId}>
            <div>{job.title}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Interested;
