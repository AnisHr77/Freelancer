'use client';
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProjectForm() {
    const [image, setImage] = useState<string | null>(null);
    const [projectFiles, setProjectFiles] = useState<File[]>([]);
    const [previewURLs, setPreviewURLs] = useState<string[]>([]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const newFiles = Array.from(files);
            setProjectFiles((prev) => [...prev, ...newFiles]);
        }
    };

    useEffect(() => {
        const urls = projectFiles.map((file) => URL.createObjectURL(file));
        setPreviewURLs(urls);

        return () => {
            urls.forEach((url) => URL.revokeObjectURL(url));
        };
    }, [projectFiles]);

    return (
        <div className="pl-10  ">
            <p className=" font-medium text-[20px] text-center " >Add your first project</p>
            <form className="py-10" >
                {/* Project Cover Image */}
                <label>
                    <input
                        type="file"
                        className="w-30 h-10 rounded-[5px]  text-white font-semibold text-center bg-[#3F5FFF] "
                        onChange={handleImageChange}
                        accept=".png,.jpg,.jpeg"
                        required
                    />
                    {image && (
                        <Image
                            alt="Project Cover"
                            src={image}
                            width={100}
                            height={100}
                            className="w-80 h-35 mt-2"
                        />
                    )}
                </label>

                {/* Project Title */}
                <label className="block mt-4">Add title for your project</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Type here"
                    className="w-50 h-10 rounded-[5px] border pl-2"
                    required
                />

                {/* Description */}
                <label className="block mt-4">Add a description for your project</label>
                <textarea
                    className="w-150 h-50 rounded-[5px] border pl-2"
                    name="description"
                    placeholder="Type here..."
                    minLength={255}
                    required
                />

                {/* Project Files Upload */}
                <label className="block mt-4">Add files of your project</label>
                <input
                    type="file"
                    className="w-30 h-10 rounded-[5px]  text-center text-white font-semibold bg-[#3F5FFF]  "
                    onChange={handleFileChange}
                    accept=".png,.jpg,.jpeg,.pdf,.mp4"
                    multiple
                />

                {/* Previews */}
                <div className="mt-4 flex gap-8 ">
                    {projectFiles.map((file, index) => {
                        const previewURL = previewURLs[index];

                        return (
                            <div key={index} className=" flex items-start rounded   ">
                                {file.type.startsWith("image/") && previewURL && (
                                    <Image
                                        alt={file.name}
                                        src={previewURL}
                                        width={100}
                                        height={200}
                                        className="w-70 h-50  "
                                    />
                                )}

                                {file.type === "application/pdf" && previewURL && (
                                    <iframe
                                        src={previewURL}
                                        width="300"
                                        height="200"
                                        title="PDF Preview"
                                        className="w-70 h-50  "
                                    />
                                )}

                                {file.type.startsWith("video/") && previewURL && (
                                    <video controls width="300" height={200} className="w-70 h-50">
                                        <source src={previewURL} type={file.type} />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Project Link */}
                <label className="block mt-4">Add your project link if you have</label>
                <input
                    type="url"
                    name="link"
                    placeholder="Type here..."
                    className="w-100 h-10 rounded-[5px] border"
                />

                <button type="submit" className="w-30 h-10 rounded-[5px] block mt-10 cursor-pointer text-white font-medium bg-[#3F5FFF] ">Confirm</button>
            </form>
        </div>
    );
}
