import React from 'react';
import Image from 'next/image';
import profilePic from '../public/pic.jpg';

export function Index() {
  return (
    <>
      <div className="main-data">
        <h1>
          I'm Randeep Rana <br /> Web Developer!
        </h1>

        <div className="tech-animation">
          <h5>React.js | Javascript | MongoDB | Express | Node.JS</h5>
        </div>
      </div>
      <div className="details-section">
        <div className="pic">
          <Image src={profilePic} alt="Randeep Rana" />
        </div>
        <div>
          <div style={{ textAlign: 'start' }}>
            <h1>About</h1>
            <p>
              My name is Randeep, I'm a Full Stack Developer. <br /> Currently
              I'm a Frontend Engineer at Twimbit.
            </p>
          </div>
          <h1>Technology</h1>
          <div className="technologies">
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Bootstrap</li>
              <li>MongoDb</li>
              <li>Express</li>
            </ul>
            <ul>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Nodejs</li>
              <li>Redux</li>
              <li>ContextAPI</li>
              <li>MaterialUi</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
