export const Controls = ({
  setUsername,
  setProject,
  requestProjectDetails,
}) => {
  const handleChangeUsername = (event) => setUsername(event.target.value);
  const handleChangeProject = (event) => setProject(event.target.value);

  return (
    <div className="m-3">
      <div className="">
        <label className="pr-3" style={{ width: "100px" }} htmlFor="username">
          Username
        </label>
        <input name="username" onChange={handleChangeUsername} />
      </div>
      <div className="">
        <label className="pr-3" style={{ width: "100px" }} htmlFor="project">
          Project
        </label>
        <input name="project" onChange={handleChangeProject} />
      </div>
      <div>
        <button
          type="button"
          className="btn btn-primary mt-3 mb-3"
          onClick={requestProjectDetails}
        >
          Query
        </button>
      </div>
    </div>
  );
};
