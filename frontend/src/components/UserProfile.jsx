"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function UserProfile() {
    const [profile, setProfile] = useState({ name: "", location: "" });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:8001/api/user/profile", { withCredentials: true })
            .then((response) => {
                setProfile(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching profile:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="bg-[#7A4D8B] text-white p-6 rounded-xl flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full mb-2" />
            <h3 className="font-bold">{profile.name}</h3>
            <p className="text-sm">{profile.location}</p>
            <Link href="/account/edit" passHref>
                <button
                    type="button"
                    className="
                        mt-4
                        bg-white
                        text-[#7A4D8B]
                        px-6
                        py-2
                        rounded-full
                        text-sm
                        font-semibold
                        shadow-md
                        transition
                        duration-150
                        ease-in-out
                        hover:bg-[#F1E6F5]
                        focus:outline-none
                        focus:ring-2
                        focus:ring-[#b88fd1]
                        active:bg-[#e4d0ec]
                        active:scale-95
                    "
                >
                    Edit Profile
                </button>
            </Link>
        </div>
    );
}
