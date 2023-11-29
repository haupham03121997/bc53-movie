import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomeModule from "./modules/home";

// import NotFound from "./modules/not-found";
import MovieLayout from "./layouts/MovieLayout";
// import Details from "./modules/details";
import { PATH } from "./routes/path";
// import Signin from "./modules/auth/Signin";
// import Signup from "./modules/auth/Signup";
import { UserProvider } from "./contexts/UserContext/UserContent";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";
// import AddMovie from "./modules/admin/MovieManagement/AddMovie";
// import Memo from "./modules/renders/Memo";
import { lazy, Suspense } from "react";

const HomeModule = lazy(() => import("./modules/home"));
const NotFound = lazy(() => import("./modules/not-found"));
const Details = lazy(() => import("./modules/details"));
const Signin = lazy(() => import("./modules/auth/Signin"));
const Signup = lazy(() => import("./modules/auth/Signup"));
const AddMovie = lazy(() => import("./modules/admin/MovieManagement/AddMovie"));
const Memo = lazy(() => import("./modules/renders/Memo"));

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path={PATH.HOME} element={<MovieLayout />}>
            <Route
              index
              element={
                <Suspense
                  fallback={
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: "100vh",
                        width: "100vw",
                        zIndex: 999,
                        background: "red",
                      }}
                    ></div>
                  }
                >
                  <HomeModule />
                </Suspense>
              }
            />
            <Route
              path="movie/:movieId"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Details />
                </Suspense>
              }
            />
            <Route
              path={PATH.SIGN_IN}
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Signin />
                </Suspense>
              }
            />
            <Route
              path={PATH.SIGN_UP}
              element={
                <Suspense fallback={<div>Loading</div>}>
                  <Signup />
                </Suspense>
              }
            />
            <Route
              path="prevent-re-render"
              element={
                <Suspense fallback={<div>Loading</div>}>
                  <Memo />
                </Suspense>
              }
            />
          </Route>

          <Route path={PATH.ADMIN} element={<AdminLayout />}>
            <Route
              index
              element={
                <Suspense>
                  <AddMovie />
                </Suspense>
              }
            />
          </Route>

          <Route
            path="*"
            element={
              <Suspense>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
