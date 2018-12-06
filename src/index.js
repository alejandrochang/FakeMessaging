import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
  const comments = [
    "hello there",
    "how're you doing",
    "long night",
    "LOL",
    "OMG",
    ":D woooowww!"
  ];

  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          commentDate="Today at 5:00 PM"
          image={faker.image.avatar()}
          comment={comments[Math.floor(Math.random() * comments.length)]}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jorge"
          commentDate="Monday at 12:35AM"
          image={faker.image.avatar()}
          comment={comments[Math.floor(Math.random() * comments.length)]}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Ryan"
          commentDate="Oct 25, 2018 at 3:02PM"
          image={faker.image.avatar()}
          comment={comments[Math.floor(Math.random() * comments.length)]}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Elizabeth" commentDate="Yesterday at 1:00PM"
        image={faker.image.avatar()}
        comment={comments[Math.floor(Math.random() * comments.length)]}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
