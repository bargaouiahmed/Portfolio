import React from 'react';
import './Technologies.css';

export default function Technologies(){
  return (
    <div className="section-container fade-in">
      <div className="section-header">
        <h1>Technologies</h1>
      </div>

      <div className="tech-content">
        <div className="tech-category">
          <h3>Backend</h3>
          <div className="tech-list">
            <span>Express</span>
            <span>Flask</span>
            <span>Django</span>
            <span>FastAPI</span>
            <span>Spring Boot</span>
            <span>ASP.NET Core</span>
          </div>
        </div>

        <div className="tech-category">
          <h3>Frontend</h3>
          <div className="tech-list">
            <span>React</span>
            <span>Angular</span>
          </div>
        </div>

        <div className="tech-category">
          <h3>Databases</h3>
          <div className="tech-list">
            <span>PostgreSQL</span>
            <span>YugaByteDB</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div className="tech-category">
          <h3>Mobile</h3>
          <div className="tech-list">
            <span>React Native</span>
            <span>Flutter</span>
            <span>MAUI</span>
          </div>
        </div>

        <div className="tech-category">
          <h3>Desktop</h3>
          <div className="tech-list">
            <span>Electron</span>
            <span>JavaFX</span>
            <span>MAUI</span>
          </div>
        </div>

        <div className="tech-category">
          <h3>ML</h3>
          <div className="tech-list">
            <span>TensorFlow 2</span>
            <span>Hugging Face</span>
          </div>
        </div>

        <div className="tech-category">
          <h3>DevOps</h3>
          <div className="tech-list">
            <span>Git & GitHub</span>
            <span>Containerization</span>
            <span>VPS & Cloud Deployment</span>
            <span>Monitoring</span>
          </div>
        </div>

        <div className="tech-category">
          <h3>Languages</h3>
          <div className="tech-list">
            <span>Arabic</span>
            <span>French</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </div>
  )
}
