import Line from "./Line"
export default function Table(props){
    let size;
    if(props.size === 5){
        size=5;
      }
      else{
        size=6;
      }
    return(
        <>
<div className="flex w-[68rem] bg-wh ml-7">
  <div className={`w-1/${5} ml-7`}>
    <h1>Order ID</h1>
  </div>
  <div className={`w-1/${5} ml-7`}>
    <h1>Status</h1>
  </div>
  <div className={`w-1/${5} ml-7`}>
    <h1>Transaction ID</h1>
  </div>
  { props.size === 5 ? 
  <>
  <div className={`w-1/${size} ml-7`}>
    <h1>Refund Date</h1>
  </div>
  <div className={`w-1/${size} ml-7`}>
    <h1>Order Amount</h1>
  </div>
  </>
  :
  <>
   <div className={`w-1/${5} ml-7`}>
    <h1>Order Amount</h1>
  </div>
  <div className={`w-1/${5} ml-7`}>
    <h1>Transaction Fees</h1>
  </div>
  <div className={`w-1/${5} ml-7`}>
    <h1>Total</h1>
  </div>
 
  </>

  }
</div>
<Line size = {size} orderId="#281209" status="Successful" tx="131634495747" refund="Today,8:45 PM" order="1,125" order2="10,125" txFees ="1,125" total="9312"/>    
            <Line  size = {size} orderId="#281208" status="Pending" tx="131634495747" refund="Yesterday,8:45 PM" order="1,125" order2="10,125" txFees ="1,125" total="9312"/>    
            <Line  size = {size} orderId="#281207" status="Successful" tx="131634495747" refund="12 Jul 2023,8:45 PM" order="1,125" order2="10,125" txFees ="1,125" total="9312"/>    
            <Line  size = {size} orderId="#281206" status="Successful" tx="131634495747" refund="12 Jul 2023,8:45 PM" order="1,125" order2="10,125" txFees ="1,125" total="9312"/>    
            <Line  size = {size} orderId="#281205" status="Successful" tx="131634495747" refund="12 Jul 2023,8:45 PM" order="1,125" order2="10,125" txFees ="1,125" total="9312"/>    
            <Line  size = {size} orderId="#281204" status="Successful" tx="131634495747" refund="12 Jul 2023,8:45 PM" order="1,125" order2="10,125" txFees ="1,125" total="9312"/>    
            <Line  size = {size} orderId="#281203" status="Successful" tx="131634495747" refund="12 Jul 2023,8:45 PM" order="1,125" order2="10,125" txFees ="1,125" total="9312"/>  
            
        </>
    )
}