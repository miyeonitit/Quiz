# Animal Quiz App

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/> <img src="https://img.shields.io/badge/CSS Modules-000000?style=flat-square&logo=css modules&logoColor=white"/> <img src="https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=recoil&logoColor=white"/>

<div style="display: flex;">
<div style="width: 20%;">
<img src="https://github.com/miyeonitit/Quiz/assets/96506411/2bfcadd7-5a87-479e-9afd-e14348fa140c" width="200"  />
</div>

<div style="width: 80%; padding-left:20px;">
- open API 사용 (https://opendb.com/api_config.php)
<br />
- 테스트 코드 작성 후 배포 예정
<br />
- 오답노트 기능 추가 예정
</div>
</div>

## Use skills

- **React ContextAPI** : `TimerContextProvider`로 타이머 카운트 초를 전역적으로 관리하여 타이머 기능 구현
- **Recoil** : 정답/오답 개수와 타이머 카운트 초 상태 관리
- **react-canvas-confetti** : 퀴즈 결과 페이지에서 confetti(빵빠레) 애니메이션 구현
- **recharts** : 퀴즈 결과 페이지에서 정답/오답 개수를 차트로 구현

## Project directory

```
┌─ 📁 src
├── 📁 assets
├── 📁 components
├── 📁 pages
     └── 📁 Home
     └── 📁 QuizPage
     └── 📁 QuizResult
├── 📁 store
├── 📁 type
└── 📁 utils
```

### pages

- `/Home` : 메인 페이지
- `/QuizPage` : 퀴즈를 풀 수 있는 페이지
- `/QuizResult` : 퀴즈 결과 페이지

### store

Recoil atom store

- `answerStore.ts` : 정답, 오답 개수를 저장
- `timerStore.ts` : 마지막 문제의 정답을 선택 후, 결과페이지로 이동하기까지의 타이머 문자열을 저장

### type

- `questionListType.ts` : open API의 question response type 저장

### utils

- `formatTimer.ts` : milliseconds 단위의 카운트 초를 `00:00` 단위로 형식을 변환하는 메서드
