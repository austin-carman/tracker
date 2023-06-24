/* eslint-disable react/prop-types */
const Details = ({ jobDetails, setJobDetails }) => {
  const [body] = document.getElementsByTagName("body");
  body.style.backgroundColor = "grey";

  const handleCloseDetails = () => {
    body.style.backgroundColor = "white";
    setJobDetails(null);
  };

  return (
    <div className="details-container">
      <h2>{jobDetails.title}</h2>
      <h3>{jobDetails.location}</h3>
      <h3>{jobDetails.postUrl}</h3>
      <select>
        <option>Interested</option>
        <option>Applied</option>
        <option>Reached Out</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Not Moving Forward</option>
      </select>
      <h3>Description</h3>
      <p>{jobDetails.description}</p>
      <button onClick={handleCloseDetails}>Cancel</button>
    </div>
  );
};

export default Details;
