import { useState } from 'react';
import './Courses.css';
import aalogo from './aalogo.png';
import tf2cert from './tf2cert.png';

export default function Courses() {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <>
      <h1>Courses</h1>
      
      <div className="courses-content">
        {/* Course 1 */}
        <div className="course">
          <div className="course-icon">
            <img src={aalogo} alt="App Academy Logo" className="course-logo" />
          </div>
          <div className="course-details">
            <h2 className="course-title">App Academy Open</h2>
            <p className="course-description">
              Comprehensive full-stack development curriculum covering JavaScript, 
              Python and flask, React, algorithms, and data structures.
            </p>
            <p className="course-duration">Duration: Self-paced</p>
          </div>
        </div>

        {/* Course 2 */}
        <div 
          className="course course--clickable"
          onClick={() => setPreviewOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setPreviewOpen(true);
          }}
        >
          <div className="course-icon">
            <img src={tf2cert} alt="TensorFlow Certificate" className="course-logo" />
          </div>
          <div className="course-details">
            <h2 className="course-title">Deep Learning with TensorFlow 2</h2>
            <p className="course-description">
              Practical deep learning course focused on building and training models 
              using TensorFlow 2.
            </p>
            <p className="course-duration">Duration: Self-paced — click to preview certificate</p>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {previewOpen && (
        <div className="cert-modal">
          <div className="cert-backdrop" onClick={() => setPreviewOpen(false)} />
          <div className="cert-body">
            <button
              className="cert-close"
              onClick={() => setPreviewOpen(false)}
              aria-label="Close preview"
            >
              ✕
            </button>
            <img 
              src={tf2cert} 
              alt="TensorFlow Certificate" 
              className="cert-preview"
            />
          </div>
        </div>
      )}
    </>
  );
}