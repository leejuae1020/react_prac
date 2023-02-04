import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이주애",
        comment: "리액트 기초 공부중입니당",
    },
    {
        name: "유연석",
        comment: "주애 이쁘당",
    },
    {
        name: "손흥민",
        comment: "주애랑 결혼하고싶당",
    },
    {
        name: "방금 태어난개발자",
        comment: "주애랑 같은조 하고싶당",
    },
    {
        name: "떠리",
        comment: "킹덤젤리 짱",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((x) => {
                return <Comment name={x.name} comment={x.comment} />;
            })}
        </div>
    );
}

export default CommentList;
