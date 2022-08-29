import React from "react";

function Links(props) {
    return (
        <div>
            <h2>Links</h2>
            <a href={props["github"]}>{props["github"]}</a>
            <a href={props["linkedin"]}> {props["linkedin"]} </a>
        </div>
    )
}
export default Links;