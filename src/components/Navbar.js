/* eslint-disable react/prop-types */
const Navbar = ({ setIsAddJobOpen }) => {
  const handleOpenAddJob = () => {
    setIsAddJobOpen(true);
  };

  return (
    <nav className="navbar">
      <div>
        <h2>My Job Board</h2>
      </div>
      <button id="add-job-button" onClick={handleOpenAddJob}>
        + Job
      </button>
    </nav>
  );
};

export default Navbar;
