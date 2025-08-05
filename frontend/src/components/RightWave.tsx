// components/WaveLayout.tsx
const WaveLayout = () => {
    return (
        <div className="relative flex w-full h-screen overflow-hidden">
            {/* Left content */}
            <div className="w-1/2 bg-white z-10 p-10">
                <h1 className="text-3xl font-bold mb-4">Your Rating is <span className="text-blue-600">4.5 / 5</span></h1>
                {/* Put question/skill rating, etc., here */}
            </div>

            {/* Right wave background */}
            <div className="w-1/2 bg-gradient-to-br from-[#6a11cb] to-[#2575fc] relative">
                <div className="absolute left-[-20%] top-0 h-full w-[120%] z-0">
                    <svg viewBox="0 0 500 500" preserveAspectRatio="none" className="w-full h-full">
                        <path
                            d="M250,0 C350,100 150,400 0,500 L500,500 L500,0 Z"
                            fill="#ffffff"
                        />
                    </svg>
                </div>

                <div className="relative z-10 h-full flex items-center justify-center text-white">
                    <div className="text-center max-w-md">
                        <h2 className="text-2xl font-bold">Welcome</h2>
                        <p className="text-sm mt-2">Here’s your profile summary</p>
                        {/* You can add an illustration image here if needed */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaveLayout;
