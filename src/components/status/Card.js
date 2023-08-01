/* eslint-disable react/prop-types */
const Card = ({ job, setJobDetails }) => {
  const handleClick = (job) => {
    setJobDetails(job);
  };

  const drag = (e) => {
    e.dataTransfer.setData("text", e.target.id);
  };

  return (
    <div
      key={job.jobId}
      id={job.jobId}
      className="job-card"
      onClick={() => handleClick(job)}
      style={{
        fontSize: 25,
        fontWeight: "bold",
        cursor: "move",
      }}
      draggable={true}
      onDragStart={drag}
    >
      <h4>{job.title}</h4>
      <h5 className="company">{job.company}</h5>
      <h6 className="location">{job.location}</h6>
      <h6 className="date">{job.dateOfLastStatusUpdate}</h6>
    </div>
  );
};

export default Card;
