import React from "react";
import { PieChart, Pie } from "recharts";

type chartProps = {
  correctAnswerLength: number;
  incorrectAnswerLength: number;
};

const Chart: React.FC<chartProps> = ({
  correctAnswerLength,
  incorrectAnswerLength,
}) => {
  const data = [
    { name: "correctAnswer", value: correctAnswerLength, fill: "#006400" },
    { name: "incorrectAnswer", value: incorrectAnswerLength, fill: "#FF0000" },
  ];

  return (
    <div data-cy="quizChart">
      <PieChart width={500} height={500}>
        <Pie
          dataKey="quizChart"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
        />
      </PieChart>
    </div>
  );
};

export default Chart;
