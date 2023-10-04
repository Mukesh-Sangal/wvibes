import React from "react";
import Link from "next/link";

const Menu: React.FC = () => {
  return (
    <div className="main-menu">
      <ul className="flex justify-between items-center">
        <li>
          <Link
            href="/"
            className="hover:text-opacity-50 hover:text-primary transition-all"
          >
            Home
          </Link>
        </li>
        <li className="ml-16">
          <Link
            href="/services"
            className="hover:text-opacity-50 hover:text-primary transition-all"
          >
            Our Services
          </Link>
        </li>
        <li className="ml-16">
          <Link
            href="/about"
            className="hover:text-opacity-50 hover:text-primary transition-all"
          >
            About us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
