import "./App.css";
import { useState } from "react";
import { jobsData } from "./data/data";
import Category from "./components/status-categories/Category";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [jobs, setJobs] = useState(jobsData);

  return (
    <div className="App">
      <div className="container">
        <Category jobs={jobs.interested} title="Interested" />
        <Category jobs={jobs.applied} title="Applied" />
        <Category jobs={jobs.reachedOut} title="Reached Out" />
        <Category jobs={jobs.interview} title="Interview" />
        <Category jobs={jobs.offer} title="Offer" />
        <Category jobs={jobs.notMovingForward} title="Not Moving Forward" />
      </div>
    </div>
  );
}

export default App;
