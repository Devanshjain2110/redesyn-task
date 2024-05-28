"use client";
import { Combine, MonitorPlay, Shirt } from "lucide-react";
import { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import woman from "../../public/Contents/woman.jpg"
import woman2 from "../../public/Collections/WhatsApp Image 2024-05-28 at 20.41.17_33a0c2c7.jpg"
import woman3 from "../../public/Products/woman3.jpg"

type sectionActive = "Content" | "Collections" | "Products";

function Content() {
  const [activeSection, setActiveSection] = useState<sectionActive>("Products");
  return (
    <MaxWidthWrapper className="flex flex-col mt-6">
      <div className="flex justify-between ">
        {/* Content */}
        <div
          className={`flex relative items-center cursor-pointer justify-center w-1/3  font-semibold transition-all duration-300 ease-in-out  text-[#8C8C8C] gap-x-1 ${
            activeSection === "Content" ? "text-[#1A3365] " : "text-[#8C8C8C]"
          }`}
          onClick={() => setActiveSection("Content")}
        >
          <MonitorPlay size={17} />
          <div className="font-groteskLight ">Content</div>
          <div
            className={`absolute w-full h-[2px] bg-[#1A3365] top-10 transition-all duration-300 ease-in-out ${
              activeSection === "Content" ? "opacity-100" : "opacity-0"
            }`}
          ></div>
          </div>
        {/* Collections */}
        <div
          className={`flex cursor-pointer relative items-center justify-center w-1/3  font-semibold  text-[#8C8C8C] gap-x-1 ${
            activeSection === "Collections"
              ? "text-[#1A3365] "
              : "text-[#8C8C8C]"
          }`}
          onClick={() => setActiveSection("Collections")}
        >
          <Combine size={17} />
          <div className="font-groteskLight ">Collections</div>
          <div
            className={`absolute w-full h-[2px] bg-[#1A3365] top-10 transition-all duration-300 ease-in-out ${
              activeSection === "Collections" ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>
        {/* Products */}
        <div
          className={`flex cursor-pointer relative items-center justify-center 
            w-1/3  font-semibold  text-[#8C8C8C] gap-x-1 ${
            activeSection === "Products" ? "text-[#1A3365] " : "text-[#8C8C8C]"
          }`
          }
          onClick={() => setActiveSection("Products")}
        >
          <Shirt size={17} />
          <div className="font-groteskLight ">Products</div>
          <div
            className={`absolute w-full h-[2px] bg-[#1A3365] top-10 transition-all duration-300 ease-in-out ${
              activeSection === "Products" ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>
      </div>
      <div className="mt-6">
        {activeSection === "Content" && (
          <div className=" grid grid-cols-2 pb-[90px]">
          {Array.from({ length: 10 }).map((_, index) => (
            <Image src={woman}  className="  px-2 rounded-xl py-2 " alt="Something"  key={index}  />
          ))}
          </div>
          )}
           {activeSection === "Collections" && (
          <div className=" grid grid-cols-2 pb-[90px]">
          {Array.from({ length: 10 }).map((_, index) => (
            <Image src={woman2}  className="  px-2 rounded-xl py-2 " alt="Something"  key={index}  />
          ))}
          </div>
          )}
           {activeSection === "Products" && (
          <div className=" grid grid-cols-2 pb-[90px]">
          {Array.from({ length: 10 }).map((_, index) => (
            <Image src={woman3}  className="  px-2 rounded-xl py-2 " alt="Something"  key={index}  />
          ))}
          </div>
          )}
      </div>
 
    </MaxWidthWrapper>
  );
} 

export default Content;
