import { useState } from "react"
import SoftwareJourney from "./SoftwareJourney/SoftwareJourney";
import "./Introduction.css"
import me from './me.jpg';

export default function Introduction(){
    const [toggle, setToggle] = useState(false);
    const onToggle = () =>{
        setToggle(!toggle);
    }
    
    
    return (<div className="section-container fade-in"> 
        <div className="section-header">
            <h1> Who Am I</h1>

            <div className="introduction-image-container">
                <img src={me} alt="Ahmed Bargaoui" className="introduction-image" />
            </div>
        </div>
        <div className="credentials">
            <a className="cred-pill" href="mailto:bargaouiahmed@gmail.com">📧 bargaouiahmed@gmail.com</a>
            <a className="cred-pill" href="https://github.com/bargaouiahmed" target="_blank" rel="noreferrer">🐙 github.com/bargaouiahmed</a>
        </div>
            <div className="introduction-text">
            <p>Hello — I’m <strong className="intro-strong">Ahmed Bargaoui</strong>, a software developer who builds robust backend systems, cross-platform applications, and production-ready APIs. I bring practical DevOps experience and strong software engineering practices to deliver reliable, maintainable solutions across web, desktop, and cloud platforms.</p>
            <p>My work spans cloud-native deployments, automation, applied machine learning, and platform integrations. I emphasize clear architecture, automated delivery pipelines, and measurable outcomes to accelerate product development and reduce operational overhead.</p>
        </div>
        <div className="section-actions">
            <button
                className={`icon-toggle ${toggle ? 'rotated' : ''} journey-bar `}
                onClick={onToggle}
                aria-expanded={toggle}
                aria-label="Toggle software journey"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </button>
        </div>
        <div className={`slide-down ${toggle ? 'open' : 'closed'}`} aria-hidden={!toggle}>
            <SoftwareJourney onToggle={onToggle}/>
        </div>
    </div>)
}