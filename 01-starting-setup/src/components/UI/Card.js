import "./Card.css";

function Card(props) {
  // children은 예약어이다. 즉, 따로 선언하지 않았더라도 바로 사용 가능.
  // children을 사용하여, Card 태그 사이에 있는 컨첸츠에 적용 가능.
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
