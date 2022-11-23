import React from "react";
import Book from "./book";

function Library(props) {
    return(
        <div>
            <Book name="처음만난 파이썬" numOfPage={300}></Book>
            <Book name="AWS" numOfPage={450}></Book>
            <Book name="React" numOfPage={525}></Book>
        </div>
    );

}export default Library;