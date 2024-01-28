import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { TimerContextProvider } from "./components/Provider/TimerContextProvider";

import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import QuizPage from "./pages/QuizPage/QuizPage";
import QuizResultPage from "./pages/QuizResult/QuizResultPage";
import AnswerNote from "./pages/AnswerNote/AnswerNote";

function App() {
  return (
    <TimerContextProvider>
      <RecoilRoot>
        <Layout>
          <Routes>
            <Route path="/" element={<Home data-cy="homeComponent" />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/result" element={<QuizResultPage />} />
            <Route path="/note" element={<AnswerNote />} />
          </Routes>
        </Layout>
      </RecoilRoot>
    </TimerContextProvider>
  );
}

export default App;
