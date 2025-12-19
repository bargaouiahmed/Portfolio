import { useState } from 'react';
import './Projects.css';
import Project from '../Project';

import cmp31 from '../../assets/projects/cutemp3player/cmp31.png';
import cmp32 from '../../assets/projects/cutemp3player/cmp32.png';
import cmp33 from '../../assets/projects/cutemp3player/cmp33.png';

import retro1 from '../../assets/projects/retrosica/retro1.png';
import retro2 from '../../assets/projects/retrosica/retro2.png';
import retro3 from '../../assets/projects/retrosica/retro3.png';

import re1 from '../../assets/projects/reachess/re1.png';
import re2 from '../../assets/projects/reachess/re2.png';

import ca1 from '../../assets/projects/chatasp/ca1.png';
import ca2 from '../../assets/projects/chatasp/ca2.png';
import in1 from '../../assets/projects/inofa/in1.png';
import in2 from '../../assets/projects/inofa/in2.png';
import in3 from '../../assets/projects/inofa/in3.png';
import in4 from '../../assets/projects/inofa/in4.png';

export default function Projects() {
    const projects = [
           {
            name: 'Inofa',
            description: 'Inofa is the MVP for a an Ai fashion startup, it has 6 main features, rate outfit, color coherernce, virtual try on, style suggestion, model generation, and pose editing',
            images: [in1, in2, in3, in4]
        },
        {
            name: 'Cute Mp3 Player',
            description: 'An ElectronJs desktop application for playing, managing, and downloading mp3 files using Youtube links, it\'s aesthetic is intended to be cute and minimalistic, perfect for a gift to a loved one.',
            images: [cmp31, cmp32, cmp33]
        },
      
        {
            name: 'Retrosica',
            description: 'Retrosica is a flutter recreation of Cute Mp3 Player, designer for mobile devices with similar features, with a light and dark mode and notification controls.',
            images: [retro1, retro2, retro3]
        },
          {
            name: 'Reachess',
            description: 'A chess website with realtime multiplayer, queues for opponent matching, and private matches via direct links',
            images: [re1, re2]
        },
        {
            name: 'ChatASP',
            description: 'A realtime chat application with identity verification, accross device synchronization, and end-to-end encryption.',
            images: [ca1, ca2, ]
        }
        ,
     
    ];

    return (
        <div className="section-container fade-in">
            <div className="section-header">
                <h1>Projects</h1>
            </div>

            <div className="projects-content fade-in slide-down open">
                {projects.map((p) => (
                    <div key={p.name} style={{ marginBottom: '1rem' }}>
                        <Project name={p.name} description={p.description} images={p.images} />
                    </div>
                ))}
            </div>
            <p style={{
                fontWeight:"bold",


            }}>
                 Note: Most projects i worked on are intellectual property of their owners, therefore, i'm not allowed to share them</p>
        </div>
    );
}