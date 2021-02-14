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
            <h1 id="title">HoloTracker</h1>
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
    let onChannelNameClickedEvent = (event) => {
        alert("Channel Name Clicked");
    }

    let onTwitterHandleClickedEvent = (event) => {
        alert("Twitter Handle Clicked");
    }

    return (
        <div className="ChannelInfo">
            <div className="PortraitOverlay"/>
            <div className="channelInfoBox">
                <img className="channelIcon"/>
                <h6 id="channelName" onClick={(e) => onChannelNameClickedEvent(e)}>Starbot Ch スターボトちゃんねる</h6>
                <p id="subscriberText">420k subscribers</p>
                <p id="generationText">Holostars EN Generation 1</p>
                <a id="twitterHandle" onClick={(e) => onTwitterHandleClickedEvent(e)}>@starbotch</a>
            </div>
        </div>
    );
}

export default App;
