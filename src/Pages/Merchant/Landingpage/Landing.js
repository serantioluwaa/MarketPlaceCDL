import React from 'react'
import './Landing.css'
import Picture1 from '../../assets/images/picture1.png'
import Ecommercegif from '../../assets/images/ecommercegif.gif'
import Iconix from '../../assets/images/iconix.png'
import { ReactComponent as BrandIcon } from '../../assets/images/benzema+(1)_2.svg'
import { ReactComponent as BrandIcon2 } from '../../assets/images/bigbenz.svg'
import { ReactComponent as BrandIcon3 } from '../../assets/images/bigggbe.svg'
import LandingHeader from './LandingHeader'

export default function landingpage() {
  return (
    <div>
    <LandingHeader/>
    <div class="p-8 px-36 py-4 space-y-14">
      <div class="flex justify-between ">
        <div class="px-24 place-self-center space-y-4 ">
          <div class="font-extrabold text-5xl text-black">
            Sell your products the easy way!
          </div>
          <div class="space-y-8">
            <div class="text-xl text-neutral-800">
              We help your buyers make quick buying decisions.From here, money
              will no longer be their problem.
            </div>
            <button class="bg-blue-600 p-3 rounded-full text-white font-bold hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign Up Now
            </button>
          </div>
        </div>
        <div>
          <img
            class="motion-safe:animate-pulse"
            src={Picture1}
            width={1092}
            height={50}
            alt="picture1"
          />
        </div>
      </div>
      {/*SVG SECTION*/}
      <div class="flex col-span-3 justify-between px-11 space-x-24">
        <div class=" w-auto flex gap-3 bg-slate-50 p-7 rounded-lg shadow-lg">
          <div>
            <BrandIcon />
          </div>
          <div>
            <div class="text-xl font-bold">Worldwide Delivery</div>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. 
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            
          </div>
        </div>
        <div class=" w-auto flex gap-3 bg-slate-50 p-7 rounded-lg shadow-lg">
          <div>
            <BrandIcon2 />
          </div>
          <div>
            <div class="text-xl font-bold">Ship around the world!</div>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. 
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            
          </div>
        </div>
        <div class=" w-auto flex gap-3 bg-slate-50 p-7 rounded-lg shadow-lg">
          <div>
            <BrandIcon3 />
          </div>
          <div>
            <div class="text-xl font-bold">Pay with CDL!</div>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            At vero eos et accusam et justo duo dolores et ea rebum. 
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            
          </div>
        </div>
      </div>
      {/*VIDEO SECTION*/}{" "}
      <img
      class="gif"
      src={Ecommercegif}
      width={1640}
      height={587}
      alt="picture1"
    />
     {/*REVIEWS SECTION*/}
    <div>
        <div class="heading"> REVIEWS </div>{" "}
        <div class="heading2"> Success Stories From The Hub Sellers </div>{" "}
        <div class="heading3">
          {" "}
          Our mission is to help you succeed as business owners.{" "}
        </div>
      </div>{" "}
      <br/>
      <br/>
      <div class="heading2">
        What you need to know <br /> to start selling{" "}
      </div>
      </div>
      </div>
  )
}
