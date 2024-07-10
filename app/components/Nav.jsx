import { headerLogo } from "../assets/images";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../constants";
import {hamburger} from "../assets/icons/index";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute w-full z-10 ">
      <nav className="flex justify-between items-center max-container">
        <Link href="/">
          <Image src={headerLogo} alt='Logo' height={29} width={130} />
        </Link>
        {/* <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          <li>Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Contact Us</li>
        </ul> */}

        <ul className="flex flex-1 justify-center items-center gap-20 max-lg:hidden">
          {navLinks.map((navigationLinks) => (
            <li key={navigationLinks.label}>
              <Link href={navigationLinks.href}
              className="font-montserrat leading-normal text-lg text-slate-gray">{navigationLinks.label}</Link>
            </li>
          ))}
        </ul>
        <Image className="lg:hidden" src={hamburger} alt="hamburger icon" width={25} height={25}/>
      </nav>
    </header>
  )
}

export default Nav;