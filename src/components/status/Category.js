/* eslint-disable react/prop-types */
import Card from "./Card";

const Category = ({ jobs, title, setJobDetails }) => {
  function allowDrop(ev) {
    ev.preventDefault();
  }

  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log("data: ", data, "id", data.id);
    ev.target.appendChild(document.getElementById(data));
  }

  return (
    <div
      className="column column-1"
      onDrop={drop}
      onDragOver={allowDrop}
      style={{
        backgroundColor: "red",
        width: "90%",
        height: "200%",
        border: "1px solid black",
      }}
    >
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
