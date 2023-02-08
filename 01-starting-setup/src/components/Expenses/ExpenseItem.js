// useState는 리액트 훅 중에 하나이다.
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// props: 사용자 지정 요소에서 얻는 속성에 대한 모든 값을 갖고 있는 객체.
//  -> key와 value로 이루어진 파일 포맷이 React에 의해 자동으로 전달된다.
// 바깥으로부터(App.js) 얻기 때문에, 여기서 정의할 필요가 없다.
function ExpenseItem(props) {
  // useState를 쓰려면, 컴포넌트 함수 안에서 호출해야 하며,
  // 아래와 같은 2개의 요소를 가진 배열을 반환한다.
  // title : 관리되고 있는 변수
  // setTitle : 나중에 새로운 title을 설정하기 위해, 호출할 수 있는 함수
  //
  // 리액트에 의해 메모리에서 관리되며, state가 등록된 컴포넌트를
  // 업데이트할 수 있도록 한다. (= JSX 코드를 다시 평가한다.)
  const [title, setTitle] = useState(props.title);
  // setTitle이 호출 될 때마다 JSX 코드를 다시 평가하므로,
  // 아래 로그도 계속 출력된다.
  console.log("ExpenseItem을 React가 평가했습니다.");

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    // Card : Wrapper 컴포넌트.
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/*
        React에서는 모든 기본 이벤트를 on으로 시작하는 props로 노출한다.
        함수를 실행시키는 게 아니라, 포인터 지정만 해주고,
        클릭할 때마다 핸들러를 실행하도록 한다.
       */}
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
