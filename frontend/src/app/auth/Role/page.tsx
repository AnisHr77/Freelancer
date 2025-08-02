export default function Role() {
    return (
        <div className=" flex justify-center items-center ">
            <img src={"/fame.png"} className=" absolute right-0 top-0 w-60 h-60 " />
            <img src={"/fame2.png"} className=" absolute left-0 bottom-0 w-60 h-60 " />
            <div className=" flex flex-col justify-center items-center ">
                <p>Complete your free account setup</p>
                <div className=" flex gap-10 ">
                    <select name="gender"  className=" w-60 h-10 rounded-[5px] bg-[#E5E5EF] text-black " >
                        <option></option>
                    </select>
                    <select name="gender" className=" w-60 h-10 rounded-[5px] bg-[#E5E5EF] text-black " >
                        <option></option>
                    </select>
                </div>
                <p>I am :</p>


            </div>
        </div>
    );
}