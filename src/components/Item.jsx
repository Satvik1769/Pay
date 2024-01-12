export default function Item(props){

    return(
        <div className={`flex  mt-1 ml-2 }`} style={{backgroundColor: props.background, borderRadius:10, maxWidth:"85%" }}>
            <img src={props.source} alt="source" className="mx-10" style={{ height:30, width:20, borderRadius: 40}}/>
            <h4 className="text-white my-0.5">{props.text}</h4>
        </div>
    )
}