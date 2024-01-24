import { Route, Routes } from "react-router-dom";

import { TimerContextProvider } from "./components/Provider/TimerContextProvider";

import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import QuizPage from "./pages/QuizPage/QuizPage";
import QuizResult from "./pages/QuizResult/QuizResult";

function App() {
  return (
    <TimerContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<QuizResult />} />
        </Routes>
      </Layout>
    </TimerContextProvider>
  );
}

export default App;
