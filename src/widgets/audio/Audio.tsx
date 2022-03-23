import React from "react";

export default React.memo(
  function Audio() {
    console.log("audio render");

    return <div>sdfdddd</div>;
  },
  () => true
);
