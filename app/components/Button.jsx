import Image from "next/image";

const Button = ({ label, iconURL }) => {
    return (
        <button className="flex rounded-full justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg text-white leading-none bg-coral-red ">
            {label}
            {iconURL &&
            <Image src={iconURL} alt="Button Icon" width={25} height={25}
                className="ml-2"
            />
            }
        </button>
    )
}

export default Button;
