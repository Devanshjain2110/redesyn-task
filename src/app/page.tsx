import Content from "@/components/Content";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";


export default function Home() {
  return (
   <MaxWidthWrapper className="bg-white h-full">
    <Profile />
    <Content />
    <Navbar />
   </MaxWidthWrapper>
  );
}
