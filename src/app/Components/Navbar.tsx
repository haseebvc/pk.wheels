import Link from "next/link"

export default function Navbar() {
    return (
        <div>
            <header>
                <div className= "bg-[#03040B] flex w-full h-10">
                    
                <div className="flex ml-20 items-center">  
                <img src="/images/Smartphone.png" alt="mobile" 
                 width={20}
                 height={1}/>
               

             <div className="text-xs text-white">
                <Link href="#" target="_blank">Download App via SMS</Link></div>
                 </div>

                    <div className="text-md flex w-full justify-end mr-24 text-white gap-3 items-center">
                    <Link className="text-red-900 font-bold text-2xl" href="#" target="_blank">اردو</Link>
                    <div className="text-gray-500">|</div> 
                        <Link href="#" target="_blank">Sign Up</Link> 
                        <div className="text-gray-500">|</div> 
                        <Link href="#" target="_blank">Sign In</Link>
                    </div>
                </div>

                <div className="border-b-2 bg-[#C4C5C3] w-15 h-1 mx-44"></div>

                <nav className="flex w-full bg-[#03040B] h-16 items-center ">
 
                        <div className="mr-20">
                            <img className="ml-20" src="/images/pw-logo.png" alt="Logo"
                                width={147}
                                height={70} /></div>

                        <div className="flex w-full justify-evenly mr-10 items-center">
                            <div className="text-white ">UsedCars</div>
                            <div className="text-white">NewCars</div>
                            <div className="text-white ">Bikes</div>
                            <div className="text-white">AutoStore</div>
                            <div className="text-white">Videos</div>
                            <div className="text-white">Forum</div>
                            <div className="text-white">Blog</div>
                            <div className="text-white">More</div>

                            <button className="bg-[#AE2828] text-white w-36 h-10 rounded-md font-bold">Post an Ad</button>
                        </div>
                   
                </nav>
            </header>
        </div>
    )
}