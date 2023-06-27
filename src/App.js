import "./App.css";
import { useState } from "react";
import { jobsData } from "./data/data";
import Category from "./components/status/Category";
import Details from "./components/details/Details";

function App() {
  const [jobDetails, setJobDetails] = useState(null);

  return (
    <div className="App">
      <div className="container">
        <Category
          jobs={jobsData.interested}
          title="Interested"
          setJobDetails={setJobDetails}
        />
        <Category
          jobs={jobsData.applied}
          title="Applied"
          setJobDetails={setJobDetails}
        />
        <Category
          jobs={jobsData.reachedOut}
          title="Reached Out"
          setJobDetails={setJobDetails}
        />
        <Category
          jobs={jobsData.interview}
          title="Interview"
          setJobDetails={setJobDetails}
        />
        <Category
          jobs={jobsData.offer}
          title="Offer"
          setJobDetails={setJobDetails}
        />
        <Category
          jobs={jobsData.notMovingForward}
          title="Not Moving Forward"
          setJobDetails={setJobDetails}
        />
      </div>
      {/* <Details jobDetails={jobDetails} setJobDetails={setJobDetails} /> */}
      {jobDetails && (
        <Details jobDetails={jobDetails} setJobDetails={setJobDetails} />
      )}
    </div>
  );
}

export default App;
