import "./App.css";
import { useState, useEffect } from "react";
import { jobsData } from "./data/data";
import Category from "./components/status/Category";
import Details from "./components/details/Details";

function App() {
  const [jobs, setJobs] = useState([]);
  const [jobDetails, setJobDetails] = useState(null);
  const [error, setError] = useState(null);
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
      switch (job.category) {
        case "interested":
          organizedJobs.interested.push(job);
          break;
        case "applied":
          organizedJobs.applied.push(job);
          break;
        case "reachedOut":
          organizedJobs.reachedOut.push(job);
          break;
        case "interview":
          organizedJobs.interview.push(job);
          break;
        case "offer":
          organizedJobs.offer.push(job);
          break;
        case "notMovingForward":
          organizedJobs.notMovingForward.push(job);
          break;
        default:
          console.log("job category error: ", job);
          setError(errorMessage);
      }
    });

    return organizedJobs;
  };

  // Example of using fetch() method for API request but
  // will be using dummy data from data.js file.
  const fetchJobs = async () => {
    // Mock api endpoint -> doesn't really return any data
    // just used to demonstrate API request if backend/database existed
    const url = "https://64af0767c85640541d4e0eb8.mockapi.io/api/v1/messages";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setError(errorMessage);
      } else {
        setError(null);
        // const data = await response.json();
        // would normally use variable 'data' from line above but because
        // no data actually exists, I will be using jobsData (dummy data)
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
      <div className="container">
        <Category
          jobs={categorizedJobs.interested}
          title="Interested"
          setJobDetails={setJobDetails}
        />
        <Category
          jobs={categorizedJobs.applied}
          title="Applied"
          setJobDetails={setJobDetails}
        />
        <Category
          jobs={categorizedJobs.reachedOut}
          title="Reached Out"
          setJobDetails={setJobDetails}
        />
        <Category
          jobs={categorizedJobs.interview}
          title="Interview"
          setJobDetails={setJobDetails}
        />
        <Category
          jobs={categorizedJobs.offer}
          title="Offer"
          setJobDetails={setJobDetails}
        />
        <Category
          jobs={categorizedJobs.notMovingForward}
          title="Not Moving Forward"
          setJobDetails={setJobDetails}
        />
      </div>
      {jobDetails && (
        <Details jobDetails={jobDetails} setJobDetails={setJobDetails} />
      )}
      {error && <div>{error}</div>}
    </div>
  );
}

export default App;
