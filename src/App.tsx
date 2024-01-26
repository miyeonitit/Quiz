import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { TimerContextProvider } from "./components/Provider/TimerContextProvider";

import Home from "./pages/Home/Home";
import QuizPage from "./pages/QuizPage/QuizPage";
import QuizResult from "./pages/QuizResult/QuizResult";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <TimerContextProvider>
      <RecoilRoot>
        <Layout>
          <Routes>
            <Route path="/" element={<Home data-cy="homeComponent" />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/result" element={<QuizResult />} />
          </Routes>
        </Layout>
      </RecoilRoot>
    </TimerContextProvider>
  );
}

export default App;
