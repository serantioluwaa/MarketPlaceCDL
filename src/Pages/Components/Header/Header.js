import React from 'react'
import { BrowserRouter as Route, Routes, Router, Link } from 'react-router-dom'
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { ReactComponent as ShopLogo } from "./assets/new/CDL MarketHub-2.svg";
import { Typography } from "@mui/material";
import Registration from './';
import Login from './Merchant/Login/merchantlogin';
import Cart from './Cart/cart';

function Header() {
  return (
    <div>
      <div class="bg-blue-100 px-2">
        <div class=" text-black px-12 flex justify-end font-extrabold p-2">
          <Link to="/Landingpage">Sell on CDL MarketHub</Link>
        </div>
      </div>
      <nav class=" sticky top-0 z-appBar">
        <div class="bg-white p-2 text-l">
          <div class=" text-black flex justify-between px-60 font-extrabold">
            <Typography class="flex self-center">
              <ShopLogo width={160} height={40} color="white" alt="Credit Direct Limited Logo" />
            </Typography>
            <div class="flex justify-between items-center text-black px-6 font-extrabold gap-4">

              <Link to="/Messages">
                <NotificationsNoneIcon />
              </Link>

              <Link to="/Cart" >
                <ShoppingCartOutlinedIcon />
              </Link>

              <Link to="/Login">
                <PersonOutlineIcon />
                Sign in or Register
              </Link>

            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header