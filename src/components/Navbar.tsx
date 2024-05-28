import {
  ChevronUpIcon,
  CircleX,
  Compass,
  Cross,
  LucideHome,
  PiggyBank,
  Store,
  X,
} from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import MenuItem from "./MenuItem";

function Navbar() {
  return (
    <MaxWidthWrapper className=" bottom-0 fixed   bg-black h-[80px] font-groteskLight  ">
      <div className="flex justify-between  gap-x-2  pt-4">
        {/* Home */}
        <div className="flex flex-col items-center cursor-pointer
         w-[75px]  gap-y-1 text-white justify-center">
          <LucideHome className="" />
          <div className="text-xs">Home</div>
        </div>
        {/* Explore */}
        <div className="flex flex-col items-center cursor-pointer
         w-[75px] mr-1 gap-y-1 text-white justify-center">
          <Compass />
          <div className="text-xs">Explore</div>
        </div>
        {/* Get Started */}
        <Drawer>
        <DrawerTrigger asChild>
        <div className="flex flex-col items-center w-[82px]  cursor-pointer
         -mt-2  gap-y-1 text-white   justify-center">
          <div>
            <div className="rounded-full bg-zinc-900 relative z-40 p-1 shadow-[#592EBF] shadow-md  ">
              {" "}
              <ChevronUpIcon />{" "}
         
            </div>

          </div>
          <div className="text-xs text-nowrap">Get Started</div>
        </div>
        </DrawerTrigger>
        <DrawerContent className="mx-auto max-w-[450px] bg-black outline-none border-none">
        <div className="mx-auto w-full max-w-sm">
        <div className="px-6 pt-6 ">
<MenuItem />
        </div>
    
          <DrawerFooter>
       
            <DrawerClose className=" flex items-center justify-center mx-auto mt-10 outline-none w-12 h-12 border border-white rounded-full" >
            <X className="text-white" size={32} />
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
        </Drawer>
        {/* Earnings */}
        <div className="flex flex-col items-center w-[75px] ml-1 cursor-pointer
         gap-y-1  text-white justify-center">
          <PiggyBank />
          <div className="text-xs">Earnings</div>
        </div>
        {/* My Store */}
        <div className="flex flex-col items-center w-[75px] cursor-pointer
         gap-y-1   text-white justify-center">
          <Store />
          <div className="text-xs">My Store</div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Navbar;
