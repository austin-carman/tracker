/* eslint-disable react/prop-types */
import { useState } from "react";

const AddJob = ({ setIsAddJobOpen }) => {
  const initialState = {
    title: "",
    company: "",
    location: "",
    postUrl: "",
    status: "",
    description: "",
    notes: "",
  };
  // eslint-disable-next-line no-unused-vars
  const [addForm, setAddForm] = useState(initialState);

  const handleClickCancel = () => {
    setIsAddJobOpen(false);
  };

  const handleClickSave = () => {
    console.log("save");
  };

  // date added
  // date of last status update
  // userId
  // jobId

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
        {/* select attributes name, value, onchange */}
        <select>
          <option value={"interested"}>Interested</option>
          <option value={"applied"}>Applied</option>
          <option value={"reachedOut"}>Reached Out</option>
          <option value={"interview"}>Interview</option>
          <option value={"offer"}>Offer</option>
          <option value={"notMovingForward"}>Not Moving Forward</option>
        </select>
      </div>
      <div className="add-job-details">
        <h6>Description</h6>
        <textarea />
      </div>
      <div className="add-job-details">
        <h6>Notes</h6>
        <textarea />
      </div>
      <div className="button-group">
        <button onClick={handleClickCancel}>Cancel</button>
        <button className="save-button" onClick={handleClickSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddJob;
