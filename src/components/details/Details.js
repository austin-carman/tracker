/* eslint-disable react/prop-types */
import { useState } from "react";

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
  // const [html] = document.getElementsByTagName("html");

  // html.style.filter = "blur(5px)";

  const handleCloseDetails = () => {
    // html.style.filter = "blur(0px)";
    setJobDetails(null);
  };

  const handleSaveDetails = () => {
    const updatedJobs = jobs.map((currentJob) => {
      if (currentJob.jobId === job.jobId) {
        const date = new Date();
        const localDateString = date.toLocaleDateString();
        job.dateOfLastStatusUpdate = localDateString;
        return job;
      }
      return currentJob;
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
      {/* Job Title */}
      <div className="editable-details-container">
        {isEditing.title ? (
          <div>
            <h6>Title:&nbsp;</h6>
            <input
              className="h2-input"
              type="text"
              name="title"
              value={job.title}
              onChange={handleChange}
            />
          </div>
        ) : (
          <>
            <h2 id="details-title">{job.title}</h2>
            <button
              className="edit-button"
              onClick={() => handleStartEdit("title")}
            >
              Edit
            </button>
          </>
        )}
      </div>
      {/* Company name */}
      <div className="editable-details-container">
        {isEditing.company ? (
          <div>
            <h6>Company:&nbsp;</h6>
            <input
              className="h3-input"
              name="company"
              value={job.company}
              onChange={handleChange}
            />
          </div>
        ) : (
          <>
            <h3>{job.company}</h3>
            <button
              className="edit-button"
              onClick={() => handleStartEdit("company")}
            >
              Edit
            </button>
          </>
        )}
      </div>
      {/* Location */}
      <div className="editable-details-container">
        {isEditing.location ? (
          <div>
            <h6>Location:&nbsp;</h6>
            <input
              className="h3-input"
              name="location"
              value={job.location}
              onChange={handleChange}
            />
          </div>
        ) : (
          <>
            <h3>{job.location}</h3>
            <button
              className="edit-button"
              onClick={() => handleStartEdit("location")}
            >
              Edit
            </button>
          </>
        )}
      </div>
      {/* Posting URL */}
      <div className="editable-details-container">
        {isEditing.postUrl ? (
          <div>
            <h6>Posting Url:&nbsp;</h6>
            <input
              className="h3-input"
              name="postUrl"
              value={job.postUrl}
              onChange={handleChange}
            />
          </div>
        ) : (
          <>
            <a href={job.postUrl} target="_blank" rel="noreferrer">
              <h3>View job post</h3>
            </a>
            <button
              className="edit-button"
              onClick={() => handleStartEdit("postUrl")}
            >
              Edit
            </button>
          </>
        )}
      </div>
      {/* Status/Category */}
      {/* need to add value from state = status */}
      <div className="select-status">
        <h4>
          Status:{" "}
          <span id="last-updated-date">
            Last updated {job.dateOfLastStatusUpdate}
          </span>
        </h4>
        <select name="status" value={job.status} onChange={handleChange}>
          <option value={"interested"}>Interested</option>
          <option value={"applied"}>Applied</option>
          <option value={"reachedOut"}>Reached Out</option>
          <option value={"interview"}>Interview</option>
          <option value={"offer"}>Offer</option>
          <option value={"notMovingForward"}>Not Moving Forward</option>
        </select>
      </div>
      {/* Description */}
      <div className="editable-details-container longer-text-container description-text-container">
        {isEditing.description ? (
          <>
            <h4>Description</h4>
            <textarea
              className="h4-input longer-text-input"
              name="description"
              value={job.description}
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <div id="label-edit-container">
              <h4>Description</h4>
              <button
                className="edit-button"
                onClick={() => handleStartEdit("description")}
              >
                Edit
              </button>
            </div>
            <p className="longer-text">{job.description}</p>
          </>
        )}
      </div>
      {/* Notes */}
      <div className="editable-details-container longer-text-container">
        {isEditing.notes ? (
          <>
            <h4>Notes</h4>
            <textarea
              className="h4-input longer-text-input"
              name="notes"
              value={job.notes}
              onChange={handleChange}
            />
          </>
        ) : (
          <>
            <div id="label-edit-container">
              <h4>Notes</h4>
              <button
                className="edit-button"
                onClick={() => handleStartEdit("notes")}
              >
                Edit
              </button>
            </div>
            <p className="longer-text">{job.notes}</p>
          </>
        )}
      </div>
      <div className="button-group">
        <button onClick={handleCloseDetails}>Cancel</button>
        {/* Date Added */}
        <span className="date-added">Date Added: {job.dateAdded}</span>
        <button className="save-button" onClick={handleSaveDetails}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Details;
