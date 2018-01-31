import React from 'react';
import Link from 'gatsby-link';
import '../layouts/index.css';
import picOfMe from "../img/me.png";

const IndexPage = () => (
  <div>
    <div className="menu">
      <header>
        
        Jon Killinger
        
      </header>
        <nav className="flex-nav">
            <ul>
                <li>
                    <a href="https://github.com/jonkillinger">Github </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/jonkillinger/'>LinkedIn </a>
                </li>
                <li>
                    <a href='mailto:killingerjon@gmail.com'>Killingerjon@gmail.com</a>
                </li>
            </ul>
        </nav>

    </div>

    <img src={picOfMe} alt="Picture of me" />

    <article className="post">

      <h2>Hello,</h2>

      <p>I'm a software developer from Sonoma, California. As a recent graduate, I am working hard to design and implement Full-Stack web applications on my own time.
      </p>

      <h2>I am currently..</h2>
      <ul>
        <li>
          Self-teaching: React, Redux, Node
        </li>
        <li>
          Grokking: Progressive Web Architecture (JAMstack)
        </li>
        <li>
          Attending a cybersecurity course on the weekends.
        </li>
      </ul>
    </article>
  </div>


)

export default IndexPage
