import { Plus, ShoppingCart, Tag, Youtube } from "lucide-react"


function MenuItem() {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-3 ">
        {/* First Item */}
        <div className="w-40 flex flex-col bg-purple-800 relative text-white font-GroteskBook  p-2 h-28 rounded-2xl">
            <div className="font-semibold text-lg">ReEngage</div>
            <div className="flex gap-x-1">
                <div className="text-xs text-gray-200 text-wrap">Get Brand Deals</div>
                <Tag size={'60px'} className=" absolute bottom-0 right-2 mt-2"/>
            </div>
        </div>  
        {/* Second Item */}
        <div className="w-40 flex flex-col relative bg-pink-600 text-white font-GroteskBook  p-2 h-28 rounded-2xl">
            <div className="font-semibold text-lg">YT Merchshelf</div>
            <div className="flex ">
                <div className="text-xs text-wrap text-gray-200 w-[92px]">Sell products below Youtube videos</div>
                <Youtube className="absolute bottom-0 right-1" size={'70px'} />
            </div>
        </div> 
        {/* Third Item */}
        <div className="w-40 flex flex-col relative bg-fuchsia-700 text-white font-GroteskBook gap-y-1 p-2 h-28 rounded-2xl">
            <div className="font-semibold text-lg  leading-4">Shop-able content</div>
            <div className="flex gap-x-1">
                <div className="text-xs text-gray-200 w-24">Turn Content into earnings</div>
                <ShoppingCart size={'60px'} className="absolute bottom-1 right-2"/>
            </div>
        </div> 
        {/* Fourth Item */}
        <div className="w-40 flex flex-col relative bg-blue-600 text-white font-GroteskBook  p-2 h-28 rounded-2xl">
            <div className="font-semibold text-lg">ReCommend</div>
            <div className="flex gap-x-1">
                <div className="text-xs text-gray-200 w-24  text-wrap">Sell Branded Products</div>
                <Tag size={'60px'} className=" absolute bottom-0 right-2 mt-2"/>
            </div>
        </div> 
        {/* Add New Draft */}
        <div className="flex mt-8 gap-x-4 items-center font-groteskLight">
            <div className="text-white border border-white border-dashed   p-1"> <Plus />  </div>
            <div className="text-white font-bold ">My Drafts</div>
        </div>
    </div>
  )
}

export default MenuItem
