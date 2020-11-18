import { BASE_URL, CLIENT_ID, CLIENT_SECRET } from "../../../constants";

export const requestRepository = async (username, project) => {
  const response = await fetch(`${BASE_URL}/repos/${username}/${project}`);
  return await response.json();
};

export const requestCommits = async (username, project) => {
  const response = await fetch(
    `${BASE_URL}/repos/${username}/${project}/commits`
  );
  debugger
  return await response.json();
};

