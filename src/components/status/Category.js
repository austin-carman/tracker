/* eslint-disable react/prop-types */
import Card from "./Card";

const Category = ({ jobs, title, setJobDetails }) => {
  const allowDrop = (e) => {
    e.preventDefault();
  };

  const drop = (e) => {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.currentTarget.appendChild(document.getElementById(data));
  };

  return (
    <div className="column" onDrop={drop} onDragOver={allowDrop}>
      <h3>{title}</h3>
      <div>
        {jobs.map((job) => {
          return (
            <Card key={job.jobId} job={job} setJobDetails={setJobDetails} />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
