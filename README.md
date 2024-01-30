# My Animal Quiz 🐾

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/> <img src="https://img.shields.io/badge/CSS Modules-000000?style=flat-square&logo=css modules&logoColor=white"/> <img src="https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=recoil&logoColor=white"/>
<img src="https://img.shields.io/badge/Cypress-69D3A7?style=flat-square&logo=Cypress&logoColor=white"/> <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=white"/> <img src="https://img.shields.io/badge/open API-6BA539?style=flat-square&logo=openAPI&logoColor=white"/>

<img src="https://github.com/miyeonitit/Quiz/assets/96506411/2bfcadd7-5a87-479e-9afd-e14348fa140c" width="200"  />

## Use skills

- **React ContextAPI** : `TimerContextProvider`로 타이머 카운트 초를 전역적으로 관리하여 타이머 기능 구현
- **Recoil** : 정답/오답 개수와 타이머 카운트 초 상태 관리
- **Victory** : 퀴즈 결과 페이지에서 정답/오답 개수를 차트로 구현
- **react-canvas-confetti** : 퀴즈 결과 페이지에서 confetti(빵빠레) 애니메이션 구현
- **react-uuid** : 한 문제의 고유 id를 랜덤으로 생성

## Project directory

```
┌─ 📁 src
├── 📁 assets
├── 📁 pages
     └── 📁 Home
     └── 📁 QuizPage
     └── 📁 QuizResult
├── 📁 components
├── 📁 store
├── 📁 type
└── 📁 utils
```

### pages

- `/Home` : 메인 페이지
- `/QuizPage` : 퀴즈를 풀 수 있는 페이지
- `/QuizResult` : 퀴즈 결과 페이지
- `/AnswerNotePage` : 오답노트 페이지

### components

컴포넌트 구분 기준

- 재사용 가능
- 컴포넌트의 독립성 (단일성, 응집도)

### store

Recoil atom store

- `answerStore.ts` : 정답, 오답 개수를 저장
- `timerStore.ts` : 마지막 문제의 정답을 선택 후, 결과페이지로 이동하기까지의 타이머 문자열을 저장
- `answerNoteStore.ts` : 사용자가 선택한 오답을 저장

### type

- `questionListType.ts` : open API의 question response type 저장
- `answerNoteDataType.ts` : 사용자가 선택한 오답의 정보 type 저장

### utils

- `formatTimer.ts` : milliseconds 단위의 카운트 초를 `00:00` 단위로 형식을 변환하는 메서드
- `calculateScore.ts` : 정답을 점수로 환산하는 메서드
- `updatedAnswerNoteData.ts` : Recoil `answerNoteStore`의 `answerNoteData`와 Firebase에, 이전 문제부터 현재 문제까지 순서대로 저장할 수 있는 메서드

## Cypress | E2E Test

### directory

```
┌─ 📁 cypress
├── 📁 e2e
     └── 📁 1-home
        └── home.cy.js
     └── 📁 2-quiz
        └── quiz.cy.js
     └── 📁 3-quizResult
        └── quizResult.cy.js
├── 📁 downloads
├── 📁 fixtures
└── 📁 support
```

> 이 Quiz 프로젝트의 주요 비즈니스 로직은 크게 Home(홈 메인), Quiz(퀴즈 페이지), Quiz Result(퀴즈 결과 페이지)에 속해 있기 때문에, 테스트 코드 또한 이 3개의 단위로 구성하였습니다.

- **home.cy.js** : 퀴즈 풀기 버튼으로 퀴즈 풀기를 시작할 수 있다
- **quiz.cy.js** : 답안 선택 후 정/오답 확인 및 다음 문제로 이동할 수 있다
- **quizResult.cy.js** : 퀴즈 총 소요시간과 정/오답 개수, 차트를 확인할 수 있다

### 선정 이유

- 개인적으로 Cypress가 Javascript Component 전용 Testing 프레임워크라는 점이 매력적으로 다가왔습니다.
- 사용자 중심의 e2e 테스트가 프론트엔드의 성격에 더 가깝다고 생각했습니다.
- Chrome DevTools에서 디버깅 모드가 실행되고, 코드를 변경할 때마다 자동으로 다시 로드되는 것이 장점이라 생각했습니다.
- 테스트가 실행될 때 가상 DOM 스냅샷을 만들어 줍니다. 가상 DOM과 함께, 테스트케이스 단계별로 성공/실패 여부와 어떤 상황이 발생되었는지 알 수 있는 것이 최대 장점이라 생각했습니다.

<img width="1418" alt="스크린샷 2024-01-28 오후 1 42 05" src="https://github.com/miyeonitit/Quiz/assets/96506411/87fd7017-593b-4806-942f-f158f687bf6a">

## Firebase | Database

> firebase를 사용하여, 사용자가 선택한 정답/오답을 Recoil store와 Firestore Database에 저장합니다.

**1. Firestore Database를 구성하였습니다.**

- 컬렉션 : quiz
- 문서 : question `${uuid}` (퀴즈 문제의 한 단위)
- 필드 : 사용자가 선택한 정/오답 데이터

<img width="1242" alt="스크린샷 2024-01-29 오후 11 03 50" src="https://github.com/miyeonitit/Quiz/assets/96506411/53c0d160-2ff1-40ff-8763-d53c4e67d101">

<br />

**2. Firestore Database에 저장되는 정답/오답에 대한 필드 형태는 아래와 같습니다.**

```
{
  id: string;
  question: string;
  answer_list: string[];
  correct_answer: string;
  selected_answer: string;
  memo: string;
};
```

**3. 오답노트 페이지에서 사용자가 풀이과정에 대한 메모를 적고, '저장' 버튼을 누르면 memo 필드가 update 됩니다.**

<img width="300" alt="스크린샷 2024-01-29 오후 10 55 43" src="https://github.com/miyeonitit/Quiz/assets/96506411/b365420d-30f1-443a-ae48-6cf53f39224e">
