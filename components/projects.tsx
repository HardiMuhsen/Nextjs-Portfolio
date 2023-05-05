import React from  "react";
import Image from "next/image";
import Linktree from "../public/assets/Linktree.png";
import Education from "../public/assets/Education-website.png";
import JobPortal from "../public/assets/Job-Portal.png";
import Qrcode from "../public/assets/QR-code.png";
import ProjectItem from "./ProjectItem";



const Projects = () => {
    return (
        <div id="projects" className="w-full lg:h-screen p-2">
           <div className="max-w-[1240px] mx-auto px-2 py-16">
            <p className="uppercase text-xl tracking-widest text-[#C2185B]">Projects</p>
            <h2 className="py-4">what I&apos;ve Built</h2>
            <div className="grid md:grid-cols-2 gap-8">
               
            <ProjectItem
                title="Linktree Website"
                backgroundImg={Linktree}
                ProjectUrl="Linktree" 
                
                /> 
                <ProjectItem
                title="Education Website"
                backgroundImg={Education} 
                ProjectUrl="Education" 

                /> 
                <ProjectItem
                title="JobPortal Website"
                backgroundImg={JobPortal} 
                ProjectUrl="JobPortal"

                /> 
                <ProjectItem
                title="Qrcode Website"
                backgroundImg={Qrcode} 
                ProjectUrl="Qrcode" 
                />
                
            </div>
            </div> 
            </div>
            
    );
};

export default Projects;