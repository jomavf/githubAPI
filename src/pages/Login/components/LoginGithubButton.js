import React from "react";
import { authWithGithub } from "../../../firebase";

const LoginGithubButton = () => {
  async function demo(e) {
    const result = await authWithGithub();
    console.log("result", result);
  }
  return (
    <button className="btn btn-secondary" onClick={demo}>
      Login to Github
    </button>
  );
};

export default LoginGithubButton;
