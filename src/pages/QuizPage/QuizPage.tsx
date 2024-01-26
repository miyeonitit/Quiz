import React, { useEffect, useState } from "react";

import { questionListType } from "../../type/questionListType";

import QuizComponent from "../../components/Quiz/QuizComponent";
import FetchingDataLoading from "../../components/Loading/FetchingDataLoading";

const QuizPage: React.FC = () => {
  // API response data를 담는 state
  const [questionList, setQuestionList] = useState<questionListType[]>([]);

  const baseURL = process.env.REACT_APP_API_BASE_URL;

  const fetchingData = async () => {
    try {
      const res = await fetch(
        `${baseURL}/api.php?amount=10&category=27&type=multiple`
      );

      const data = await res.json();

      setQuestionList(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      {questionList?.length ? (
        <QuizComponent questionList={questionList} />
      ) : (
        <FetchingDataLoading />
      )}
    </>
  );
};

export default QuizPage;
