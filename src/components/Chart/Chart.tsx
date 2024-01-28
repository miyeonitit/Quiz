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
    { x: "correctAnswer", y: correctAnswerLength },
    { x: "incorrectAnswer", y: incorrectAnswerLength },
  ];

  return (
    <div data-cy="quizChart">
      <VictoryPie
        colorScale={["green", "red"]}
        data={data}
        width={300}
        height={300}
      />
    </div>
  );
};

export default Chart;
