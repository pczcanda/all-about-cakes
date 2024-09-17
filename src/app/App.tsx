import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import CakesPage from "../pages/Cakes/CakesPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CakePage from "../pages/CakePage/CakePage";

const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <main className="app">
              <header className="header">
                <h1>All about cakes</h1>
              </header>
              <Outlet />
            </main>
          }
        >
          <Route
            path="/"
            element={<CakesPage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/cakes/:cakeId"
            element={<CakePage />}
            errorElement={<ErrorPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
