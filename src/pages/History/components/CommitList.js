import { format } from "date-fns";
import React from "react";
import { CommitItem } from "./CommitItem";

export const CommitList = ({ commits = [], date }) => {
  return (
    <>
      {date && (
        <h6 className="mb-3">
          Commits on {format(new Date(date), "MMMM d, yyyy")}
        </h6>
      )}
      <ul className="list-group mb-3">
        {commits.map((commit, index) => {
          return (
            <li className="list-group-item list-group-item-action" key={index}>
              <CommitItem {...commit}></CommitItem>
            </li>
          );
        })}
      </ul>
    </>
  );
};
