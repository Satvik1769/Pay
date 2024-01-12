export default function Card(props){ 
   let  right = ">";
  let textColor,color,background;
   if(props.color === "blue"){
    textColor="white";
    background="#146EB4"
    color="white";
   }
   else{
    textColor="black";
    background="white";
    color="blue";

   }
    return(
        <div className={`mt-5 w-1/3 mr-7 `}>
            <div className={`p-1 py-4 px-2 rounded-t-xl `} style={{ backgroundColor: background }}>
            <div className={`flex align-center text-${textColor}`}>
            <h1 className=" mr-2 mb-5 ">{props.title}</h1>
            { props.color === "blue" ?
            <img src={require("../images/question_blue.png")} alt="question" style={{ height:"25px" , width:"20px"}}/>
            :
            <img src={require("../images/question.png")} alt="question" style={{ height:"25px" , width:"20px"}}/>
            }
            </div>
        
            <div className="flex justify-between">
            <h1 className={`text-2xl text-${textColor}`}>{props.value}</h1>
            <div className="flex">
            
            { props.orders> 0 && 
            <>
            <h3 className={` underline }`} style={{ color: color}}>{props.orders} orders </h3>
            <h3 style={{color : color}}>{right}</h3>
            
            </>

            }
           
            </div>
            </div>
            </div>
         { props.color === "blue" &&
            <div className="flex justify-between bg-blue-900  text-wh p-2 rounded-b-xl">
                <h3>Next Payout Date:</h3>
                <h3>Today, 04:00 PM</h3>

            </div>
}

        </div>
    )
}