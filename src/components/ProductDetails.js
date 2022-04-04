import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

function ProductDetails() {
  const [products, setProducts] = useState();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const productId = params.get("product");

  const getData = useCallback(() => {
    axios.get(
        `https://624ad9e1fd7e30c51c128ec3.mockapi.io/api/v1/products/${productId}`
      )
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      });
  }, [productId]);

  useEffect(() => {
    getData();
  }, [getData]);
  console.log(products);

  return (
    <div>
      <CardGroup className="gap-3 container mt-5">
        <Card key={products?.id}>
          <CardImg alt="Card cap" src={products?.image} top width="100%" height={"500px"}/>
          <CardBody>
            <CardTitle tag="h5">{products?.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Price: {products?.price}
            </CardSubtitle>
            <CardText>Category: {products?.category}</CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}

export default ProductDetails;
