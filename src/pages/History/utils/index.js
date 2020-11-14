export const extractCommitData = (commitsObj) => {
  console.log("commitsObj", commitsObj);
  return commitsObj.map((commitObj) => ({
    message: commitObj?.commit?.message,
    commitDate: commitObj?.commit?.committer?.date,
    authorName: commitObj?.author
      ? commitObj?.author?.login
      : commitObj?.commit?.author?.name,
    avatarUrl: commitObj?.author?.avatar_url,
    sha: commitObj?.sha,
  }));
};

const groupBy = function (xs, key) {
  return xs.reduce(function (acc, curr) {
    (acc[curr[key]] = acc[curr[key]] || []).push(curr);
    return acc;
  }, {});
};

export const groupCommitsByDay = (commits) => {
  const commitsWithDateId = commits.map((commit) => {
    const date = new Date(commit.commitDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return {
      ...commit,
      id: `${year}-${month}-${day}`,
    };
  });

  return Object.entries(groupBy(commitsWithDateId, "id"));
};
