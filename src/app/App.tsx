import { Outlet } from "react-router-dom";

const App: React.FC<{}> = () => {
  return (
    <main className="app">
      <header className="header">
        <h1>All about cakes</h1>
      </header>
      <Outlet />
    </main>
  );
};

export default App;
