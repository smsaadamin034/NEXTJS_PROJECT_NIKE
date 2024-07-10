import Image from "next/image";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex items-center justify-between max-xl:flex-col-reverse max-container gap-10 ">
      <div className="flex justify-center items-center">
        <Image src={offer} alt="special offer" />
      </div>

      <div className="flex flex-col max-xl:w-full ">
        <h2 className="text-4xl font-bold font-palanquin">
          <span className="text-coral-red"> Special </span>
          Offer
        </h2>
        <p className="mt-4 font-montserrat  text-slate-gray text-lg leading-7 lg:max-w-full xl:max-w-3xl">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className="mt-4 font-montserrat  text-slate-gray text-lg leading-7 lg:max-w-full xl:max-w-3xl">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="mt-6 flex gap-4">
        <Button label="Shop Now" iconURL={arrowRight} />
        <button className="rounded-full justify-center items-center gap-2 px-7 py-4 border border-black font-montserrat text-lg text-slate-gray leading-none ">Learn more
        </button>
        </div>
        

      </div>

    </section>
  )
}

export default SpecialOffer;