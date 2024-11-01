import Link from "next/link";

export default function Form() {
    return (
        <div>
            <div className="border-2 w-[60%] h-[90%] mx-64 py-5 border-gray-400 bg-slate-100 mt-5">

                <h1 className="text-3xl font-semibold text-center uppercase mt-5 underline">enter your details</h1> <br />

                <div>
                    <form className="flex gap-5 justify-center flex-col items-center mt-6">

                        <label className="fname space-x-2"><b>First Name</b>
                            <input className="border-red-800 w-80 border rounded-xl p-2 text-center"
                                placeholder="Enter your Name.." /> </label>

                        <label className="moboleNo space-x-2"><b>Mobile No</b>
                            <input className="border-red-800 w-80 border rounded-xl p-2 text-center"
                                placeholder="Enter Your Mobile No.." />  </label>

                        <label className="address space-x-3"><b>Address</b>
                            <input type="address" className="border-red-800 w-80 border rounded-xl p-2 text-center"
                                placeholder="Enter your full Address.." /> </label>

                        <label className="ID-Card space-x-5"><b>ID-Card</b>
                            <input type="type" className="border-red-800 w-80 border rounded-xl p-2 text-center"
                                placeholder="Enter your CardNo.." /> </label>

                        <label className="email space-x-5"><b>Email</b>
                            <input type="email" className="border-red-800 w-80 border rounded-xl p-2 text-center"
                                placeholder="Enter your Email.." /> </label>

                        <Link href="./thankyou">
                            <button className="bg-blue-800 text-white py-3 px-8 rounded-lg mt-4">Place your Order</button></Link>
                        <br />
                    </form>
                </div>
            </div> <br /> <br />
        </div>

    );
}