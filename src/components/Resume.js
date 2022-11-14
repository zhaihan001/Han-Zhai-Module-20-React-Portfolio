import React from "react";

export default function Resume() {
  return (
    <div className="resumecontainer">
      <div className="box red">
        <h2 className="content">Resume</h2>
      </div>
      <div>
        <h3>Proficiencies</h3>
        <ul>
          <li>HTML CSS</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Node.js</li>
          <li>MySQL MongoDB</li>
          <li>Jira</li>
          <li>Github</li>
          <li>Agile</li>
          <li>Testing</li>
          <li>Windows Server</li>
        </ul>
      </div>
      <div className="download">
        <a
          className="button is-primary"
          href={process.env.PUBLIC_URL + "/Han Zhai Developer Resume.docx"}
          target="_blank"
          rel="noreferrer"
        >
          <span>Download My Resume</span>
        </a>
      </div>
    </div>
  );
}
