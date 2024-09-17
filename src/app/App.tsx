import { useEffect, useState } from "react";
import { fetchAllCakes } from "../utils";
import { Box, Button, Snackbar } from "@mui/material";
import { AppError, CakesList } from "../types";
import CakeSummary from "../components/CakeSummary/CakeSummary";

function App() {
  /* state */
  const [cakesList, setCakesList] = useState<CakesList>([]);
  const [errorFetchingCakesList, setErrorFetchingCakesList] = useState<
    AppError | undefined
  >();

  const [isAddingNewCake, setIsAddingNewCake] = useState<boolean>(false);

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

  const handleViewNewCakeForm = () => {
    setIsAddingNewCake(true);
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

      <Box mb={4}>
        <Button onClick={handleViewNewCakeForm}>Add cake</Button>{" "}
      </Box>

      {!errorFetchingCakesList && (
        <Box component="ul">
          {cakesList.map((cake) => {
            return (
              <Box
                component="li"
                role="listitem"
                mb={2}
                key={`Cake-${cake.id}`}
              >
                <CakeSummary cake={cake} />
              </Box>
            );
          })}
        </Box>
      )}
    </main>
  );
}

export default App;
