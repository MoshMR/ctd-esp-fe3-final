import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="flex flex-col md:flex-row justify-evenly items-center py-4 px-10 bg-gray-100 shadow-inherit  dark:bg-[#dbe1ec]">
        <img
          src="https://res.cloudinary.com/dyntsz5qv/image/upload/v1733428959/DH_lnqrjc.png"
          alt="DH-logo"
          className="h-16 w-64"
        />
        <div className="flex gap-4 justify-center items-center">
          <FaSquareFacebook className="h-7 w-7 text-black dark:text-gray" />
          <FaSquareInstagram className="h-7 w-7 text-black dark:text-gray" />
          <AiFillTikTok className="h-7 w-7 text-black dark:text-gray" />
          <IoLogoWhatsapp className="h-7 w-7 text-black dark:text-gray" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
