/* eslint-disable no-unused-vars */
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
    console.log("save details");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  console.log("job: ", job);

  const handleStartEdit = (label) => {
    console.log("edit: ", label);
    setIsEditing({ ...isEditing, [label]: true });
  };

  console.log(isEditing);

  return (
    <div className="details-container">
      <div>
        <button onClick={() => handleStartEdit("title")}>Edit</button>
        {isEditing.title ? (
          <input name="title" value={job.title} onChange={handleChange} />
        ) : (
          <h2>{job.title}</h2>
        )}
      </div>
      <div>
        <button onClick={() => handleStartEdit("company")}>Edit</button>
        <h2>{job.company}</h2>
      </div>
      <h3>{job.location}</h3>
      <h3>{job.postUrl}</h3>
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
