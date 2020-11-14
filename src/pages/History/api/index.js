import { BASE_URL } from "../../../constants";

export const requestRepository = async (username, project) => {
  const response = await fetch(`${BASE_URL}/repos/${username}/${project}`);
  return await response.json();
};

export const requestCommits = async (username, project) => {
  const response = await fetch(
    `${BASE_URL}/repos/${username}/${project}/commits`
  );
  return await response.json();
};
