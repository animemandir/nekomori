import React from "react";

import humanizeDuration from "humanize-duration";

const Time = (props) => {
  const milliSecs = props.seconds * 1000;
  return (
    <div className="text-left text-sm md:text-lg font-bold ep-time">
      {humanizeDuration(milliSecs, { units: ["d", "h"], round: true })}
    </div>
  );
};

export default Time;
