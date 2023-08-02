/* eslint-disable react/prop-types */
const AddJob = ({ setIsAddJobOpen }) => {
  const handleClickCancel = () => {
    setIsAddJobOpen(false);
  };

  const handleClickSave = () => {
    console.log("save");
  };

  return (
    <div>
      <h2>Add Job Here</h2>
      <button onClick={handleClickCancel}>Cancel</button>
      <button onClick={handleClickSave}>Save</button>
    </div>
  );
};

export default AddJob;
