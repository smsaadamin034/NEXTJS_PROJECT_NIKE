import Button from "../components/Button";
import { shoe8 } from "../assets/images";
import Image from "next/image";

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">

        <h2 className="text-4xl font-bold font-palanquin lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality </span>Shoes
        </h2>
        <p className="mt-4 font-montserrat  text-slate-gray lg:max-w-lg text-lg leading-7">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className="mt-4 font-montserrat  text-slate-gray lg:max-w-lg text-lg leading-7">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-16">
          <Button label="View Details" className="inline-block" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <Image src={shoe8} alt="super quality shoe image" />
      </div>


    </section>
  )
}

// 
export default SuperQuality;