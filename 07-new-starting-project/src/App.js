import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      {/*
        Switch : 여러 Route 중에서 단 하나만 활성화시키도록 한다.
        -> /favorites가 '/'를 렌더링하지 않고, '/favorites'만 렌더링 되게 한다.
        -> exact prop을 통해, 전체 경로와 매칭하도록 검색한다.
      */}
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
