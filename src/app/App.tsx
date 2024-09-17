import { useEffect, useState } from "react";
import { fetchAllCakes } from "../utils";
import { Snackbar } from "@mui/material";
import { AppError, CakesList } from "../types";

function App() {
  /* state */
  const [cakesList, setCakesList] = useState<CakesList>([]);
  const [errorFetchingCakesList, setErrorFetchingCakesList] = useState<
    AppError | undefined
  >();

  /* effects */
  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const allCakes = await fetchAllCakes();

        setCakesList(allCakes);
      } catch (e: any) {
        // handle Error
        setErrorFetchingCakesList({
          message: e.message || "Failed to fetch cakes!",
        });
      }
    };

    fetchCakes();
  }, []);

  /* events */
  const handleErrorFetchingCakesList = () => {
    setErrorFetchingCakesList(undefined);
  };

  return (
    <main className="app">
      <header className="header">
        <h1>All about cakes</h1>
      </header>

      {errorFetchingCakesList && (
        <Snackbar
          open={!!errorFetchingCakesList.message}
          onClose={handleErrorFetchingCakesList}
          message={errorFetchingCakesList.message}
        />
      )}
    </main>
  );
}

export default App;
