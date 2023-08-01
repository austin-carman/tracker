/* eslint-disable react/prop-types */
const Card = ({ job, setJobDetails }) => {
  const handleClick = (job) => {
    setJobDetails(job);
  };

  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

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
      <span className="location">{job.location}</span>
      <span className="date">{job.lastStatusChange}</span>
    </div>
  );
};

export default Card;
