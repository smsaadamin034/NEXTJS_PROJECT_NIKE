"use client";

import Image from "next/image";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1, bigShoe2, bigShoe3, collection_background } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";


const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

  return (
    <section id="home" className="w-full min-h-screen flex flex-col xl:flex-row gap-10 justify-center max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:whitespace-nowrap xl:bg-white relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort and innovation for your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex flex-wrap items-start justify-start w-full mt-20 gap-16">
          {statistics.map((stats) => {
            return (
              <div key={stats.label}>
                <p className="text-4xl font-palanquin font-bold">{stats.value}</p>
                <p className="font-montserrat leading-7 text-slate-gray">{stats.label}</p>
              </div>
            )
          })}
        </div>

      </div>

      <div style={{ backgroundImage: `url(${collection_background.src})` }} className="relative flex-1 flex justify-center items-center sm:py-32 py-12">
        <Image src={bigShoeImage} alt="Big Shoe Image" width={610} height={500} className="object-contain relative z-10" />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[10%] sm:-bottom-[10%] sm:left-[10%] max-sm:px-6 ">
          {shoes.map((shoe) => {
            return (
              <div key={shoe}>
                <ShoeCard imageURL={shoe}
                  bigShoeImage={bigShoeImage}
                  changeBigShoeImage={(shoeImage) => { setBigShoeImage(shoeImage) }}
                />
                {/* <Image src={shoe.bigShoe}/> */}
              </div>
            )
          })}
        </div>
      </div>
    

    </section>
  )
}

export default Hero;