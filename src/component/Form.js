import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { product } from "./data";
import { Link } from "react-router-dom";
const Form = (props) => {
  var arr = [];
  const [data, setData] = useState(null);
  const [show, setShow] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (localStorage.getItem("cart")) {
      arr = JSON.parse(localStorage.getItem("cart"));
    }
    if (!arr || arr !== []) {
      arr.push(data);
      localStorage.setItem("cart", JSON.stringify(arr));
      arr = [];
    } else {
      console.log(arr);
    }
  };
  const onHandle = (f) => {
    const found = product.find(
      (e) => e.productNo === document.getElementById("check").value
    );
    setData(found);
  };
  return (
    <div>
      <Card className="absolute">
        <CardContent>
          <form onSubmit={(e) => onSubmit(e)}>
            <select
              id="check"
              name="check"
              class=""
              onChange={(f) => {
                onHandle(f);
              }}
            >
              <option value="">select product</option>

              {product &&
                product.map((e) => {
                  return (
                    <option key={e.productNo} value={e.productNo}>
                      {e.product}
                    </option>
                  );
                })}
              <input value />
            </select>{" "}
            <br />
            <a href="/cart">
              <button type="submit">Add to cart</button>
            </a>
            <a href="/cart">
              <button type="button">Go to cart</button>
            </a>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

Form.propTypes = {};

export default Form;
