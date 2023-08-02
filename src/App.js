import "./App.css";
import { useState, useEffect } from "react";
import { jobsData, categoryNames, statusOptions } from "./data/data";
import Category from "./components/status/Category";
import Details from "./components/details/Details";
import Navbar from "./components/navbar/Navbar";
import AddJob from "./components/AddJob";

function App() {
  const [jobs, setJobs] = useState([]);
  const [jobDetails, setJobDetails] = useState(null);
  const [error, setError] = useState(null);
  const [isAddJobOpen, setIsAddJobOpen] = useState(false);
  const errorMessage = "There was an error retrieving jobs";

  const categorizeJobs = (jobList) => {
    const organizedJobs = {
      interested: [],
      applied: [],
      reachedOut: [],
      interview: [],
      offer: [],
      notMovingForward: [],
    };

    jobList.map((job) => {
      switch (job.status) {
        case statusOptions[0]:
          organizedJobs[statusOptions[0]].push(job);
          break;
        case statusOptions[1]:
          organizedJobs[statusOptions[1]].push(job);
          break;
        case statusOptions[2]:
          organizedJobs[statusOptions[2]].push(job);
          break;
        case statusOptions[3]:
          organizedJobs[statusOptions[3]].push(job);
          break;
        case statusOptions[4]:
          organizedJobs[statusOptions[4]].push(job);
          break;
        case statusOptions[5]:
          organizedJobs[statusOptions[5]].push(job);
          break;
        default:
          console.log("job status error: ", job);
          setError(errorMessage);
          break;
      }
    });

    return organizedJobs;
  };

  // Demonstrating example of using fetch() method for API request
  // However, because no database exists I will ultimately be using
  // dummy data from data.js file.
  const fetchJobs = async () => {
    // Mock api endpoint -> doesn't really return any data in this use case
    // Mock API -> https://mockapi.io/
    // mock endpoint used to demonstrate API request
    const url = "https://64af0767c85640541d4e0eb8.mockapi.io/api/v1/messages";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setError(errorMessage);
      } else {
        setError(null);
        // const data = await response.json();
        // would normally use variable 'data' from line above to set state but
        // because no data actually exists, I will be using jobsData (dummy data)
        // from data.js file.
        setJobs(jobsData);
      }
    } catch (error) {
      console.log("error: ", error);
      setError(errorMessage);
    }
  };

  useEffect(() => {
    // API request
    fetchJobs();
  }, []);

  const categorizedJobs = categorizeJobs(jobs);

  return (
    <div className="App">
      <Navbar setIsAddJobOpen={setIsAddJobOpen} />
      <div className="container">
        <Category
          jobs={jobs}
          setJobs={setJobs}
          categoryJobs={categorizedJobs.interested}
          title={categoryNames.interested}
          setJobDetails={setJobDetails}
        />
        <Category
          jobs={jobs}
          setJobs={setJobs}
          categoryJobs={categorizedJobs.applied}
          title={categoryNames.applied}
          setJobDetails={setJobDetails}
        />
        <Category
          jobs={jobs}
          setJobs={setJobs}
          categoryJobs={categorizedJobs.reachedOut}
          title={categoryNames.reachedOut}
          setJobDetails={setJobDetails}
        />
        <Category
          jobs={jobs}
          setJobs={setJobs}
          categoryJobs={categorizedJobs.interview}
          title={categoryNames.interview}
          setJobDetails={setJobDetails}
        />
        <Category
          jobs={jobs}
          setJobs={setJobs}
          categoryJobs={categorizedJobs.offer}
          title={categoryNames.offer}
          setJobDetails={setJobDetails}
        />
        <Category
          jobs={jobs}
          setJobs={setJobs}
          categoryJobs={categorizedJobs.notMovingForward}
          title={categoryNames.notMovingForward}
          setJobDetails={setJobDetails}
        />
      </div>
      {jobDetails && (
        <Details
          jobs={jobs}
          setJobs={setJobs}
          jobDetails={jobDetails}
          setJobDetails={setJobDetails}
        />
      )}
      {isAddJobOpen && (
        <AddJob
          setIsAddJobOpen={setIsAddJobOpen}
          jobs={jobs}
          setJobs={setJobs}
        />
      )}
      {error && <div>{error}</div>}
    </div>
  );
}

export default App;
