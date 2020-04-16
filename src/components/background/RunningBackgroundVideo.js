import React from "react";
import runningVideo from "../../logoMedia/runs.mp4";

/**
 * Display background running video
 */
function RunningBackgroundVideo() {
  return (
    <video muted loop autoPlay>
      <source src={runningVideo} type="video/mp4" />
    </video>
  );
}

export default RunningBackgroundVideo;
