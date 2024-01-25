import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <div className="sticky w-full top-12 z-50">
      <div className="flex justify-between flex-grow mx-5 md:mx-20">
        <Image src={"/logo.svg"} width={68} height={68} alt="logo" />
        <div className="flex flex-col gap-1 italic text-right">
          <Link href={"#about"}>about</Link>
          <Link href={"#work"}>work</Link>
          <Link href={"#contact"}>contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
