import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Snackbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppError, Cake } from "../../types";
import { fetchCake } from "../../utils";

const CakePage: React.FC<{}> = () => {
  /* state */
  const [cake, setCake] = useState<Cake | undefined>();
  const [errorFetchingCake, setErrorFetchingCake] = useState<
    AppError | undefined
  >();

  /* hooks */
  const { cakeId } = useParams();

  /* effects */
  useEffect(() => {
    const fetchCakes = async () => {
      if (!cakeId) {
        return;
      }
      try {
        const cakeDetails = await fetchCake(cakeId);

        setCake(cakeDetails);

        // setCake({
        //   id: 1,
        //   name: "Carrot cake",
        //   comment: "The one and only",
        //   imageUrl: "https://placehold.co/600x400",
        //   yumFactor: 5,
        // });
      } catch (e: any) {
        // handle Error
        setErrorFetchingCake({
          message: e.message || "Failed to fetch cake!",
        });
      }
    };

    cakeId && fetchCakes();
  }, [cakeId]);

  /* events */
  const handleErrorFetchingCakesList = () => {
    setErrorFetchingCake(undefined);
  };

  return (
    <Box>
      {errorFetchingCake && (
        <Snackbar
          open={!!errorFetchingCake.message}
          onClose={handleErrorFetchingCakesList}
          message={errorFetchingCake.message}
          color="error"
        />
      )}

      {cake && (
        <>
          <h2>{cake.name}</h2>
          <Card>
            {cake.imageUrl && (
              <CardMedia
                component="img"
                height={240}
                image={cake.imageUrl}
                alt={`${cake.name} image`}
              />
            )}
            <CardContent>
              <Typography variant="body1">{cake.comment}</Typography>
            </CardContent>
          </Card>
        </>
      )}
    </Box>
  );
};

export default CakePage;
