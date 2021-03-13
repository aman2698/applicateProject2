import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Cart = (props) => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem("cart")));
  console.log(data);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("cart")));
  }, []);
  return (
    <div>
      {data &&
        data.map((e) => {
          return (
            <Card key={e.product} className="absolute">
              <CardContent>
                <Typography>
                  Product No - {e.productNo && e.productNo}
                </Typography>
                <Typography>Product Name - {e.product && e.product}</Typography>
                <Typography>Cost - {e.cost && e.cost}</Typography>
              </CardContent>
            </Card>
          );
        })}
    </div>
  );
};

Cart.propTypes = {};

export default Cart;
