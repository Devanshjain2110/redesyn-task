import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import profileBg from "../../public/profilebg.jpg";
import profile from "../../public/profile.jpg";
import tick from "../../public/bluetick.png";
import Link from "next/link";
import { ArrowLeft, Github, Link2, Linkedin, Plus, Shapes, Share2, UserCheck, X } from "lucide-react";
import { Dialog, DialogContent, DialogFooter, DialogTrigger } from "./ui/dialog";

function Profile() {
  return (
    <MaxWidthWrapper className="relative z-10">

      <div className="flex   flex-col">
    
        <Image
          src={profileBg}
          alt="Profile Picture"
          className="object-cover h-44 z-0"
        />
        <div className="flex flex-col">
          <div className="flex">
            <Image
              src={profile}
              alt="Profile Picture"
              className="object-cover h-24 w-24 rounded-full z-10 ml-3 -mt-12 border-2 border-white ring-2"
            />
            <div className=" flex flex-col  px-4 pt-2">
              <div className="font-GroteskMedium truncate max-w-56 text-blue-950">
                starchild2.0_by_krissannbasor
              </div>
              <div className="text-xs font-extrabold text-blue-700/70 flex items-center justify-center py-[2px] rounded-md bg-blue-400/50 w-14">
                <div> Actor</div>
              </div>
            </div>
          </div>
        </div>
        {/* Profile Details */}
        <div className="flex flex-col px-5 mt-2">
          <div className=" text-xs text-cyan-800 font-semibold">
            Equalist | Animal Lover | Happy Child
          </div>
          <div className=" text-xs text-cyan-800 font-semibold">
            Social Media - krissann@theplugmedia.in
          </div>
          <div className=" text-xs text-cyan-800 font-semibold">
            @theplugmedia.in
          </div>
          <div className=" text-xs text-cyan-800 font-semibold">
            Acting Inquiries on -{" "}
          </div>
          <div className=" text-xs text-cyan-800 font-semibold">
            teamkrissann@gmail.com@talentgram.agency{" "}
          </div>
          <Link
            className="flex gap-x-1 text-xs text-cyan-800 items-center  font-extrabold underline"
            href="https://www.instagram.com/virat.kohli/"
            target="_blank"
          >
            <Link2 size={17} className="-rotate-45" />
            https://www.instagram.com/virat.kohli/
          </Link>
        </div>
        {/* Product and Followers details */}
        <div className="flex justify-between mt-4 px-6">
          {/* Products */}
          <div className="flex flex-col items-center justify-center ">
            <div className="flex font-GroteskBook gap-x-[2px] items-center ">
              <Shapes size={18} className="text-blue-700" />
              <div className="text-blue-700/90 text-xl mt-[1px] font-extrabold">
                52
              </div>
            </div>
            <div className="text-blue-950 text-xs font-GroteskMedium  ">
              products
            </div>
          </div>
          {/* Followers */}
          <div className="flex flex-col items-center justify-center ">
            <div className="flex font-GroteskBook gap-x-[2px] items-center ">
              <UserCheck size={18} className="text-blue-700" />
              <div className="text-blue-700/90 text-xl mt-[1px] font-extrabold">
                1M
              </div>
            </div>
            <div className="text-blue-950 text-xs font-GroteskMedium  ">
              followers
            </div>
          </div>
          {/* Follow Button */}
          <div className="flex gap-x-1  py-[2px] my-auto px-7 rounded-xl items-center justify-center bg-[#592EBF] followShadow text-white ">
            <Plus size={21} />
            <div className="font-groteskLight tracking-wide ">Follow</div>
          </div>
        </div>
      </div>
      <div className="absolute top-4  text-white z-40 w-full px-4  flex justify-between">
        <div className="flex">
        <ArrowLeft size={22}/>
        <div className="flex ml-2">
          <div className="truncate w-52">Starchild 2.0 by krissannsannn</div>
          <Image src={tick} alt="tick" className="ml-2 mt-1 h-4 w-4"/>
        </div>
        </div>
     
        <Dialog>
      <DialogTrigger asChild>
      <Share2 size={22} className="ml-2" />
      </DialogTrigger>
      <DialogContent className="bg-black flex flex-col text-white border-none max-w-80 rounded-xl outline-none">
        <div className="-mt-2">Share</div>
        <div className="flex gap-x-5">
          <Link href={`https://twitter.com/devansh_webdev`} target="_blank" className="rounded-full border border-white p-2">
            <X size={20} />
          </Link>
          <Link href={`https://github.com/Devanshjain2110`} target="_blank" className="rounded-full border border-white p-2">
            <Github size={20} />
          </Link>
          <Link href={`https://www.linkedin.com/in/devanshja/`} target="_blank" className="rounded-full border border-white p-2">
            <Linkedin size={20} />
          </Link>
        </div>
      </DialogContent>
    </Dialog>
      </div>
      
    </MaxWidthWrapper>
  );
}

export default Profile;
