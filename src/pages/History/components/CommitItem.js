import React from "react";
import { format } from "date-fns";
import { ClipboardIcon } from "../../../components/ClipboardIcon";

export const CommitItem = ({
  message = "",
  commitDate = "",
  authorName = "",
  avatarUrl = "",
  sha = "",
}) => {
  const placeHolderImg =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsupercharge.info%2Fimages%2Favatar-placeholder.png&f=1&nofb=1";

  const fallbackCopyTextToClipboard = (text) => {
    const textArea = document.createElement("textArea");
    textArea.value = text;
    textArea.focus();
    textArea.select();
    try {
      const successful = document.execCommand("copy");
      console.log(
        `${successful ? "successfully" : "failed when"} copy to clipboard`
      );
    } catch (error) {
      document.body.removeChild(textArea);
    }
  };

  const copyTextToClipboard = async (text) => {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
    }
    try {
      await navigator.clipboard.writeText(text);
      console.log("successful copy to clipboard");
    } catch (error) {
      console.error(error + "unsuccessful copy to clipboard");
    }
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div>
        <div className="m-1 font-weight-bold">{message}</div>
        <div>
          <div className="d-flex align-items-center m-1">
            <img
              src={avatarUrl || placeHolderImg}
              alt={avatarUrl}
              style={{ width: "24px", borderRadius: "50%" }}
              className="mr-2"
            ></img>
            <span>
              <span className="font-weight-bold">{authorName}</span> commited on{" "}
              {format(new Date(commitDate), "MMMM d, yyyy")}
            </span>
          </div>
        </div>
      </div>
      <div>
        <span className="mr-3">
          <button
            style={{
              borderRadius: ".25rem 0px 0px .25rem",
              borderRightWidth: "0px",
            }}
            type="button"
            class="btn btn-outline-secondary"
            onClick={() => copyTextToClipboard(sha)}
          >
            <ClipboardIcon></ClipboardIcon>
          </button>
          <button
            style={{ borderRadius: "0px .25rem .25rem 0px" }}
            type="button"
            class="btn btn-outline-secondary"
          >
            {sha.slice(0, 6)}
          </button>
        </span>
        <span>
          <button type="button" class="btn btn-outline-secondary">
            {"<>"}
          </button>
        </span>
      </div>
    </div>
  );
};
