import { useState } from "react";
import { requestCommits } from "./api";
import { CommitList } from "./components/CommitList";
import { Controls } from "./components/Controls";
import { extractCommitData, groupCommitsByDay } from "./utils";

export const History = () => {
  const [username, setUsername] = useState("");
  const [project, setProject] = useState("");

  const [commits, setCommits] = useState([]);

  const handleGetProjectDetails = async () => {
    const commitsObj = await requestCommits(username, project);
    const commitsData = extractCommitData(commitsObj);
    const commitsByDay = groupCommitsByDay(commitsData);
    setCommits(commitsByDay);
  };
  return (
    <div className="container">
      <Controls
        setUsername={setUsername}
        setProject={setProject}
        requestProjectDetails={handleGetProjectDetails}
      ></Controls>
      <h1 className="mb-5">{project || "My Project"}</h1>
      <div>
        {commits.map(([date, commitsByDay], index) => {
          return (
            <CommitList
              date={date}
              key={index}
              commits={commitsByDay}
              class="mt-3 mb-3"
            ></CommitList>
          );
        })}
      </div>
    </div>
  );
};

export default History;
