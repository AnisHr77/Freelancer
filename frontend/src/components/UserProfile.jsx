"use client";
export default function UserProfile({ name, location }) {
    return (
        <div className="bg-purple-600 text-white p-6 rounded-xl flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full mb-2" />
            <h3 className="font-bold">{name}</h3>
            <p className="text-sm">{location}</p>
            <button className="mt-4 bg-white text-purple-600 px-4 py-1 rounded-full text-sm">Edit Profile</button>
        </div>
    );
}
