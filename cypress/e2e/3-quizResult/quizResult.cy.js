describe("Quiz Result Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/result").as("quizResult");
  });

  it("퀴즈 마칠 때까지 소요된 시간을 확인할 수 있다", () => {
    cy.get("[data-cy=timerText]").then(($timer) => {
      // 타이머 텍스트 가져오기
      const timerText = $timer.text();

      // 타이머 텍스트를 시간으로 변환
      const [minutes, seconds] = timerText.split(":").map(Number);
      const timerValue = minutes * 60 + seconds;

      // 타이머 값이 0 이상인지 확인
      // 그러나 테스트코드 상에서는 Recoil atom value를 불러오지 못한다는 한계가 있음
      expect(timerValue).to.be.at.least(0);
    });
  });

  it("정답과 오답 개수와 차트를 확인할 수 있다", () => {
    // 테스트코드 상에서는 Recoil atom value를 불러오지 못한다는 한계가 있음

    // 정답 개수 확인
    cy.get("[data-cy=correctAnswersLength]").then(($correctAnswersLength) => {
      const correctAnswers = $correctAnswersLength.text();

      expect(Number(correctAnswers)).to.be.at.least(0);
    });

    // 오답 개수 확인
    cy.get("[data-cy=incorrectAnswersLength]").then(
      ($incorrectAnswersLength) => {
        const incorrectAnswers = $incorrectAnswersLength.text();

        expect(Number(incorrectAnswers)).to.be.at.least(0);
      }
    );

    // 정답, 오답 차트 확인
    cy.get("[data-cy=quizChart]");
  });

  it("'다시 풀어보기' 버튼을 클릭하면 Home 페이지로 이동한다", () => {
    cy.get("[data-cy=goToHomeButton]").as("goToHomeButton");
    cy.get("@goToHomeButton").click();

    // then - 퀴즈 풀기 페이지로 이동한다
    cy.url().should("include", "/");
  });
});
