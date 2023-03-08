import React from 'react';

function Contact() {
  return (
    <>
      <section className='icons'>
        <div>
          <a href="https://www.linkedin.com/in/natalie-mbatha/" target="_blank"
            rel="noreferrer"><i className="fa-brands fa-linkedin"
              aria-label="Natalie Mbatha's LinkedIn profile"></i>
          </a>
        </div>
        <div>
          <a href="https://codepen.io/NatalieSM/pens/public" target="_blank"
            rel="noreferrer"><i className="fa-brands fa-codepen"
              aria-label="Natalie Mbatha's Codepen profile"></i>
          </a>
        </div>
        <div>
          <a href="https://github.com/NSM722" target="_blank"
            rel="noreferrer"><i className="fa-brands fa-github"
              aria-label="Natalie Mbatha's Github profile"></i>
          </a>
        </div>
        <div>
          <a href="mailto:nataliembatha@gmail.com" target="_blank"
            rel="noreferrer"><i className="fa-regular fa-envelope"
              aria-label="Natalie Mbatha's Email address"></i>
          </a>
        </div>
      </section>
    </>
  )
}

export default Contact;