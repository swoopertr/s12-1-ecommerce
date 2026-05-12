import { Grid, Typography } from '@mui/material'
import React from 'react'

const Details = ({price,stock}) => {
    
  return (
    <>
      <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h5">{price}</Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {stock===0 ? "Out of Stock": "In Stock - Ready to ship"}
          </Typography>
        </Grid>
    </>
  )
}

export default Details
