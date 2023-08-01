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
    // e.target.appendChild(document.getElementById(data));
  };

  return (
    <div
      className="column column-1"
      onDrop={drop}
      onDragOver={allowDrop}
      style={{ border: "1px solid red", height: "200%" }}
    >
      {/* style={{
        width: "90%",
        height: "200%",
        border: "1px solid black",
      }} */}
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
