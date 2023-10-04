"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Menu from "./components/menu";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header>
      <div className="container mx-auto py-2 sm:py-4">
        <div className="flex justify-between items-center">
          <div className="logo">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={362}
                height={95}
                priority
                loading="eager"
                className="max-w-[100%] w-[150px] sm:w-[200px] md:w-[300px]"
              />
            </Link>
          </div>
          <div>
            <Menu />
          </div>
          <div>
            <Link
              href="/contact"
              className="hover:text-opacity-50 hover:text-primary transition-all"
            >
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
