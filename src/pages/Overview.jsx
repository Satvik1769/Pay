import Head from "../components/Head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";


export default function Overview(){
    return(
    <div className="flex bg-background w-[42rem]h-screen">
        <div className="relative z-20">
        <Head/>
        </div>
        
        <div className="relative z-10">
            <Nav/>
            <Hero/> 
  

        </div>
    </div>
    )

}