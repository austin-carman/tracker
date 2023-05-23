import "./App.css";
import { jobs } from "./data/data";
import Interested from "./components/status-categories/Interested";

function App() {
  const interestedJobs = jobs.filter((job) => {
    return job.status === "Interested";
  });

  return (
    <div className="App">
      <div className="container">
        <Interested jobs={interestedJobs} />
        {/* <div className="column column-1">Interested</div> */}
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
