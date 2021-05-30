import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCard } from "@material-ui/icons";

const Product = ({ product }) => {
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image="" title={product.name} />
      <CardContent>
        <div className="classes.cardContent">
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price}</Typography>
        </div>
        <Typography variant="h2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.CardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCard />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
