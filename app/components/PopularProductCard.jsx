import Image from "next/image";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
    return (
        <div className="flex flex-col flex-1 w-full max-sm:w-full">
            <Image src={imgURL} alt="product image" className="w-[280px] h-[280px]" />
            <div className="mt-8 flex gap-4 justify-start">
                <Image src={star} alt="rating icon" w={24} h={24}/>
                <p className="font-montserrat text-slate-gray leading-normal">(4.5)</p>
            </div>
            <h1 className="font-semibold font-palanquin text-2xl mt-2">{name}</h1>
            <p className="font-semibold font-monserrat text-2xl mt-2 text-coral-red">{price}</p>
        </div>
    )

}
export default PopularProductCard;