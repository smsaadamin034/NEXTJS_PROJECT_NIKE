import Image from "next/image";
import { star } from "../assets/icons";

const ReviewCard = ({imgURL,customerName, rating, feedback}) =>{
    return(
        <div className="flex flex-col justify-center items-center">
            <Image src={imgURL} alt="customer image" width={120} height={120} className="rounded-full"/>
            <p className="font-montserrat leading-7 text-slate-gray text-center mt-8 max-w-sm text-lg mx-auto">{feedback}</p>
            <div className="flex gap-2.5 mt-3 justify-center items-center">
                <Image src={star} alt="icon" width={24} height={24}/>
                <p className="font-montserrat text-slate-gray text-xl">{`(${rating})`}</p>
            </div>
            <h1 className="mt-1 font-palanquin text-3xl font-bold text-center">{customerName}</h1>
        </div>
    )
};

export default ReviewCard;
