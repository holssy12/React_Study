// ReactDOM을 가져와서 쓰겠다.
import ReactDOM from "react-dom/client";

/*
    import로 파일을 가져올 때,
    css파일과 같은 경우는 확장자까지 써주어야 하자만,
    js파일, 서드파티 라이브러리는 확장자를 빼고 써야 한다.
*/
// 애플리케이션 전반에 걸쳐 index.css를 쓰겠다.
import "./index.css";

// App.js를 가져와서 쓰겠다.
// -> 컴포넌트를 가져온 것!
import App from "./App";

// React 애플리케이션의 root를 지정한다.
// -> React 애플리케이션이 렌더링될 주된 위치.
const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX 구문.
// root에 컴포넌트 App을 렌더링.
root.render(<App />);
