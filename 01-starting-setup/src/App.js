/*
  JSX = JavaScropt XML
*/

// components 디렉터리에 생성한 ExpenseItem 컴포넌트를 불러온다.
import ExpenseItem from "./components/ExpenseItem";

// JSX 구문을 이용해, 자바스크립트 안에서 html로 작성된 구문을 return할 수 있다.
function App() {
  return (

    // 목표 상태.
    <div>
      <h2>Let's get started!</h2>
      <p>This is also visible!</p>

      {/*
        사용자 정의 컴포넌트는 아래와 같이 html 태그처럼 작성하여 사용할 수 있다.
        단, 규칙으로 첫 글자는 대문자여야 한다.
      */}
      <ExpenseItem></ExpenseItem>

    </div >
  );
}

// App.js 파일을 내보내서 쓸 수 있게 한다.
export default App;
