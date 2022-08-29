import React from "react";
import Links from "./Links";

function bio(props) {
  if (props.bio === undefined || props.bio === "") {
    return null;
  }
  return (
    <p>{props.bio}</p>
  )
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio(props)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links["github"]} linkedin={props.links["linkedin"]}/>
    </div>
  );
}

export default About;
