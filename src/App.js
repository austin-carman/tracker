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
        <div className="column column-2">Applied</div>
        <div className="column column-3">Reached Out</div>
        <div className="column column-4">Interview</div>
        <div className="column column-5">Offer</div>
        <div className="column column-6">Not Moving Forward</div>
      </div>
    </div>
  );
}

export default App;
