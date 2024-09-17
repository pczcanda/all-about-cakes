import { useEffect, useState } from "react";
import { fetchAllCakes } from "../utils";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Snackbar,
  Typography,
} from "@mui/material";
import { AppError, CakesList } from "../types";
import CakeSummary from "../components/CakeSummary/CakeSummary";
import NewCakeForm from "../components/NewCakeForm/NewCakeForm";

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
        // const allCakes = await fetchAllCakes();

        // setCakesList(allCakes);

        setCakesList([
          {
            id: 1,
            name: "Carrot cake",
            comment: "The one and only",
            imageUrl: "https://placehold.co/600x400",
            yumFactor: 5,
          },
        ]);
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

  const handleCloseNewCakeForm = () => {
    setIsAddingNewCake(false);
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
          color="error"
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

      {isAddingNewCake && (
        <Dialog open={isAddingNewCake} onClose={handleCloseNewCakeForm}>
          <DialogTitle>
            <Typography variant="h2">New Cake</Typography>
          </DialogTitle>
          <DialogContent sx={{ p: 2 }}>
            <NewCakeForm />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseNewCakeForm}>Cancel</Button>
            {/* <Button type="submit">Subscribe</Button> */}
          </DialogActions>
        </Dialog>
      )}
    </main>
  );
}

export default App;
