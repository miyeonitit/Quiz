import React, { createContext, useContext, useState, useEffect } from "react";

type childrenProps = {
  children: React.ReactNode;
};

const TimerContext = createContext({
  timer: 0,
  resetTimer: () => {},
});

export const TimerContextProvider: React.FC<childrenProps> = ({ children }) => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const resetTimer = () => {
    setTimer(0);
  };

  return (
    <TimerContext.Provider value={{ timer, resetTimer }}>
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
