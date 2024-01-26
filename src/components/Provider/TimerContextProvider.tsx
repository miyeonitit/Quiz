import React, { createContext, useContext, useState, useEffect } from "react";

type childrenProps = {
  children: React.ReactNode;
};

const TimerContext = createContext({
  timer: 0,
  startTimer: () => {},
  resetTimer: () => {},
});

export const TimerContextProvider: React.FC<childrenProps> = ({ children }) => {
  const [timer, setTimer] = useState<number>(0);
  const [start, setStart] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return (): void => clearInterval(interval);
  }, []);

  const startTimer = (): void => {
    setStart(true);
  };

  const resetTimer = (): void => {
    setTimer(0);
    setStart(false);
  };

  return (
    <TimerContext.Provider value={{ timer, startTimer, resetTimer }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);

  if (!TimerContext) {
    throw new Error("timer error");
  }

  return context;
};
