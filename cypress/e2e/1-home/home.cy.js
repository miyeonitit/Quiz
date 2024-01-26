describe("Home Page", () => {
  it("메인에서 '퀴즈 풀기' 버튼을 클릭하여 퀴즈 풀기를 시작한다", () => {
    // given - Home 화면에 접근한다
    cy.visit("http://localhost:3000/").as("homeComponent");

    // when - 사용자는 퀴즈 풀기 버튼을 클릭한다
    cy.get("[data-cy=quizStartButton]").as("quizStartButton");
    cy.get("@quizStartButton").click();

    // then - 퀴즈 풀기 페이지로 이동한다
    cy.url().should("include", "/quiz");
  });
});
