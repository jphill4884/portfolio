import React from 'react';
import "./Section.css";
import { NavLink } from "react-router-dom";


export default function Section(props) {


  return (
    
        <div className="section-card">
          <div className="section-card-title">
            <a href={props.story.url} target="_blank" rel="noopener noreferrer" className="story-title">{props.story.title}</a>
          </div>  
          <div className="story-card-details">
            <p><NavLink to = {"/"+props.story.objectID}>{props.story.num_comments} comments</NavLink></p>
          </div>
        </div>
    )
}