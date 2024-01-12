import Head from "../components/Head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";


export default function Overview(){
    return(
    <div className="flex bg-background w-[120rem] h-screen" >
        <div className="">
        <Head/>
        </div>
        
        <div className="">
            <Nav/>
            <Hero/> 
  

        </div>
    </div>
    )

}