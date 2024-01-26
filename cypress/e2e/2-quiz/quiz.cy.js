describe("Quiz Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/quiz").as("quizComponent");
  });

  it("문제가 시작되기 전, 로딩 화면이 보인다", () => {
    cy.get("[data-cy=fetchingDataLoading]").as("fetchingDataLoading");
  });

  it("문제가 시작되면 타이머가 카운트 된다", () => {
    cy.clock();

    cy.get("[data-cy=timerDisplay]").should("contain", "0");

    cy.tick(1000);

    cy.get("[data-cy=timerDisplay]").should("contain", "1");
  });

  it("4지선다형 답안을 선택하면 답안이 맞았는지 틀렸는지 바로 확인할 수 있고 다음 문항으로 이동할 수 있다", () => {
    cy.intercept(
      {
        method: "GET",
        url: "/api.php?amount=10&category=27&type=multiple",
      },
      {
        response_code: 0,
        results: [
          {
            type: "multiple",
            difficulty: "easy",
            category: "Animals",
            question: "What is the fastest  land animal?",
            correct_answer: "Cheetah",
            incorrect_answers: [
              "Lion",
              "Thomson&rsquo;s Gazelle",
              "Pronghorn Antelope",
            ],
          },
          {
            type: "multiple",
            difficulty: "medium",
            category: "Animals",
            question: "What is the scientific name of the Common Chimpanzee?",
            correct_answer: "Pan troglodytes",
            incorrect_answers: [
              "Gorilla gorilla",
              "Pan paniscus",
              "Panthera leo",
            ],
          },
          {
            type: "multiple",
            difficulty: "medium",
            category: "Animals",
            question: "The dish Fugu, is made from what family of fish?",
            correct_answer: "Pufferfish",
            incorrect_answers: ["Bass", "Salmon", "Mackerel"],
          },
          {
            type: "multiple",
            difficulty: "easy",
            category: "Animals",
            question: "How many teeth does an adult rabbit have?",
            correct_answer: "28",
            incorrect_answers: ["30", "26", "24"],
          },
          {
            type: "multiple",
            difficulty: "hard",
            category: "Animals",
            question: "What is the Gray Wolf&#039;s scientific name?",
            correct_answer: "Canis Lupus",
            incorrect_answers: [
              "Canis Aureus",
              "Canis Latrans",
              "Canis Lupus Lycaon",
            ],
          },
          {
            type: "multiple",
            difficulty: "hard",
            category: "Animals",
            question: "What is the scientific name of the cheetah?",
            correct_answer: "Acinonyx jubatus",
            incorrect_answers: ["Panthera onca", "Lynx rufus", "Felis catus"],
          },
          {
            type: "multiple",
            difficulty: "easy",
            category: "Animals",
            question: "What is Grumpy Cat&#039;s real name?",
            correct_answer: "Tardar Sauce",
            incorrect_answers: ["Sauce", "Minnie", "Broccoli"],
          },
          {
            type: "multiple",
            difficulty: "hard",
            category: "Animals",
            question:
              "Which of the following is another name for the &quot;Poecilotheria Metallica Tarantula&quot;?",
            correct_answer: "Gooty",
            incorrect_answers: ["Hopper", "Silver Stripe", "Woebegone"],
          },
          {
            type: "multiple",
            difficulty: "hard",
            category: "Animals",
            question:
              "To which biological phylum do all mammals, birds and reptiles belong?",
            correct_answer: "Chordata",
            incorrect_answers: ["Echinodermata", "Annelida", "Placazoa"],
          },
          {
            type: "multiple",
            difficulty: "hard",
            category: "Animals",
            question: "What is the scientific name of the Budgerigar?",
            correct_answer: "Melopsittacus undulatus",
            incorrect_answers: [
              "Nymphicus hollandicus",
              "Pyrrhura molinae",
              "Ara macao",
            ],
          },
        ],
      }
    ).as("getQuizData");

    cy.get("[data-cy=answerButton]").then((buttons) => {
      const BUTTON_LENGTH = 4;

      const randomIndex = Math.floor(Math.random() * BUTTON_LENGTH);

      cy.wrap(buttons[randomIndex]).click();
      cy.get("[data-cy=aboutAnswerInfoBox]");
      cy.get("[data-cy=nextQuizButton]");
    });
  });
});
