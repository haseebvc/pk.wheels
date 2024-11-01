import Link from "next/link";

export default function Civic() {
    return (
        <div>
            <div className="bg-gray-200 w-ful h-[120vh]">

                <div className="text-center font-bold p-1 text-2xl font-sans underline">
                    <h1 className="m-8">
                        Honda Civic 2024 Price in Pakistan, Images Reviews & Specs</h1>
                </div>

                <div className="flex justify-center">
                    <div className=" w-60 mt-1"><img src="/images/Civic.jpeg" alt="" height={250} width={250} />
                    </div></div>

                <div className="mt-6 flex gap-5 justify-center text-center text-sm text-blue-950 ">
                    <button className="border-2 border-blue-800 w-36 h-11 rounded-md hover:text-white hover:bg-blue-950">Book a test drive</button>
                    <button className="border-2 border-blue-800 w-44 h-12 rounded-md hover:text-white hover:bg-blue-950">Request Bank Fianace</button>
                    <button className="border-2 border-blue-800 w-28 h-12 rounded-md hover:text-white hover:bg-blue-950">Visit Place</button>
                    <button className="border-2 border-blue-800 w-28 h-12 rounded-md hover:text-white hover:bg-blue-950">Car Inspection</button>
                </div>

                <h2 className="mt-7 text-center text-2xl font-medium">Vehicle Description</h2> <br />

                <p className="mx-40">The current-generation <b>Honda Civic</b> is one of the automaker's best yet.
                    In fact, our test team named the Civic the Edmunds Top Rated Car for 2023. Just
                    about everything you'd want from a small sedan or hatchback is here, including
                    plenty of interior room, pleasing performance, and nearly all of the latest
                    technology and driver assist features Honda has on offer. There's even the
                    high-performance 315-horsepower Type R version to satisfy driving enthusiasts.</p>


                <div className="mt-8">
                    <ul className="grid grid-cols-5 mx-28 leading-tight">
                        <li><b>Number of Doors</b> 4</li>
                        <li><b>Engine</b> 1800 CC</li>
                        <li><b>Condition</b> 8.5 / 10</li>
                        <li><b>Driven</b> 9,500 KM</li>
                        <li><b>Suspension Type:</b> Soft Suspension</li>
                        <li><b>Avg</b> 12 KM per ltr</li>
                        <li><b>Transmission</b> Automatic</li>
                        <li><b>Fuel Type</b> High Octane</li>
                    </ul>
                </div>

                <h2 className="text-center text-green-600 mt-9 text-2xl">PKR 9,899,000</h2>

                <div className="ml-[45%] mt-8">
                    <Link href="./form">
                        <button className="bg-blue-800 text-white w-36 h-12 rounded-md hover:text-xl">Make Payment</button></Link>
                </div>

            </div>
        </div>
    )
}