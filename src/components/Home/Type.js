import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Create textbooks and online resources for elementary and primary students",
          "Increase literacy and provide accessible education to kids in Somalia",
          "Create a unified learning process throughout Somalia"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
