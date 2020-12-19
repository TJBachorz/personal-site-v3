import React, { useEffect } from 'react';

import { looksyTech, renderTechImages } from './Utilities';

import { Words, Frame } from 'arwes';

import looksyGIF1 from '../assets/looksy-1.gif';
import looksyGIF2 from '../assets/looksy-2.gif';

export default function Looksy() {

    const backupGIFS = ["https://j.gifs.com/ZYP52R.gif", "https://j.gifs.com/BNkzVN.gif"]

    const looksyGIFS = [looksyGIF1, looksyGIF2]

    let imgCount = 1

    const cycleGIFS = () => {
        const gifImage = document.querySelector(".primary-img")
        gifImage.src = looksyGIFS[imgCount]
        return imgCount === 0 ? imgCount++ : imgCount--
    }

    useEffect(() => {
        const looksyGIFIntervalID = setInterval(cycleGIFS, 9000)
        return () => clearInterval(looksyGIFIntervalID)
    })

    return (
        <>
            <div className="total-project-container">
                <div className="project-info">
                    <h2><Words animate>Looksy</Words></h2>
                    <div className="project-link-container">
                        <p className="project-links"><a rel="noreferrer" target="_blank" href="https://github.com/TJBachorz/looksy-frontend"><Words animate>Frontend</Words></a></p>
                        <p className="separator"><Words animate>|</Words></p>
                        <p className="project-links"><a rel="noreferrer" target="_blank" href="https://github.com/TJBachorz/looksy_backend"><Words animate>Backend</Words></a></p>
                        <p className="separator"><Words animate>|</Words></p>
                        <p className="project-links"><a rel="noreferrer" target="_blank" href="https://github.com/TJBachorz/looksy-file-uploader"><Words animate>Node/AWS Backend</Words></a></p>
                        <p className="separator"><Words animate>|</Words></p>
                        <p className="project-links"><a rel="noreferrer" target="_blank" href="https://www.youtube.com/watch?v=HPJ6KVPMPac"><Words animate>Demo</Words></a></p>
                    </div>
                    <ul>
                        <li><Words animate>Utilized Ruby on Rails back-end API to persist user and 3D modeling data using JWT auth.</Words></li>
                        <li><Words animate>Incorporated second database using Node with Express JS and AWS for URL returns on profile picture uploads.</Words></li>
                        <li><Words animate>Leveraged Google’s model-viewer augmented reality tech to render 3D models in natural environments.</Words></li>
                    </ul>
                </div>
                <div className="project-image-container">
                    <Frame
                        animate
                        timeout={3000}
                        level={3}
                        corners={2}
                        layer='secondary'
                    >
                        <div className="fuzzy-background">
                            <img className="primary-img" src={looksyGIFS[0]} alt="Looksy gif"/>
                        </div>
                    </Frame>
                </div>
            </div>
            <div className="techs">
                <h6 className="tech-label"><Words animate>Tech used:</Words></h6>
                <Frame
                    animate
                    level={3}
                    corners={1}
                    layer='secondary'
                >
                <div className="fuzzy-background">
                    {renderTechImages(looksyTech)}
                </div>
                </Frame>
            </div>
        </>
    )
    // <iframe src='//gifs.com/embed/looksy-1-ZYP52R' frameborder='0' scrolling='no' width='172px' height='360px' style='-webkit-backface-visibility: hidden;-webkit-transform: scale(1);' ></iframe>
}
