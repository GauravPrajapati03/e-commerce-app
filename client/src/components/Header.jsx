import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Badge } from "@mui/material";
import { ShoppingCart, AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static" className="bg-white shadow-md">
      <Toolbar className="flex justify-between">
        <Link to="/" className="no-underline text-black">
          <Typography variant="h6" className="font-bold text-xl">
            MyShop
          </Typography>
        </Link>

        <div className="flex gap-4 items-center">
          <Link to="/cart" className="text-black">
            <IconButton
              size="large"
              aria-label="show cart items"
              color="inherit"
            >
              <Badge badgeContent={3} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Link>

          <Link to="/login" className="text-black">
            <IconButton size="large" color="inherit">
              <AccountCircle />
            </IconButton>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
