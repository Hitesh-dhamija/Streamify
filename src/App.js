import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import ErrorPage from "./pages/404/404Page";
import Footer from "./components/Footer/Footer";
import { routes } from "./route";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { fetchMovieFavorite } from "./actions/fireStoreActions";
import PrivateRoute from "./components/Shared/PrivateRoute";
import FavoriteList from "./pages/FavoriteList/FavoriteList";
import Loading from "./components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { setFavoriteList, setUser } from "./stored";

function App() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        dispatch(
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName,
            photoURL: firebaseUser.photoURL,
          }),
        );

        const newFavoriteList = await fetchMovieFavorite(firebaseUser.uid);
        dispatch(setFavoriteList(newFavoriteList));
      } else {
        dispatch(setUser(null));
        dispatch(setFavoriteList([]));
      }
    });

    return () => unsub();
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.search, location.pathname]);

  if (typeof user === "undefined") {
    return <Loading />;
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        {routes.map((item) => (
          <Route key={item.path} path={item.path} element={<item.element />} />
        ))}
        <Route
          path="/favorite-movie"
          element={
            <PrivateRoute>
              <FavoriteList />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
