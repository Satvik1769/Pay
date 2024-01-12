import Item from "./Item";
import { useState } from "react";
export default function Head() {
  const [isMenuVisible, setIsMenuVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  return (
    <>
   
    { isMenuVisible ?
    <div className={`bg-secondary transition duration-300 delay-150 ease-in md:delay-300 w-128 xl:w-128 lg:w-64 py-2 h-screen ${isMenuVisible ? 'block' : 'hidden'}`}  >
      <div className="flex justify-between">
        <div className="flex">
          <div className="bg-white p-1 rounded-lg mx-5 ">
            <img src={require("../images/logo.png")} style={{width:50}} alt="Logo" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-white">Nishyan</h2>
            <a href="https://github.com/Satvik1769" className=" underline text-gray-100 decoration-gray-100">Visit Store</a>
          </div>
        </div>
        <button  onClick={toggleMenu}>
        <img src={require("../images/down.png")} className="mx-2" alt="down"/>
        </button>
       
    
      </div>
      <div className="flex flex-col mt-10 h-[70%]">
        <Item source={require("../images/home.png")} text={"Home"} background={"secondary"}/>
        <Item source={require("../images/orders.png")} text={"Orders"}  background={"secondary"} />
        <Item source={require("../images/products.png")} text={"Products"} background={"secondary"} />
        <Item source={require("../images/delivery.png")} text={"Delivery"}  background={"secondary"} />
        <Item source={require("../images/marketing.png")} text={"Marketing"}  background={"secondary"} />
        <Item source={require("../images/analytics.png")} text={"Analytics"}  background={"secondary"} />
        <Item source={require("../images/payouts.png")} text={"Payouts"}  background={"reqBlue"} />
        <Item source={require("../images/discount.png")} text={"Discounts"}  background={"secondary"} />
        <Item source={require("../images/audience.png")} text={"Audience"}  background={"secondary"} />
        <Item source={require("../images/appearance.png")} text={"Appearance"}  background={"secondary"} />
        <Item source={require("../images/plugin.png")} text={"Plugin"}   background={"secondary"}/>


      </div>
      <div className="flex mt-10 bg-gr rounded-lg items-center">
        <div >
          <img src={require("../images/wallet.png")} style={{ height:30, width:30, marginRight:30, marginLeft:10}}alt="wallet"/>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white">Available character</h1>
          <h1 className="text-white">222.40</h1>
        </div>
      </div>
    </div>
    :
    <div className="bg-seconday w-24 transition duration-300 delay-150 ease-out md:delay-300">
       <button  onClick={toggleMenu}>
        <img src={require("../images/down.png")} className="mx-2" alt="down"/>
        </button>
    </div>
    }
   </>
  );
}
