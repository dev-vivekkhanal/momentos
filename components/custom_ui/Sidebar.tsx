import NavLinks from "./NavLinks";
import logo from "../../assets/logo.svg";
import Image from "next/image";
import { Courgette } from "next/font/google";
import { MenuIcon } from "lucide-react";
const courgette = Courgette({ weight: "400", subsets: ["latin"] });
const Sidebar = () => {
  return (
    <div className="flex md:flex-col  justify-around md:justify-between items-center  h-full py-5">
      <div className="md:space-y-10 flex md:flex-col gap-5 justify-around md:justify-start items-center ">
        <div className="hidden md:flex gap-2 items-center">
          <Image
            priority
            src={logo.src}
            height={55}
            width={55}
            alt="Momentos"
          ></Image>
          <h1
            className={`hidden lg:block text-xl font-semibold ${courgette.className}`}
          >
            Momentos
          </h1>
        </div>
        <div className="flex md:flex-col  justify-around md:gap-5  md:items-start w-full ">
          <NavLinks />
        </div>
      </div>
      <div className="hidden md:block">
        <MenuIcon />
      </div>
    </div>
  );
};

export default Sidebar;
