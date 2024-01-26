import { useEffect } from "react";

import { useTimer } from "../../components/Provider/TimerContextProvider";

import QuizStartComponent from "../../components/Quiz/QuizStartComponent";

const Home = () => {
  const { resetTimer } = useTimer();

  useEffect(() => {
    resetTimer();
  }, []);

  return <QuizStartComponent />;
};

export default Home;
