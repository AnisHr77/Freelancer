'use clinet'

import Image from "next/image";
import { useState } from "react";

export default function ProjectForm() {
    const [image, setImage] = useState<string | null>(null);
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };
    return (
        <div className=" pl-10 ">
            <form>
                <label>
                    <input
                        type="file"
                        className="w-50 h-10 rounded-[5px] border "
                        onChange={handleImageChange}
                        accept=".png,.jpg,.jpeg,.pdf"
                        required
                    />
                    {image && <Image alt="" src={image} width={100} height={100} className="w-80 h-35  " />}
                    {/* Add picture for your project */}
                </label>
                <label className="block mt-4 " >Add title for your project</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Type here"
                    className="w-50 h-10 rounded-[5px] border pl-2 "
                    required
                />
                <label className="block mt-4 " >Add a describtion for your project</label>
                <textarea
                    className=" w-150 h-50 rounded-[5px] border pl-2 "
                    placeholder="Type here..."
                    minLength={255}
                    required
                />
                
            </form>
        </div>
    );
}