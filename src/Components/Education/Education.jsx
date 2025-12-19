import './Education.css';
import isamm from './isamm.png';

export default function Education() {
    return (
        <div className="fade-in">
            <div className="section-header">
                <h1>Education</h1>
            </div>

            <div className="courses-content fade-in slide-down open">
                <div className="course">
                    <div className="course-icon">
                        <img src={isamm} alt="ISAMM Logo" className="course-logo" />
                    </div>
                    <div className="course-details">
                        <h2 className="course-title">ISAMM — Institut supérieur des arts multimédia de La Manouba</h2>
                        <p className="course-description">Bachelor's degree in Computer Science and Multimedia, emphasizing software development, multimedia applications, and engineering principles.</p>
                        <p className="course-duration muted">Duration: 2024 — 2027</p>
                    </div>
                </div>
                {/* Add more educational items here */}
            </div>
        </div>
    );
}
