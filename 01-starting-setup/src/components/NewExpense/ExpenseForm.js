import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  // event : 기본적으로 얻을 수 있는 이벤트 객체.
  const titleChangeHandler = (event) => {
    console.log(event);
    // event.target.value : 개발자 도구를 통해 확인할 수 있는 프로퍼티로,
    // 이벤트가 발생했을 때 입력된 값을 얻을 수 있다.
    // console.log(event.target.value);
    //
    // state에 저장된 (매개변수로 넘어간) 상태는 컴포넌트 리로딩에 관계없이 저장되어 있다.
    //setEnteredTitle(event.target.value);

    // setUserInput({
    //   // ...userInput : 객체의 모든 키와 값을 복사해서, 이 새로운 객체에 추가한다.
    //   ...userInput,
    //   enteredTitle: event.target.value, // enteredTitle의 값만 오버라이드.
    // });

    // 함수를 활용하면, 항상 최신의 이전 상태를 갖고 오도록 보장할 수 있다?
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);

    setUserInput({
      ...userInput,
      enteredAmount: event.target.value, // enteredTitle의 값만 오버라이드.
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);

    setUserInput({
      ...userInput,
      enteredDate: event.target.value, // enteredTitle의 값만 오버라이드.
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            stemp="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
