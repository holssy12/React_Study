/*
  JSX = JavaScropt XML
*/

// components 디렉터리에 생성한 ExpenseItem 컴포넌트를 불러온다.
import Expenses from "./components/Expenses/Expenses";

// React 모듈 내부 동작을 알기 위해 import.
import React from "react";

// JSX 구문을 이용해, 자바스크립트 안에서 html로 작성된 구문을 return할 수 있다.
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    // 목표 상태.
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>
      {/*
        사용자 정의 컴포넌트는 아래와 같이 html 태그처럼 작성하여 사용할 수 있다.
        단, 규칙으로 첫 글자는 대문자여야 한다.
      */}
      <Expenses items={expenses} />
    </div>
  );

  // 위 코드를 React 모듈로 변환한 코드.
  // JSX 코드를 변환하기 위해선 React 모듈이 필요하지만,
  // 최신 셋업에서는 명시적으로 import하지 않아도, 내장되어 있다.
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
};

// App.js 파일을 내보내서 쓸 수 있게 한다.
export default App;
