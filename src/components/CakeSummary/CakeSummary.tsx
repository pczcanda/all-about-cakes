import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { CakeSummaryProps } from "./CakeSummaryProps";

const CakeSummary: React.FC<CakeSummaryProps> = ({ cake }) => {
  return (
    <Card>
      {cake.imageUrl && (
        <CardMedia
          component="img"
          height={240}
          image={cake.imageUrl}
          alt={`${cake.name}`}
        />
      )}
      <CardContent>
        <Typography variant="h2">{cake.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default CakeSummary;
