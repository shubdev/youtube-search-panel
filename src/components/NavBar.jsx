import React, { useState } from 'react'
const NavBar = ({ search, setSearch }) => {

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = SpeechRecognition ? new SpeechRecognition() : null;

    if (recognition) {
        recognition.lang = "en-US"; // change to "hi-IN" for Hindi
        recognition.continuous = false;
    }

    const startListening = () => {
        if (!recognition) {
            alert("Speech Recognition not supported in this browser");
            return;
        }

        recognition.start();
    };

    if (recognition) {
        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript.toLowerCase();
            setSearch(transcript);
        };

        recognition.onerror = (event) => {
            console.error("Speech recognition error:", event.error);
        };
    }





    return (
        <>
            <nav>
                {/* Left */}
                <div className="left">
                    <button className="icon-btn"><i className="ri-menu-line" /></button>
                    <div className="logo">
                        <svg width="28" height="20"><rect width="28" height="20" rx="6" fill="#f00" /><polygon points="11,5 22,10 11,15" fill="#fff" /></svg>
                        <span>YouTube<sup>IN</sup></span>
                    </div>
                </div>

                {/* Center */}
                <div className="center">
                    <div className="search-box">
                        <input type="text" placeholder="Search..." value={search} onChange={(e) => {
                            // console.log("search", e.target.value);

                            setSearch(e.target.value)
                        }} />
                        <button className="search-btn"><i className="ri-search-line" /></button>
                    </div>
                    <button onClick={startListening} className="icon-btn"><i className="ri-mic-line" /></button>
                </div>

                {/* Right */}
                <div className="right">
                    <button className="create-btn"><span>+</span> Create</button>
                    <div className="bell">
                        <button className="icon-btn"><i className="ri-notification-3-line" /></button>
                        <span className="badge">9</span>
                    </div>
                    <button className="avatar">S</button>
                </div>
            </nav>
        </>
    )
}

export default NavBar