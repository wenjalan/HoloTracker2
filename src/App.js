import './App.css';
import React from "react";

function App() {
  return (
    <div className="AppContainer">
      <Sidebar />
      <Timeline />
      <ChannelInfo />
    </div>
  );
}

function Sidebar() {
    let onGithubIconClicked = (event) => {
        alert("GitHub Icon Clicked!");
        console.log('GitHub Icon Clicked!');
    };

    return (
        <div className="SideBar">
            <h1 className="title">HoloTracker</h1>
            <a className="githubButton" onClick={(e) => onGithubIconClicked(e)}/>
        </div>
    );
}

function Timeline() {
    return (
        <div className="Timeline">
            Timeline
        </div>
    );
}

function ChannelInfo() {
    return (
        <div className="ChannelInfo">
            <div className="PortraitOverlay">
                ChannelInfo
            </div>
        </div>
    );
}

export default App;
