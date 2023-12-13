import React from 'react';
import clsx from 'clsx';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <div id="aboutMeContainer">

      <div id="aboutMe">

        <div id="profileImage">

          <img src="/img/me.jpg"></img>

          <div id="links">

            <a target="_blank" rel="noopener" href="https://github.com/embluk" title="GitHub profile: embluk"><img src="/img/github.png"></img></a>
            <a target="_blank" rel="noopener" href="https://twitter.com/luke_embrey" title="Twitter profile: luke_embrey"><img src="/img/twitter.png"></img></a>

          </div>

        </div>

        <div id="bio">

          <p id="aboutMeTitle">👋 Luke Embrey</p>

          <p className="aboutMeSubTitle">About Me</p>

          <p>Full stack developer, computer science graduate from Staffordshire University.</p>

          <p>Previously at Airbus Helicopters (Software Developer) in Munich, now working for myself.</p>

          <p className="aboutMeSubTitle">Development & Programming</p>

          <p>Working with languages like HTML, CSS, JavaScript, PHP, C++, Bash.</p>

          <p>Interested in WebDev, asynchronous event driven PHP and coroutines/fibers.</p>

          <p className="aboutMeSubTitle">Company & Work</p>

          <p>My latest startup is <a target="_blank" rel="noopener" href="https://Bakup.io">Bakup.io</a> - An automatic SaaS that can backup databases, files and servers. A complete solution for data backup and management for businesses. Don't ever worry about secure backups again, keep your customers safe with triple replication, geo redundancy etc.</p>

          <p className="aboutMeSubTitle">Keeping Up-to-date</p>

          <p>The best way at the moment to keep up-to-date when I post a new blog or any updates about my work is through <a target="_blank" rel="noopener" href="https://twitter.com/luke_embrey">Twitter</a>, please follow me to be the first to know of any new blog posts or product updates.</p>

        </div>

      </div>

    </div>
  );
}
