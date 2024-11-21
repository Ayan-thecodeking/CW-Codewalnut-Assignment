import React from "react";
import Image from "next/image";
import logo from "../../assets/images/pokemon-logo.png";
import pokeball from "../../assets/images/pokeball.png"

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-2 justify-center sm:justify-start">
          <Image
            src={logo}
            alt="Pokemon logo"
            className="h-10 w-20 sm:h-12 sm:w-24 lg:h-16 lg:w-32"
          />
        </div>

        {/* pokeball for mobile view  */}
        <div className=" max-w-sm md:hidden sm:justify-end">
        <Image
            src={pokeball}
            alt="pokemon ball"
            className="h-8 w-12 sm:h-10 sm:w-20 "
          />
        </div>
      </div>

    </header>
  );
};

export default Header;
