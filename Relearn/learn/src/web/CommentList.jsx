import React from "react";
import Comment from "./Comment";


const comments = [
    {
        name: '관리자',
        comment: '안녕하세요 관리자입니다. 첫 댓글!',
    },
    {
        name: '익명2',
        comment: '리액트는 너무 재미있어용',
    },
    {
        name: '익명3',
        comment: '저도요~',
    },
    {
        name: '최석재',
        comment: '너무 재밌어 리액트는',
    }
];
function CommentList(props) {
    return(
        <div>
            {comments.map((comment) => {
                return(
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            } )};
        </div>
    );
}
export default CommentList;