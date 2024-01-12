export default function Line(props){
    let color,size;
    if(props.status === "Successful"){
        color = "Green";
    }
    else{
        color = "Grey";
    }
    if(props.size === 5){
      size=5;
    }
    else{
      size=6;
    }

    return(
        <>
                <div className="flex w-[68rem]  ml-7 p-1">
        <div className={`w-1/${5} ml-7`}>
          <h1>{props.orderId}</h1>
        </div>
        <div className={` flex w-1/${5} ml-7`}>
            <div className="mr-2 mt-1.5" style={{backgroundColor: color, height:10, width: 10, borderRadius:10}}></div>
          <h1>{props.status}</h1>
        </div>
        <div className={`w-1/${5} ml-7`}>
          <h1>{props.tx}</h1>
        </div>
        { props.size === 5 ?
        <>
  <div className={`w-1/${size} ml-7`}>
          <h1>{props.refund}</h1>
        </div>
        <div className={`w-1/${size} ml-7`}>
          <h1>{props.order}</h1>
        </div>
        </>
        :
        <>
        <div className={`w-1/${5} ml-7`}>
          <h1>{props.order2}</h1>
        </div>
        <div className={`w-1/${5} ml-7`}>
          <h1>{props.txFees}</h1>
        </div>
        <div className={`w-1/${5} ml-7`}>
          <h1>{props.total}</h1>
        </div>
      
        </>
        }
      </div>
      <hr style={{ borderColor:"grey", marginLeft:25, marginRight:25}}/>
        </>

    )
}