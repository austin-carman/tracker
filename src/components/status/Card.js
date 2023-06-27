/* eslint-disable react/prop-types */
import { useDrag } from "react-dnd";

const Card = ({ job, setJobDetails }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const handleClick = (job) => {
    setJobDetails(job);
  };
  return (
    <div
      key={job.jobId}
      ref={drag}
      className="job-card"
      onClick={() => handleClick(job)}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold",
        cursor: "move",
      }}
    >
      <h4>{job.title}</h4>
      <span className="location">{job.location}</span>
      <span className="date">{job.lastStatusChange}</span>
    </div>
  );
};

export default Card;
