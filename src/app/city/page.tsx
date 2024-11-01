import Link from "next/link";

export default function City() {
    return (
        <div>
            <div className="bg-gray-200 w-ful h-[120vh]">

                <div className="text-center font-bold p-1 text-2xl font-sans underline">
                <h1 className="m-8">
                    Honda City 2024 Price in Pakistan, Images Reviews & Specs</h1>
                    </div>

                <div className="flex justify-center">
                    <div className=" w-60 mt-1"><img src="/images/honda.jpeg" alt="" height={250} width={250} />
                    </div></div>

                <div className="mt-6 flex gap-5 justify-center text-center text-sm text-blue-950 ">
                    <button className="border-2 border-blue-800 w-36 h-11 rounded-md hover:text-white hover:bg-blue-950">Book a test drive</button>
                    <button className="border-2 border-blue-800 w-44 h-12 rounded-md hover:text-white hover:bg-blue-950">Request Bank Fianace</button>
                    <button className="border-2 border-blue-800 w-28 h-12 rounded-md hover:text-white hover:bg-blue-950">Visit Place</button>
                    <button className="border-2 border-blue-800 w-28 h-12 rounded-md hover:text-white hover:bg-blue-950">Car Inspection</button>
                </div>

                <h2 className="mt-7 text-center text-2xl font-medium">Vehicle Description</h2> <br />

                <p className="mx-40"><b>Honda City V</b> Petrol MT 2024 is the petrol variant in the Honda City
                   lineup and is priced at Rs. 12.89 Lakh. It gives a mileage of 17.8 kmpl.
                   Honda City V Petrol MT 2024 is available in Manual transmission and offered
                   in 6 colours: Golden Brown Metallic, Obsidian Blue Pearl, Meteoroid Grey
                   Metallic, Radiant Red Metallic, Lunar Silver Metallic and Platinum White Pearl.</p>

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

                <h2 className="text-center text-green-600 mt-9 text-2xl">PKR 58,50,000</h2>

                <div className="ml-[45%] mt-8">
                    <Link href="./form">
                    <button className="bg-blue-800 text-white w-36 h-12 rounded-md hover:text-xl">Make Payment</button></Link>
                </div>

            </div> 
        </div>
    )
}