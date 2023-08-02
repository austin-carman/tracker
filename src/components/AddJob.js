/* eslint-disable react/prop-types */
import { useState } from "react";
import { statusOptions, jobsData } from "../data/data";

const AddJob = ({ setIsAddJobOpen, jobs, setJobs }) => {
  const initialState = {
    title: "",
    company: "",
    location: "",
    postUrl: "",
    status: statusOptions[0],
    description: "",
    notes: "",
  };
  const [addForm, setAddForm] = useState(initialState);
  const [formError, setFormError] = useState(false);

  const handleClose = () => {
    setIsAddJobOpen(false);
  };

  const getDate = () => {
    const date = new Date();
    return date.toLocaleDateString();
  };

  const validateForm = () => {
    if (
      !addForm.title ||
      !addForm.company ||
      !addForm.location ||
      !addForm.postUrl
    ) {
      setFormError(true);
      return true;
    }
    return false;
  };

  const createNewJob = async (newJob) => {
    // Demonstration of API request
    // No backend endpoint/database exists so this is purely to
    // demonstrate knowledge of fetch() method and API requests
    try {
      // Mock api endpoint -> https://mockapi.io/
      // doesn't return any data but does return response
      const url = "https://64af0767c85640541d4e0eb8.mockapi.io/api/v1/messages";
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      });
      if (!response.ok) {
        // TODO: set error
        console.log("error");
        return;
      }
      // eslint-disable-next-line no-unused-vars
      const data = await response.json();
      // Would normally check data or use data from line above
      // but since it's coming from mockAPI it's useless data.
      // Instead I'm adding the argument "newJob" to the slice
      // of state from App.js (jobs) to "add" the new job.
      const updatedJobs = [...jobs, newJob];
      console.log("job was added: ", updatedJobs);
      setJobs(updatedJobs);
      handleClose();
      // TODO: set state to display success message
    } catch (err) {
      console.log("error: ", err);
    }
  };

  const handleClickSave = () => {
    // quick and dirty form validation -> definitely needs to be improved
    if (validateForm()) {
      return;
    }
    const date = getDate();
    // NOTE!!!!
    // because no database exists, we are using dummy data
    // from data.js file for our job list.
    // userID and jobId below are hard-coded values.
    // Normally, if a backend/database existed, the userId would come
    // from the API response after sending the user's sign-in
    // credentials while jobId would be created when inserting the new job
    // into the database.
    const newJob = {
      ...addForm,
      dateAdded: date,
      dateOfLastStatusUpdate: date,
      userId: 1,
      jobId: jobsData.length + 1,
    };
    createNewJob(newJob);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddForm({ ...addForm, [name]: value });
  };

  return (
    <div className="add-job-container">
      <h2>Add Job</h2>
      <div className="add-job-details">
        <h6>
          Title<span className="required-asterisk">*</span>
        </h6>
        <input name="title" value={addForm.title} onChange={handleChange} />
      </div>
      <div className="add-job-details">
        <h6>
          Company<span className="required-asterisk">*</span>
        </h6>
        <input name="company" value={addForm.company} onChange={handleChange} />
      </div>
      <div className="add-job-details">
        <h6>
          Location<span className="required-asterisk">*</span>
        </h6>
        <input
          name="location"
          value={addForm.location}
          onChange={handleChange}
        />
      </div>
      <div className="add-job-details">
        <h6>
          Post Url<span className="required-asterisk">*</span>
        </h6>
        <input name="postUrl" value={addForm.postUrl} onChange={handleChange} />
      </div>
      <div className="add-job-details">
        <h6>Status</h6>
        <select name="status" value={addForm.status} onChange={handleChange}>
          <option value={statusOptions[0]}>Interested</option>
          <option value={statusOptions[1]}>Applied</option>
          <option value={statusOptions[2]}>Reached Out</option>
          <option value={statusOptions[3]}>Interview</option>
          <option value={statusOptions[4]}>Offer</option>
          <option value={statusOptions[5]}>Not Moving Forward</option>
        </select>
      </div>
      <div className="add-job-details">
        <h6>Description</h6>
        <textarea
          name="description"
          value={addForm.description}
          onChange={handleChange}
        />
      </div>
      <div className="add-job-details">
        <h6>Notes</h6>
        <textarea name="notes" value={addForm.notes} onChange={handleChange} />
      </div>
      <div className="button-group">
        <button onClick={handleClose}>Cancel</button>
        {formError && <span>Please fill out all required fields (*)</span>}
        <button className="save-button" onClick={handleClickSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddJob;
