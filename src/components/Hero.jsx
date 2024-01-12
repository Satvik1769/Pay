import Card from "./Card";
import Table from "./Table";
import { useState } from "react";
export default function Hero(){
    const [isClicked,setClicked] = useState(true);
    let color1,color2;
    function SetClicked(){
        setClicked(click => !click);

    }
    let  grey = "#D9D9D9";
    let blue = "#146EB4",size;
    if(isClicked){

        color1 = grey;
        color2 = blue;
        size =5;
        console.log(5);
    }
    else{
        color1 = blue;
        color2 = grey;
        size = 6;
        console.log(6);
    }
    return(
        <>
        
<div className="m-7">
            <h1 className="mt-5 font-semibold text-lg">Overview</h1>
            <div className="flex">
            <Card  title= "Next Payout" value={23000} orders={23} color="blue"/>
            <Card  title= "Amount Pending" value={"92,312.20"} orders={13} color="white"/>
            <Card title="Amount Processed" value={"23,92,312.19"} orders={0} color="white"/>
            </div>
            <h1 className="mt-5 font-semibold text-lg">Transactions | This Month</h1>

            <div className="flex mb-5 mt-5">
                <button className={` text-white font-bold py-2 px-4 rounded-full mr-5`} onClick={SetClicked} style={{ backgroundColor: color1}}>Payouts(22)</button>
                <button className= {` text-white font-bold py-2 px-4 rounded-full`} onClick={SetClicked} style={{ backgroundColor: color2}}>Refunds(6)</button>
            </div>

            <div className="flex justify-between" >
                <input type="text" className="p-2" placeholder=" &#128269; Order ID or Transaction ID" style={{ width: "250px" }}/>
                <div className="flex">
                <button className="flex items-center">
  Sort <span className="flex items-center"><img src={require("../images/sort.png")} alt="sort" style={{ height: 25, width: 25 }} /></span>
</button>

                    <button><span><img src={require("../images/download.png")} alt="download" style={{height:25,width:25, marginLeft:20}}/></span></button>
                </div>
            </div>
            
        </div>

        <Table size = {size}/>

        </>
    )
}