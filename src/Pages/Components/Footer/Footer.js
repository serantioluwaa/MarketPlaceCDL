import React from "react";
import loga from "../src/assets/images/CDL MarketHub@2x white.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Appfooter2() {
  return (
    <div>
    <div class="p-10 bg-slate-800 text-white">
      <div class="grid grid-cols-4 gap-28 p-6">
        <div>
          <img src={loga} alt="senior" />
        </div>

        <div class="space-y-2">
          <div class="text-2xl font-extrabold">COMPANY</div>
          <br />
          About CDL MarketHub
          <p />
          CDL Pay
          <p />
          Terms & Conditions
          <p />
          Privacy Policy
        </div>

        <div class="space-y-2">
          <div class="text-2xl font-extrabold">COMPANY</div>
          <br />
          Help & Support
          <p />
          How to Sell on CDL MarketHub
        </div>

        <div class = " ">
                <div class = "text-2xl font-extrabold">Connect with Us</div>
                <br/>
                <div class = "grid grid-cols-4 ">
                <FacebookIcon fontSize="large"/>
                <InstagramIcon fontSize="large"/>
                <TwitterIcon fontSize="large"/>
                <LinkedInIcon fontSize="large"/>
                </div>
            </div>
      </div>
    </div>
    <div class = "font-extrabold text-center h-5 bg-slate-500 text-white">@2022 CDL MarketHub. All rights reserved.</div>
    </div>
  );
}
