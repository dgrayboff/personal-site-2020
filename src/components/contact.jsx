import React from 'react';
import './contact.scss';

const config = {
  contactInfo: [
    {
      class: 'email',
      link: 'mailto:dgrayboff@gmail.com',
      copy: 'dgrayboff@gmail.com',
    },
    {
      class: 'github',
      link: 'https://github.com/dgrayboff',
      copy: 'GitHub',
    },
    {
      class: 'linkedin',
      link: 'https://www.linkedin.com/in/davidgrayboff',
      copy: 'LinkedIn',
    },
  ],
};

const Contact = () => (
  <div id="contact">
    <h3>Contact</h3>
    <div className="content">
      <ul>
        {config.contactInfo.map((i) => (
          <li className={i.class}>
            <a href={i.link} target="_blank" rel="noreferrer">
              {i.copy}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Contact;
