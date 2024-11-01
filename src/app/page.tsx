import Image from "next/image";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Link from "next/link";


export default function Home() {
  return (
    <div> <br />  <br />

      <div className="flex justify-center">
        <fieldset className="text-center border-2 border-gray-300 h-80 w-[70%]  ">
          <legend>
            <h2 className="text-center text-gray-800 text-2xl font-semibold">
              Sell Your Car on PakWheels and Get the Best Price</h2>
          </legend>

          <div className="flex justify-center gap-40 mt-10 leading-8 text-sm">

            <div className="text-start">
              <h1 className="font-bold text-blue-900 text-xl leading-10">Post your Ad on PakWheels</h1>

              <li className="flex gap-2">
                <img src="/images/tick.png" alt="right" width={22} height={5} />
                <p>Post your Ad for Free in 3 Easy Steps</p> </li>

              <li className="flex gap-2">
                <img src="/images/tick.png" alt="rigth" width={22} height={5} />
                <p>Get Genuine offers from Verified Buyers</p> </li>

              <li className="flex gap-2">
                <img src="/images/tick.png" alt="rigth" width={22} height={5} />
                <p>Sell your car Fast at the Best Price</p> </li>

              <button className="bg-red-700 text-white px-11 py-2 rounded-md mt-5">Post Your Ad</button>
            </div>


            <div className="divide-x bg-slate-200 w-1 h-20">
              <div className="text-gray-600 text-2xl mt-20 font-sans">OR</div>
              <div className="divide-x bg-slate-200 w-1 h-24"></div>
            </div>


            <div className="text-left">
              <h1 className="font-bold text-blue-900 text-xl leading-10">Try PakWheels Sell It For Me</h1>

              <li className="flex gap-2">
                <img src="/images/tick.png" alt="right" width={22} height={5} />
                <p>Dedicated Sales Expert to Sell your Car</p> </li>

              <li className="flex gap-2">
                <img src="/images/tick.png" alt="right" width={22} height={5} />
                <p>We Bargain for you and share the Best Offer</p> </li>

              <li className="flex gap-2">
                <img src="/images/tick.png" alt="right" width={22} height={5} />
                <p>We ensure Safe & Secure Transaction</p> </li>

              <button className="bg-blue-600 text-white px-11 py-2 rounded-md mt-5">Register Your Car</button>
            </div>

          </div>
        </fieldset>
      </div> <br /> <br />


      <div className="box-border bg-gray-100 w-full h-auto p-4">

        <div className="flex">
          <h1 className="mx-48 mt-6 text-2xl font-bold text-gray-700">Featured New Cars</h1>
          <Link className= "mx-80 px-4 mt-6 ml-[20%] text-blue-500 text-sm" href="#" target="_blank">View All New Cars </Link>
        </div>

        <div>
          <ul className="ml-48 mt-8 text-xl text-gray-800">
            <Link className="hover:text-2xl hover:bg-blue-800 hover:text-white rounded-md" href="#" target="_blank">Popular</Link>
            <Link className="m-7 hover:text-2xl hover:bg-blue-800 hover:text-white rounded-md" href="#" target="_blank"> Upcoming</Link>
            <Link className="hover:text-2xl hover:bg-blue-800 hover:text-white rounded-md" href="#" target="_blank"> Newly Launched</Link>
          </ul>
        </div>


        <div className="border-t-2 w-auto mx-48 h-1 mt-3"></div>  <br />

        <div className="flex gap-5 ml-48">

          <div className="border-2 bg-white w-60 h-72">
            <img src="/images/download.jpeg" alt="Toyota Corolla"
              width={250}
              height={150} />

            <div className="text-center">
              <Link className="text-blue-900 font-bold text-center mt-2" href="toyota">Toyota Corolla</Link>
              <p className="text-green-500 text-sm">PKR 59.7 - 75.5 lacs</p>
              <div className="flex items-center gap-1 mt-4 ml-7">
                <img src="/images/stars.jpg" alt="" width={70} height={15} />
                <p className="text-gray-500 text-center text-sm">622 Reviews</p> </div>
            </div></div>


          <div className="border-2 bg-white w-60 h-72">
            <img src="/images/alto.jpeg" alt="Suzuki Alto"
              width={250}
              height={80} />

            <div className="text-center">
              <Link className="text-blue-900 font-bold  mt-2" href="alto">Suzuki Alto</Link>
              <p className="text-green-500 text-center text-sm">PKR 23.3 - 30.5 lacs</p>
              <div className="flex items-center gap-1 mt-4 ml-7">
                <img src="/images/stars.jpg" alt="star" width={70} height={15} />
                <p className="text-gray-500 text-center text-sm">752 Reviews</p> </div>
            </div></div>


          <div className="border-2 bg-white w-60 h-72">
            <img src="/images/honda.jpeg" alt="Honda City"
              width={250}
              height={80} />

            <div className="text-center">
              <Link className="text-blue-900 font-bold  mt-2" href="city">Honda City</Link>
              <p className="text-green-500 text-center text-sm">PKR 46.5 - 58.5 lacs</p>
              <div className="flex items-center gap-1 mt-4 ml-7">
                <img src="/images/stars.jpg" alt=" star" width={70} height={15} />
                <p className="text-gray-500 text-center">456 Reviews</p> </div>
            </div></div>


          <div className="border-2 bg-white w-60 h-72">
            <img src="/images/Civic.jpeg" alt="Honda Civic"
              width={250}
              height={80} />

            <div className="text-center">
              <Link className="text-blue-900 font-bold mt-2" href="civic">Honda Civic</Link>
              <p className="text-green-500 text-center text-sm">PKR 86.6 - 99.0 lacs</p>
              <div className="flex items-center gap-1 mt-4 ml-7">
                <img src="/images/stars.jpg" alt="star" width={70} height={15} />
                <p className="text-gray-500 text-center">359 Reviews</p> </div>
            </div></div>
        </div> <br /> <br /> <br />



      </div>

    </div>

  );
} 
