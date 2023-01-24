import "./ExpenseItem.css";

// props: 사용자 지정 요소에서 얻는 속성에 대한 모든 값을 갖고 있는 객체.
//  -> key와 value로 이루어진 파일 포맷이 React에 의해 자동으로 전달된다.
// 바깥으로부터(App.js) 얻기 때문에, 여기서 정의할 필요가 없다.
function ExpenseItem(props) {
  // Date : JS에 내장된 날짜 셍성자.
  // Month는 0부터 1월이다.
  // const expenseDate = new Date(2022, 0, 24);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 294.67;

  const month = props.date.toLocaleString("en-us", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
