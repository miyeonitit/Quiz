import React from "react";
import { VictoryPie } from "victory";

type chartProps = {
  correctAnswerLength: number;
  incorrectAnswerLength: number;
};

const Chart: React.FC<chartProps> = ({
  correctAnswerLength,
  incorrectAnswerLength,
}) => {
  const data = [
    { x: "correctAnswer", y: correctAnswerLength, label: "정답" },
    { x: "incorrectAnswer", y: incorrectAnswerLength, label: "오답" },
  ];

  return (
    <div data-cy="quizChart">
      <VictoryPie
        colorScale={["green", "red"]}
        data={data}
        width={250}
        height={250}
      />
    </div>
  );
};

export default Chart;
