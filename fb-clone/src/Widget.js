import React from 'react';
import "./Widget.css";

function Widget() {
    return (
        <div className="widgets">
            <iframe src="https://www.example.com" 
            width="340"
            height="100%"
            style={{border: "none", overflow: "hidden"}}
            scrolling="no"
            frameborder="0"
            allowTransparency="true"
            allow="encrypted-media" 
            ></iframe>
        </div>
    )
}

export default Widget
