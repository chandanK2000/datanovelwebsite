import React from 'react';
import './HowAgenticAIWorks.css';
import roboticimage from '../../../../assets/images/agenticAi/roboticimage.png';

const HowAgenticAIWorks = () => {
    return (
        <div className="how-agenticwork-section">
            <h2>How Agentic AI Works</h2>

            <div className="how-agenticwork-container">
                {/* Left Side - Image */}

<div className="how-agenticwork-image">
    <h4 className="agentic-title">AGENTIC <span>AI</span></h4>
    <img src={roboticimage} alt="Agentic AI" />
</div>


                {/* Right Side - Content */}
                <div className="how-agenticwork-content">
                    <div className="how-agenticwork-box">
                        <h3>Reasoning</h3>
                        <ul>
                            <li>Breaks down complex tasks into smaller steps.</li>
                            <li>Plans, categorizes, and adapts based on past actions.</li>
                            <li>Thinks beyond pre-programmed responses to provide accurate solutions.</li>
                        </ul>
                    </div>

                    <div className="how-agenticwork-box">
                        <h3>Collaboration</h3>
                        <ul>
                            <li>Communicates naturally with humans and other AI systems.</li>
                            <li>Shares information and automates workflows seamlessly.</li>
                            <li>Acts like a proactive colleague, reducing the need for supervision.</li>
                        </ul>
                    </div>

                    <div className="how-agenticwork-box">
                        <h3>Action</h3>
                        <ul>
                            <li>Fetches real-time data and interacts with external systems.</li>
                            <li>Updates databases, retrieves insights & executes tasks.</li>
                            <li>Built-in limitations to solve diverse business challenges.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HowAgenticAIWorks;
