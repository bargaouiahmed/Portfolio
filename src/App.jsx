import Introduction from "./Components/Introduction/Introduction";
import Courses from "./Components/Courses/Courses";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import "./App.css"
import { useEffect } from 'react';


export default function App(){
  useEffect(() => {
    const selector = '.section-container, .project-image-wrap, .project';
    const els = Array.from(document.querySelectorAll(selector));
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    els.forEach(el => {
      el.classList.add('reveal');
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <div className="app-container">
      <div className="bg-stars" aria-hidden="true">
        <div className="stars"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
      <div className="app-grid">
        <div className="main-intro">
          <Introduction/>
        </div>

        <aside className="sidebar">
          <Courses/>
          <Education/>
        </aside>

        <div className="main-projects">
          <Projects/>
        </div>
      </div>
    </div>
  )
}