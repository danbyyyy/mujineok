import * as React from "react";
import person1 from "../images/bobik.jpg";
import person2 from "../images/normal.jpg";
import person3 from "../images/good.jpg"


const Team = () => {
    return (
    <div className="team-section clearfix">
        <h2 className="title">Our team</h2>
        <div className="team-title">The Stellarity team is composed of entrpreneurs and professionals from different countries,industries, and backgrounds, who are experienced and highly qualified. All coming together with the goal of bringing Stellarity services to all corners of the world.</div>
        <div className="team-sub-section clearfix">
            <div className="img-wrapper">
                <img src={person1} />
            </div>
            <div className="txt-wrapper">
                <div className="name">
                    John Lacroach
                </div>
                <div className="job">
                    Co-Founder and CEO
                </div>
                <div className="description">
                    Within his 15 year experience working with private institutions, John has received extensive knowledge of digital investigations, data engineering, algorithm design, security audits and forensic analysis. John accumulated a track record of building teams ground up and transforming existing teams to deliver exponential improvenemts.
                </div>
            </div>
             
        </div>
        <div className="team-sub-section clearfix">
        <div className="img-wrapper">
                <img src={person2} />
            </div>
            <div className="txt-wrapper">
                <div className="name">
                    Deryck Rayner
                </div>
                <div className="job">
                    Co-Founder and Chief Strategy Officer
                </div>
                <div className="description">
                Besides working as a Marketing and sales specialist with international experience in a career that spans more than 10 years, Deryck has extensive experience in a business and finance,having worked both in traditional banking insitutions and fintech companies as well as having been an entrepreneur. 
                </div>
            </div>
            
        </div>
        <div className="team-sub-section clearfix">
        <div className="img-wrapper">
                <img src={person3} />
            </div>
            <div className="txt-wrapper">
                <div className="name">
                    Jeff Reilly
                </div>
                <div className="job">
                    Marketing Executive
                </div>
                <div className="description">
                Jeff is a digital marketing executive specializing in targeted ads, digital PR, and branding. He holds an MSc in Digital Marketing and many professional certifications. Jeff has worked his way up from agency content manager to marketing chief for several startups in the field of blockchain. He is focused on improving brand awareness and creating new strategies for Stellarity's growth in the blockchain and cryptocurrency space.
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Team;