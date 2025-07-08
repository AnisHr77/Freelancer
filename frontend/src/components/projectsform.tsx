'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
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
        <div className="   flex  justify-center ">
            <div className="pt-5">
                <p className="  text-[30px]  text-left text-[#3f5fff] font-bold  " >Submit a New Project</p>
                <form className="py-5 space-y-2 " >
                    {/* Project Cover Image */}
                    <label className="block" >Project Cover Image</label>
                    <input
                        type="file"
                        className="w-80 md:w-150 lg:w-180 h-10 rounded-[5px]    font-semibold text-center  border "
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
                            className="w-80 h-60 mt-2"
                        />
                    )}


                    {/* Project Title */}
                    <label className="block mt-4">Project Title</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Type here"
                        className="w-full min-w-80 max-w-180 h-10 rounded-[5px] border pl-2"
                        required
                    />

                    {/* Description */}
                    <label className="block mt-4">Description</label>
                    <textarea
                        className="w-full min-w-80 max-w-180 h-30 rounded-[5px] border pl-2"
                        name="description"
                        placeholder="Describe your project in detail..."
                        minLength={255}
                        required
                    />

                    {/* Project Files Upload */}
                    <label className="block mt-4">Project Files</label>
                    <input
                        type="file"
                        className="w-full min-w-80 max-w-180 h-10 rounded-[5px]  text-center font-semibold  border  "
                        onChange={handleFileChange}
                        accept=".png,.jpg,.jpeg,.pdf,.mp4"
                        multiple
                    />
                    <div className="mt-4 grid lg:flex gap-8 ">
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
                    <label className="block mt-4">Project Link (optional)</label>
                    <input
                        type="url"
                        name="link"
                        placeholder="https://yourproject.com"
                        className="w-full min-w-80 max-w-180 h-10 pl-2 rounded-[5px] border"
                    />
                    <div className="flex justify-between">
                        <Link
                            href="/auth/Questions/skills"
                            className=" w-20 h-10 mt-10 rounded-[5px] flex items-center justify-center bg-[#3f5fff] text-white font-medium hover:bg-blue-700 transition "
                        >
                            Back
                        </Link>
                        <button
                            type="submit"
                            className="w-30 h-10   rounded-[5px] block mt-10 cursor-pointer text-white font-medium bg-[#3F5FFF] hover:bg-blue-700 transition ">
                            Confirm
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}