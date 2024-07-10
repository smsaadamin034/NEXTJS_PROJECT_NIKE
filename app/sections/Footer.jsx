import Image from "next/image";
import { footerLogo } from "../assets/images";
import { socialMedia } from "../constants";
import { footerLinks } from "../constants";
import Link from "next/link";
import { copyrightSign } from "../assets/icons";
const Footer = () => {
  return (
    <section className="max-container">
      <div className="flex gap-20 max-lg:flex-col">
        <div className="flex flex-col">
          <Image src={footerLogo} alt="Nike Logo Footer" width={150} height={46} />
          <p className="font-montserrat text-white-400 text-base leading-7 sm:max-w-sm mt-6">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div className="flex gap-5 mt-8">
            {socialMedia.map((icon) => {
              return (
                <div key={icon.alt} className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
                  <Image src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>

              )
            })}

          </div>

        </div>

        <div className="flex justify-between flex-1 flex-wrap lg:gap-10 gap-20">
          {footerLinks.map((section) => {
            return (
              <div key={section.title}>
                <h4 className="text-white text-2xl font-montserrat leading-2 font-medium mb-6">{section.title}</h4>
                <ul>
                  {section.links.map((link) => {
                    return (
                      <li key={link.name} className="mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray">
                        <Link href={link.link}>{link.name}</Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )

          })}
        </div>
      </div>

      <div className="flex flex-1 justify-between mt-24 max-sm:flex-col max-sm:items-center">
          <div className="flex gap-2">
            <Image src={copyrightSign} alt="copyright sign" width={20} height={20} />
            <p className="font-montserrat text-md text-white-400">Copyright. All rights reserved.</p>
          </div>
          <p className="text-white-400 font-montserrat text-md ">Terms & Conditions</p>
        </div>
    </section>
  )
}

export default Footer;