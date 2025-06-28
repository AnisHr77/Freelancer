import React from 'react'

const Footer = () => {
    return (
        <footer className='absolute bottom-0 w-screen '>
            <div className="conatiner  flex flex-col gap-4 items-center py-15  bg-blue-600 h-auto justify-between md:gap-0 md:px-0 md:flex-row">
                <div style={{ backgroundColor: 'rgba(128, 128, 128, 0.3)' }} className="text-white font-medium text-[20px] h-50 flex items-center text-center  px-8 rounded-[5px] md:text-left  md:px-15 md:w-120 ">
                    <p className='w-65 '>Stay Up to Date with our Latest Innovations: Sign Up for Our Newsletters!</p>
                </div>
                <form className='flex flex-col gap-2 text-white mx-40'>
                    <label>Name*</label>
                    <input
                        type="text"
                        name='name'
                        className="w-80 h-10 bg-white rounded-[5px] outline-none text-black pl-2"
                        required
                    />
                    <label>Email*</label>
                    <input
                        type="email"
                        name='email'
                        className="w-80 h-10 bg-white rounded-[5px] outline-none text-black pl-2"
                        required
                    />
                    <button type='submit'
                        className=' md:w-30 h-10 mt-4 rounded-[5px] bg-white text-blue-600 hover:bg-blue-600 hover:text-white hover:border active:opacity-50'
                    >
                        Subscribe
                    </button>
                </form>
            </div>
            <div className=""></div>
        </footer>
    )
}

export default Footer