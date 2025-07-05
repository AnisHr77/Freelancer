export default function Topbar() {
    return (
        <div className="flex justify-between items-center border-b border-b-neutral-200 pb-4">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-4">
                <button className="bg-gray-200 px-3 py-1 rounded-full">Company</button>
                <input
                    type="text"
                    placeholder="Search"
                    className="border px-2 py-1 rounded"
                />
                <div className="w-8 h-8 rounded-full bg-gray-300" />
            </div>
        </div>
    );
}
