import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeModule from "./modules/home";
import NotFound from "./modules/not-found";
import MovieLayout from "./layouts/MovieLayout";
import Details from "./modules/details";
import { PATH } from "./routes/path";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.HOME} element={<MovieLayout />}>
          <Route index element={<HomeModule />} />
          <Route path="movie/:movieId" element={<Details />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
