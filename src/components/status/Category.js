/* eslint-disable react/prop-types */
import Card from "./Card";
import { categoryNames, statusOptions } from "../../data/data";

const Category = ({ jobs, setJobs, categoryJobs, title, setJobDetails }) => {
  const allowDrop = (e) => {
    e.preventDefault();
  };

  const drop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("jobId");
    // change job status for job that was moved
    const updatedJobs = jobs.map((job) => {
      if (job.jobId == id) {
        job.status = e.currentTarget.id;
        // update job.dateOfLastStatusUpdate
        const date = new Date();
        const localDateString = date.toLocaleDateString();
        job.dateOfLastStatusUpdate = localDateString;
      }
      return job;
    });

    setJobs(updatedJobs);
  };

  const determineId = () => {
    switch (title) {
      case categoryNames.interested:
        return statusOptions[0];
      case categoryNames.applied:
        return statusOptions[1];
      case categoryNames.reachedOut:
        return statusOptions[2];
      case categoryNames.interview:
        return statusOptions[3];
      case categoryNames.offer:
        return statusOptions[4];
      case categoryNames.notMovingForward:
        return statusOptions[5];
    }
  };

  const divId = determineId();

  return (
    <div id={divId} className="column" onDrop={drop} onDragOver={allowDrop}>
      <h2 className="category-label">{title}</h2>
      <div>
        {categoryJobs.map((job) => {
          return (
            <Card key={job.jobId} job={job} setJobDetails={setJobDetails} />
          );
        })}
      </div>
    </div>
  );
};

export default Category;
