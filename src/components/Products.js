import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

function Products() {
  const { state } = useLocation();
  const [productsData, setProductsData] = useState();
  const { push } = useHistory();

  const getData = useCallback(() => {
    axios
      .get("https://624ad9e1fd7e30c51c128ec3.mockapi.io/api/v1/products")
      .then((res) => {
        setProductsData(res.data);
      });
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleClickDetail = (e) => {
    const { id } = e.target;
    push({
      pathname: "/productDetail",
      search: `?product=${id}`,
      // state: { id: id }
    });
  };

  if (!state) return <Redirect to={"/login"} />;
  return (
    <div>
      <div className="text-end">
        <Button onClick={() => push("/createProducts")} className="m-2">
          Create
        </Button>
      </div>
      <CardGroup className="gap-3 container mt-5">
        {productsData?.map(({ id, name, price, category, image, color }) => (
          <Card key={id}>
            <CardImg alt="Card cap" src={image} top width="100%" />
            <CardBody>
              <CardTitle tag="h5">{name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Price: {price}
              </CardSubtitle>
              <CardText>Category: {category}</CardText>
              <Button
                style={{ backgroundColor: color }}
                id={id}
                onClick={handleClickDetail}
              >
                Button
              </Button>
            </CardBody>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
}

export default Products;
