export default function Nav(){
return(
<div className="flex justify-between mt-2  2xl:mt-4 w-[72rem]">
                <div className="flex">
        <h1 className="text-lg mx-10">Payouts</h1>
        <div className="flex item-center">
        <img src= {require("../images/question.png")} style={{ height:20,width:15}}alt="ques"/>
        <h5 className="text-bl ml-1 mr-10">How it works</h5>
            </div> 
    
                </div>

                <div className="bg-white">
        <input type="text" className=" p-1 border-purple-700" placeholder=" &#128269; Search features, tutorials, etc." style={{ width:300}}/>
                </div>

        <div className="flex">
<img src={require("../images/message.png")} alt="message" style={{height:25,width:25}}/>
<img src={require("../images/love.png")} alt="love" style={{height:25,width:25}}/>
        </div>

            </div>
           
)

}