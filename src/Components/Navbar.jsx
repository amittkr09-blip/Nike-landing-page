import React, { useState } from "react";

const Navbar = () => {
  const links = ["MENU", "LOCATION", "ABOUT", "CONTACT"];
  const [active, setActive] = useState("MENU");
  return (
    <div className="flex justify-between items-center px-20 py-2">
      <img
        className="h-15"
        src="https://images.seeklogo.com/logo-png/9/1/nike-logo-png_seeklogo-99478.png"
        alt=""
      />

      <ul className="flex gap-6 font-semibold">
        {links.map((link) => (
          <li
            key={link}
            onClick={() => setActive(link)}
            className={`cursor-pointer border-b-2 pb-1 transition-colors duration-300
              ${active === link ? "border-black" : "border-transparent "}`}
          >
            {link}
          </li>
        ))}
      </ul>
      <button className="px-2 py-1 bg-red-500 text-white font-semibold rounded active:scale-95 cursor-pointer">
        Login
      </button>
    </div>
  );
};

export default Navbar;
