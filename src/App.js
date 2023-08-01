import "./App.css";
import { useState } from "react";
import { jobsData } from "./data/data";
import Category from "./components/status/Category";
import Details from "./components/details/Details";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [jobDetails, setJobDetails] = useState(null);

  return (
    <div className="App">
      <div className="container">
        <DndProvider backend={HTML5Backend}>
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
        </DndProvider>
      </div>
      {jobDetails && (
        <Details jobDetails={jobDetails} setJobDetails={setJobDetails} />
      )}
    </div>
  );
}

export default App;
