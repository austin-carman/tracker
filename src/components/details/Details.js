import { useState } from "react";

/* eslint-disable react/prop-types */
const Details = ({ jobs, setJobs, jobDetails, setJobDetails }) => {
  const [job, setJob] = useState(jobDetails);
  const [isEditing, setIsEditing] = useState({
    title: false,
    company: false,
    location: false,
    postUrl: false,
    description: false,
    notes: false,
  });
  const [body] = document.getElementsByTagName("body");

  body.style.backgroundColor = "grey";

  const handleCloseDetails = () => {
    body.style.backgroundColor = "white";
    setJobDetails(null);
  };

  const handleSaveDetails = () => {
    // mock API ....
    const updatedJobs = jobs.map((j) => {
      if (j.jobId === job.jobId) {
        return job;
      }
      return j;
    });
    setJobs(updatedJobs);
    handleCloseDetails();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleStartEdit = (label) => {
    setIsEditing({ ...isEditing, [label]: true });
  };

  return (
    <div className="details-container">
      <div className="editable-details-container">
        {isEditing.title ? (
          <input name="title" value={job.title} onChange={handleChange} />
        ) : (
          <>
            <h2>{job.title}</h2>
            <button
              className="edit-button"
              onClick={() => handleStartEdit("title")}
            >
              Edit
            </button>
          </>
        )}
      </div>
      <div>
        <button onClick={() => handleStartEdit("company")}>Edit</button>
        <h2>{job.company}</h2>
      </div>
      <h3>{job.location}</h3>
      <a href={job.postUrl}>
        <h3>View job post</h3>
      </a>
      {/* need to add value from state = status */}
      <select>
        <option>Interested</option>
        <option>Applied</option>
        <option>Reached Out</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Not Moving Forward</option>
      </select>
      <span>{job.dateOfLastStatusUpdate}</span>
      <h3>Description</h3>
      <p>{job.description}</p>
      <h3>Notes</h3>
      <p>{job.notes}</p>
      <p>Date Added: {job.dateAdded}</p>
      <button onClick={handleCloseDetails}>Cancel</button>
      <button onClick={handleSaveDetails}>Save</button>
    </div>
  );
};

export default Details;
