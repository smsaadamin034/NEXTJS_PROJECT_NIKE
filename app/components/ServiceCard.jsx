import Image from "next/image";

const ServiceCard = ({ imgURL, label, subtext }) => {
    return (
        <div className="flex flex-1 flex-col shadow-3xl rounded-2xl px-10 py-16 sm:w-[350px] sm:min-w-[350px] w-full ">
            <div className="w-11 h-11 bg-coral-red flex justify-center items-center rounded-full">
                <Image src={imgURL} alt="service image" width={24} height={24} />
            </div>
            <h1 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h1>
            <p className="mt-5 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
        </div>
    )

};

export default ServiceCard;