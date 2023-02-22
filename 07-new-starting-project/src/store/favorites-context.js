import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,

  // 아래는 자동완성 쉽게 하려고 추가한 것...
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    // 이렇게 해도 작동은 되겠지만, 리액트가 작업 예약을 걸어두고 처리해
    // 최신 상태를 바로 업데이트하지 못한다.
    // setUserFavorites(userFavorites.concat(favoriteMeetup));

    // 자동으로 이전 상태를 받아오는 매개변수를 이용해 업데이트된 state를 반환한다.
    // -> 콜백 함수로 항상 최신 상태 유지 가능.
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  // context는 컴포넌트에 전달해야 하는 최신값을 저장하게 된다.
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
