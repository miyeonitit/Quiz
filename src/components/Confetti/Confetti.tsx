import React, { useState, useEffect } from "react";

import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { TConductorInstance } from "react-canvas-confetti/dist/types";

const Confetti: React.FC = () => {
  // confetti 효과를 위한 state
  const [conductor, setConductor] = useState<TConductorInstance>();

  // confetti init
  const onInit = ({ conductor }: { conductor: TConductorInstance }) => {
    setConductor(conductor);

    // conductor가 초기화된 이후에 controlConfetti 호출
    controlConfetti();
  };

  // confetti 3초동안 실행
  const controlConfetti = () => {
    conductor?.run({ speed: 1 });

    setTimeout(() => {
      conductor?.stop();
    }, 3000);
  };

  // conductor가 초기화된 이후 controlConfetti 호출
  useEffect(() => {
    if (conductor) {
      controlConfetti();
    }
  }, [conductor, controlConfetti]);

  return (
    <>
      <Fireworks onInit={onInit} />
    </>
  );
};

export default Confetti;
