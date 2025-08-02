export default function Role() {
    return (
        <div className=" flex justify-center items-center  ">
            <img src={"/fame.png"} className=" absolute right-0 top-0 w-60 h-60 " />
            <img src={"/fame2.png"} className=" absolute left-0 bottom-0 w-60 h-60 " />
            <form className=" flex flex-col justify-center items-center gap-6 mt-10 ">
                <p className=" text-[25px] w-110 text-center font-bold " >Complete your free account setup</p>
                <div className=" flex gap-10 ">
                    <select name="gender" className=" w-60 h-10 rounded-[5px] bg-[#E5E5EF] text-black " required >
                        <option>Gender</option>
                        <option>Male</option>
                        <option>Femmale</option>
                    </select>
                    <select name="gender" className=" w-60 h-10 rounded-[5px] bg-[#E5E5EF] text-black  " required >
                        <option>choose your country</option>
                    </select>
                </div>
                <p className=" font-bold text-[20px] " >I am :</p>
                <div className=" relative flex justify-center items-center gap-5 bg-[#E5E5EF] rounded-[5px] h-10 px-4 ">
                    <div className=" flex justify-center items-center gap-2 ">
                        <input type="radio" value="CSS" className="   rounded-[5px] "  />
                        <label>Freelancer</label>
                    </div>
                    {/* <hr className=" text-black w-1 h-10 " ></hr> */}
                    <div className=" flex justify-center items-center gap-2 ">
                        <input type="radio" value="CSS" className="   rounded-[5px] "  />
                        <label>Client</label>
                    </div>
                </div>
                <div className=" grid gap-4 mt-10 ">
                    <div className=" flex gap-4 justify-center items-center ">
                        <input type="checkbox" className=" bg-[#7A4D8B] " required />
                        <label className=" font-medium w-145 " >Yes! Send me genuinely useful emails every now and then to help me get the most out of Upwork.<span></span></label>
                    </div>
                    <div className=" flex gap-4 justify-center items-center ">
                        <input type="checkbox" className=""  required />
                        <label className=" font-medium w-145 " >Yes, I understand and agree to the<span className=" text-[#7A4D8B] font-semibold " >Tasklinker Terms of Service</span>, including the<span className=" text-[#7A4D8B] font-semibold " >User Agreement and Privacy Policy</span>.</label>
                    </div>
                </div>


                <button type="submit" className=" mt-5  w-80 h-10 rounded-[20px] bg-[#7A4D8B] text-white " >Create My Account</button>
            </form>
        </div>
    );
}