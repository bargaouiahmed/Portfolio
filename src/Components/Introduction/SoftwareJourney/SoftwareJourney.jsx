

export default function SoftwareJourney({onToggle}){
    return (<div className="software-journey"> 
        <h1> My Software Journey</h1>
        <h2>App Academy Open</h2>
        <p> I started my journey by completing the App Academy Open curriculum for web development, a course that introduced me to the basics of programming
            and web development. This particular curriculum was very project-based, which further taught me 
            how to look up documentation, ask AI for information, and overall optimize my workflow.</p>

        <h2>Next Step</h2>
        <p>After completing App Academy, I found myself still seeking more. I always aspired to become the developer
            that could make software as complicated as Autodesk or Adobe, which led me to trying to improve my software architecture skills gradually.
            I took on more complex projects and learned new languages for web. Since I didn't want my experience to be fragmented, I decided to 
            focus on web development for now, learning JavaScript frameworks, backends such as Django, FastAPI, Express, Spring Boot, and so on.
        </p>
        <h2>A Huge Discovery</h2>
        <p> During my web journey, I realized that backend APIs could be consumed by more than web frontends, which meant
            that the transfer to other fields would be less difficult. More than half of the knowledge I had acquired would remain applicable,
            and this led me to meddle with Electron.js. It went exactly how I thought it would; the backend knowledge meant that I could take my time to learn 
            the specifics of Electron.js or any upcoming framework, which led me to trying out mobile development with React Native, Flutter, and most recently .NET MAUI.
            This realization made my software journey much more enjoyable and simple, and taught me that the real important part of it all
            is learning how to learn, and understanding architecture and core concepts.
        </p>
        <h2>Where Am I Now?</h2>
        <p> Currently, I have many projects across different platforms. I noticed that I'm very backend-oriented,
            and I'm still always learning new things via projects, docs, and courses. Recently, I received a certificate in deep learning with TensorFlow 2,
            and deployed multiple apps and websites, so I'm also practicing DevOps and cloud skills. 
            Most importantly, the journey never ends, and I'm excited for what lies ahead.
        </p>
        <p> If you would like to know more about my projects, please feel free to check out the projects section.</p>
        <div className="bottom-actions">
            <button className="icon-toggle bottom-close" onClick={onToggle} aria-label="Close journey">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="18 15 12 9 6 15"></polyline>
                </svg>
            </button>
        </div>
    </div>)
}