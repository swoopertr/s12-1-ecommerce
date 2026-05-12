import { Grid, Typography } from "@mui/material";
import ProductImg from "../ProductImg";

export function ProductDetailImage({src, description}) {
  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <ProductImg src={src} />
      <Typography variant="body1" sx={{ mt: 2 }}>
        {description}
      </Typography>
    </Grid>
  );
}
