describe("Home", () => {
  it("사용자는 Home에 접속하고 퀴즈 풀기 버튼을 클릭할 수 있다", () => {
    // given - Home 화면에 접근한다
    cy.visit("http://localhost:3000/").as("homeComponent");
    cy.get("[data-cy=quizStartButton]").as("quizStartButton");

    // when - 사용자는 퀴즈 풀기 버튼을 클릭한다
    cy.get("@quizStartButton").click();

    // then - 퀴즈 풀기 페이지로 이동한다
    cy.url().should("include", "/quiz");
  });
});
