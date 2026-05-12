import React from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography, Container, Divider } from "@mui/material";
import ProductImg from "../components/Product/ProductImg";
import { ProductDetailImage } from "../components/Product/Detail/ProductDetailImage";
import Details from "../components/Product/Detail/Details";


const ProductDetail = () => {

  const { id } = useParams();

  return (

    <Container sx={{ mt: 4 }}>

      <Typography variant="h4" gutterBottom>

        Product Detail: {id}

      </Typography>

      <Grid container spacing={4}>

        <ProductDetailImage 
            src={"https://dummyimage.com/400x400/000/fff"} 
            description={`Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptatem harum fuga, sit dolores excepturi.`}  />
        

        <Details price={"99$"} stock={0}/>

      </Grid>



      <Divider sx={{ my: 4 }} />


      <Typography variant="h6">Full Description</Typography>

      <Typography variant="body2" paragraph>

        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia laudantium 

        esse ipsum facilis laborum libero. Consequuntur rem perferendis sunt sapiente 

        omnis vel sint magni id explicabo esse provident corporis magnam possimus 

        assumenda culpa soluta nisi veniam dolores.

      </Typography>

    </Container>

  );

};



export default ProductDetail;