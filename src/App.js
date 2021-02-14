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
    return (
        <div className="SideBar">
            SideBar
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
