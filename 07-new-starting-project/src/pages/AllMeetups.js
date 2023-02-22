// useEffect : 특정 조건을 만족하면, 일부 코드를 실행하는 훅.
import { useState, useEffect } from "react";
import MeetupList from "../components/layout/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect()에 fetch를 넣었기 때문에,
  // 리액트가 이 함수를 실행할 때만 실행된다.
  // 두 번째 배열 인자에 아무것도 넣지 않으면, 컴포넌트가 수행될 때마다 실행된다.
  // 배열 인자에 변수가 존재한다면, 해당 변수의 값이 바뀔 때마다 실행된다.
  useEffect(() => {
    setIsLoading(true);
    // default는 GET 요청이기 때문에, 데이터를 취득할 수 있다.
    fetch(
      "https://react-getting-started-1a29c-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }

        // 데이터를 얻으면 로딩 종료.
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
