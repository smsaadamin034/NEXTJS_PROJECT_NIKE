"use client";
import Image from "next/image";
import { thumbnailBackground } from "../assets/images";

const ShoeCard = ({ imageURL, changeBigShoeImage, bigShoeImage }) => {
    const handleClick = () => {
      if (bigShoeImage !== imageURL.bigShoe) {
        changeBigShoeImage(imageURL.bigShoe);
      }
    };
  
    return (
      <div
        className={`border-2 rounded-xl ${bigShoeImage === imageURL.bigShoe
            ? "border-coral-red"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
        <div style={{ backgroundImage: `url(${thumbnailBackground.src})` }} className='flex justify-center items-center bg-hero bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
          <Image
            src={imageURL.bigShoe}
            alt='shoe colletion'
            width={127}
            height={103.34}
            className='object-contain'
          />
        </div>
      </div>
    );
  };
  
  export default ShoeCard;