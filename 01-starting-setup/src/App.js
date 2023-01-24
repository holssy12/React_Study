/*
  JSX = JavaScropt XML
*/

// components 디렉터리에 생성한 ExpenseItem 컴포넌트를 불러온다.
import ExpenseItem from "./components/ExpenseItem";

// JSX 구문을 이용해, 자바스크립트 안에서 html로 작성된 구문을 return할 수 있다.
function App() {
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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

// App.js 파일을 내보내서 쓸 수 있게 한다.
export default App;
