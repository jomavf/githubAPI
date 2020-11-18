import { useHistory } from "react-router-dom";

export const TopBar = () => {
  const history = useHistory();

  const redirectTo = (path) => {
    history.push(path);
  };

  const options = [
    { title: "History", path: "/history" },
    { title: "Login", path: "/login" },
    { title: "Logout", path: "/logout" },
  ];

  return (
    <nav class="navbar navbar-dark bg-primary">
      <span class="navbar-brand mb-0 h1">GithubAPI</span>
      <div>
        <ul class="flex-row navbar-nav mr-auto">
          {options.map(({ title, path }) => {
            return (
              <li class="nav-item mr-2 ml-2" onClick={() => redirectTo(path)}>
                <span class="nav-link">{title}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
