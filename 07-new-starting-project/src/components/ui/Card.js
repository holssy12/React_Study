import classes from "./Card.module.css";

function Card(props) {
  // props.children : 특수한 prop으로, 모든 컴포넌트가 기본적으로 받아들이는 prop.
  // 오프닝과 클로징 태그 사이의 컴포넌트 텍스트가 내용이 된다.
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
